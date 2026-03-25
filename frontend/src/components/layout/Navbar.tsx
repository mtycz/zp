import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Sparkles } from 'lucide-react';

const navigation = [
  { name: '产品功能', href: '#features' },
  { name: '解决方案', href: '#solutions' },
  { name: '客户案例', href: '#cases' },
  { name: '关于我们', href: '#about' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-4 left-4 right-4 z-50">
      <nav
        className="mx-auto max-w-7xl rounded-2xl px-6 py-4"
        style={{
          background: 'rgba(15, 22, 41, 0.85)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        }}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div
              className="flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #2563EB 0%, #8B5CF6 100%)',
                boxShadow: '0 4px 20px rgba(37, 99, 235, 0.4)',
              }}
            >
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">
              飞鼠<span style={{ color: '#8B5CF6' }}>AI</span>招聘
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-slate-300 transition-colors hover:text-white cursor-pointer"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex lg:items-center lg:gap-4">
            <Button
              variant="ghost"
              className="text-slate-300 hover:text-white hover:bg-white/10"
            >
              登录
            </Button>
            <Button
              className="rounded-full px-6 text-white font-medium transition-all duration-300 hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #2563EB 0%, #8B5CF6 100%)',
                boxShadow: '0 4px 20px rgba(37, 99, 235, 0.4)',
              }}
              onClick={() => window.open('https://iza99wzyuc.feishu.cn/share/base/form/shrcnhqYeb8BoDSvzHgzPf1IULd', '_blank')}
            >
              免费试用
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-80 border-l border-white/10"
              style={{
                background: 'rgba(15, 22, 41, 0.98)',
                backdropFilter: 'blur(20px)',
              }}
            >
              <div className="flex flex-col gap-6 pt-8">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-lg font-medium text-slate-300 transition-colors hover:text-white cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <div className="mt-4 flex flex-col gap-3">
                  <Button variant="outline" className="w-full rounded-full border-white/20 text-white hover:bg-white/10">
                    登录
                  </Button>
                  <Button
                    className="w-full rounded-full text-white font-medium"
                    style={{
                      background: 'linear-gradient(135deg, #2563EB 0%, #8B5CF6 100%)',
                    }}
                    onClick={() => {
                      setIsOpen(false);
                      window.open('https://iza99wzyuc.feishu.cn/share/base/form/shrcnhqYeb8BoDSvzHgzPf1IULd', '_blank');
                    }}
                  >
                    免费试用
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
