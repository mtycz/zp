import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Sparkles, ArrowLeft, Send, Loader2 } from 'lucide-react';
import { FadeIn } from '@/components/MotionPrimitives';

export default function Login() {
  const navigate = useNavigate();
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState('');
  const [codeSent, setCodeSent] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleSendCode = () => {
    if (!phone || phone.length !== 11) return;
    setCountdown(60);
    setCodeSent(true);
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleLogin = () => {
    if (!phone || !code) return;
    setLoading(true);
    // 模拟登录
    setTimeout(() => {
      setLoading(false);
      navigate('/');
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 30%, rgba(37, 99, 235, 0.25) 0%, transparent 50%)',
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 30% 70%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)',
        }}
      />
      
      {/* Grid Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <FadeIn className="relative w-full max-w-md px-6 py-12">
        {/* Back to Home */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          <span className="text-sm">返回首页</span>
        </Link>

        {/* Logo */}
        <div className="flex items-center gap-3 mb-8">
          <div
            className="flex h-12 w-12 items-center justify-center rounded-xl"
            style={{
              background: 'linear-gradient(135deg, #2563EB 0%, #8B5CF6 100%)',
              boxShadow: '0 8px 32px rgba(37, 99, 235, 0.4)',
            }}
          >
            <Sparkles className="h-6 w-6 text-white" />
          </div>
          <span className="text-2xl font-bold text-white">
            飞鼠<span style={{ color: '#8B5CF6' }}>AI</span>招聘
          </span>
        </div>

        <Card
          className="p-8"
          style={{
            background: 'rgba(26, 31, 54, 0.8)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '24px',
          }}
        >
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-white mb-2">欢迎回来</h1>
            <p className="text-slate-400">请使用手机号登录</p>
          </div>

          <div className="space-y-5">
            {/* Phone Input */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">手机号</label>
              <Input
                type="tel"
                placeholder="请输入11位手机号"
                value={phone}
                onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 11))}
                className="h-12 bg-white/5 border-white/10 text-white placeholder:text-slate-500 rounded-xl focus:ring-2 focus:ring-blue-500/50"
              />
            </div>

            {/* Code Input */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">验证码</label>
              <div className="flex gap-3">
                <Input
                  type="text"
                  placeholder="请输入验证码"
                  value={code}
                  onChange={(e) => setCode(e.target.value.slice(0, 6))}
                  className="h-12 bg-white/5 border-white/10 text-white placeholder:text-slate-500 rounded-xl focus:ring-2 focus:ring-blue-500/50 flex-1"
                />
                <Button
                  onClick={handleSendCode}
                  disabled={!phone || phone.length !== 11 || countdown > 0}
                  className="h-12 px-6 rounded-xl font-medium whitespace-nowrap"
                  style={{
                    background: codeSent ? 'rgba(139, 92, 246, 0.2)' : 'linear-gradient(135deg, #2563EB 0%, #8B5CF6 100%)',
                    border: codeSent ? '1px solid rgba(139, 92, 246, 0.3)' : 'none',
                  }}
                >
                  {countdown > 0 ? `${countdown}s` : codeSent ? '已发送' : '获取验证码'}
                </Button>
              </div>
            </div>

            {/* Login Button */}
            <Button
              onClick={handleLogin}
              disabled={!phone || !code || loading}
              className="w-full h-12 rounded-xl text-white font-medium text-base transition-all duration-300 hover:scale-[1.02]"
              style={{
                background: 'linear-gradient(135deg, #2563EB 0%, #8B5CF6 100%)',
                boxShadow: '0 8px 32px rgba(37, 99, 235, 0.4)',
              }}
            >
              {loading ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : (
                <>
                  <Send className="mr-2 h-5 w-5" />
                  立即登录
                </>
              )}
            </Button>

            {/* Terms */}
            <p className="text-center text-xs text-slate-500">
              登录即表示同意
              <a href="#" className="text-blue-400 hover:underline mx-1">《服务协议》</a>
              和
              <a href="#" className="text-blue-400 hover:underline mx-1">《隐私政策》</a>
            </p>
          </div>
        </Card>

        {/* Other Login Methods */}
        <div className="mt-8">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-transparent text-slate-500">其他登录方式</span>
            </div>
          </div>

          <div className="mt-6 flex justify-center gap-4">
            {/* 飞书登录 */}
            <Button
              variant="outline"
              className="w-14 h-14 rounded-full border-white/10 hover:bg-white/10"
              title="飞书登录"
            >
              <svg className="w-6 h-6" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 29C21 29 25 26.9339 28 23.4065C36 14 41.4242 16.8166 44 17.9998C38.5 20.9998 40.5 29.6233 33 35.9998C28.382 39.9259 23.4945 41.014 19 41C12.5231 40.9799 6.86226 37.7637 4 35.4063V16.9998" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M5.64808 15.8669C5.02231 14.9567 3.77715 14.7261 2.86694 15.3519C1.95673 15.9777 1.72615 17.2228 2.35192 18.1331L5.64808 15.8669ZM36.0021 35.7309C36.958 35.1774 37.2843 33.9539 36.7309 32.9979C36.1774 32.042 34.9539 31.7157 33.9979 32.2691L36.0021 35.7309ZM2.35192 18.1331C5.2435 22.339 10.7992 28.144 16.8865 32.2239C19.9345 34.2667 23.217 35.946 26.449 36.7324C29.6946 37.522 33.0451 37.4428 36.0021 35.7309L33.9979 32.2691C32.2049 33.3072 29.9929 33.478 27.3947 32.8458C24.783 32.2103 21.9405 30.7958 19.1135 28.9011C13.4508 25.106 8.2565 19.661 5.64808 15.8669L2.35192 18.1331Z" fill="currentColor"/>
                <path d="M33.5947 17C32.84 14.7027 30.8551 9.94054 27.5947 7H11.5947C15.2174 10.6757 23.0002 16 27.0002 24" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Button>
            {/* 微信登录 */}
            <Button
              variant="outline"
              className="w-14 h-14 rounded-full border-white/10 hover:bg-white/10"
              title="微信登录"
            >
              <svg className="w-6 h-6" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M36.9974 21.7112C36.8434 13.0079 29.7401 6 21 6C12.1634 6 5 13.1634 5 22C5 26.1701 6.59531 29.9676 9.20892 32.8154L8.01043 40.0257L15.125 36.9699C18.2597 38.0122 21.218 38.2728 24 37.7516" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15.125 20.4667C16.3676 20.4667 17.375 19.4519 17.375 18.2C17.375 16.9482 16.3676 15.9333 15.125 15.9333C13.8824 15.9333 12.875 16.9482 12.875 18.2C12.875 19.4519 13.8824 20.4667 15.125 20.4667Z" fill="currentColor"/>
                <path d="M24.125 20.4667C25.3676 20.4667 26.375 19.4519 26.375 18.2C26.375 16.9482 25.3676 15.9333 24.125 15.9333C22.8824 15.9333 21.875 16.9482 21.875 18.2C21.875 19.4519 22.8824 20.4667 24.125 20.4667Z" fill="currentColor"/>
                <path d="M38.7618 39.9293C37.0135 41.2302 34.8467 42 32.5 42C26.701 42 22 37.299 22 31.5C22 25.701 26.701 21 32.5 21C38.299 21 43 25.701 43 31.5C43 33.0997 42.6423 34.6159 42.0024 35.9728" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M42.0024 35.9728L43 42L38.7618 39.9293" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M35.6875 30.7999C34.7555 30.7999 34 30.0388 34 29.0999C34 28.161 34.7555 27.3999 35.6875 27.3999C36.6195 27.3999 37.375 28.161 37.375 29.0999C37.375 30.0388 36.6195 30.7999 35.6875 30.7999Z" fill="currentColor"/>
                <path d="M28.9375 30.7999C28.0055 30.7999 27.25 30.0388 27.25 29.0999C27.25 28.161 28.0055 27.3999 28.9375 27.3999C29.8695 27.3999 30.625 28.161 30.625 29.0999C30.625 30.0388 29.8695 30.7999 28.9375 30.7999Z" fill="currentColor"/>
              </svg>
            </Button>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
