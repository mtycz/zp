import { ReactNode } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div
      className="min-h-screen"
      style={{
        background: 'linear-gradient(180deg, #0A0A1A 0%, #0F1629 50%, #0A0A1A 100%)',
      }}
    >
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
