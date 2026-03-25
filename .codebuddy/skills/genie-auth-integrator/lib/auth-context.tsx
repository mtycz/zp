/**
 * Auth Context - Global authentication state provider for React
 *
 * Provides user and session state across the entire app via React Context.
 * Automatically listens for Supabase auth state changes (login, logout, token refresh).
 *
 * @example
 * ```typescript
 * // In App.tsx - wrap your app
 * import { AuthProvider } from '@/contexts/AuthContext';
 *
 * function App() {
 *   return (
 *     <AuthProvider>
 *       <Router>...</Router>
 *     </AuthProvider>
 *   );
 * }
 *
 * // In any component - consume auth state
 * import { useAuthContext } from '@/contexts/AuthContext';
 *
 * function Profile() {
 *   const { user, session, loading, signOut } = useAuthContext();
 *   if (loading) return <div>Loading...</div>;
 *   if (!user) return <Navigate to="/login" />;
 *   return (
 *     <div>
 *       <p>Hello, {user.email}</p>
 *       <button onClick={() => signOut()}>Sign Out</button>
 *     </div>
 *   );
 * }
 * ```
 */

import { createContext, useContext, useEffect, useState, useCallback, ReactNode } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { supabase } from '@/lib/supabase';
import { Navigate } from 'react-router-dom';

interface AuthContextType {
  /** Current authenticated user, or null if not logged in */
  user: User | null;
  /** Current session with access_token and refresh_token, or null */
  session: Session | null;
  /** True while initial auth state is being resolved */
  loading: boolean;
  /** Sign out the current user and clear session */
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

/**
 * AuthProvider - Wrap your app with this to provide global auth state.
 *
 * Handles:
 * - Initial session recovery from localStorage
 * - Auth state change subscription (login, logout, token refresh, OAuth callback)
 * - Cleanup on unmount
 */
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  const signOut = useCallback(async () => {
    await supabase.auth.signOut();
  }, []);

  useEffect(() => {
    // Register listener FIRST to avoid missing events from SDK initialization.
    // Supabase SDK's detectSessionInUrl: true automatically handles URL hash
    // tokens (access_token, refresh_token) and triggers this callback.
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, newSession) => {
      setSession(newSession);
      setUser(newSession?.user ?? null);
      setLoading(false);
    });

    // Wait for SDK initialization (processes URL hash tokens if present),
    // then get session to cover page refresh recovery.
    supabase.auth.initialize().then(() => {
      supabase.auth.getSession().then(({ data: { session: currentSession } }) => {
        setSession(currentSession);
        setUser(currentSession?.user ?? null);
        setLoading(false);
      });
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, session, loading, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

/**
 * useAuthContext - Access auth state from any component.
 *
 * Must be used within an <AuthProvider>.
 *
 * @returns { user, session, loading, signOut }
 * @throws Error if used outside AuthProvider
 */
export const useAuthContext = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuthContext must be used within an AuthProvider');
  }
  return context;
};

/**
 * ProtectedRoute - Redirects unauthenticated users to /login (or custom path).
 *
 * Wrap routes that require login:
 * ```tsx
 * <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
 * <Route path="/settings" element={<ProtectedRoute redirectTo="/signin"><Settings /></ProtectedRoute>} />
 * ```
 */
export const ProtectedRoute = ({ children, redirectTo = '/login' }: { children: ReactNode; redirectTo?: string }) => {
  const { user, loading } = useAuthContext();
  if (loading) return null;
  if (!user) return <Navigate to={redirectTo} replace />;
  return <>{children}</>;
};

/**
 * GuestRoute - Redirects authenticated users away from guest-only pages.
 *
 * Wrap routes that should only be accessible when logged out (login, register):
 * ```tsx
 * <Route path="/login" element={<GuestRoute><Login /></GuestRoute>} />
 * <Route path="/login" element={<GuestRoute redirectTo="/dashboard"><Login /></GuestRoute>} />
 * ```
 */
export const GuestRoute = ({ children, redirectTo = '/' }: { children: ReactNode; redirectTo?: string }) => {
  const { user, loading } = useAuthContext();
  if (loading) return null;
  if (user) return <Navigate to={redirectTo} replace />;
  return <>{children}</>;
};
