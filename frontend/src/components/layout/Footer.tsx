import { Link } from 'react-router-dom';
import { Sparkles, Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';

const footerLinks = {
  product: {
    title: '产品',
    links: [
      { name: '智能JD生成', href: '#features' },
      { name: '简历智能解析', href: '#features' },
      { name: 'AI面试助手', href: '#features' },
      { name: '数据分析看板', href: '#features' },
    ],
  },
  solutions: {
    title: '解决方案',
    links: [
      { name: '企业招聘', href: '#solutions' },
      { name: '校园招聘', href: '#solutions' },
      { name: '猎头机构', href: '#solutions' },
      { name: 'RPO服务商', href: '#solutions' },
    ],
  },
  company: {
    title: '公司',
    links: [
      { name: '关于我们', href: '#about' },
      { name: '客户案例', href: '#cases' },
      { name: '加入我们', href: '#about' },
      { name: '联系我们', href: '#contact' },
    ],
  },
};

export function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #0F1629 0%, #0A0A1A 100%)',
      }}
    >
      {/* Decorative glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-64 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(37, 99, 235, 0.1) 0%, transparent 70%)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-5 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-2">
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
            <p className="mt-4 text-sm text-slate-400 leading-relaxed max-w-sm">
              飞鼠AI招聘助手是新一代智能ATS系统，通过AI Agent技术实现招聘全流程自动化，帮助企业高效获取优质人才。
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full transition-colors cursor-pointer"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                }}
              >
                <Linkedin className="h-5 w-5 text-slate-400 hover:text-white transition-colors" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full transition-colors cursor-pointer"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                }}
              >
                <Twitter className="h-5 w-5 text-slate-400 hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([key, section]) => (
            <div key={key}>
              <h3 className="text-sm font-semibold text-white mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-white transition-colors cursor-pointer"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div
          className="mt-12 flex flex-col md:flex-row items-center justify-between gap-4 rounded-2xl px-6 py-4"
          style={{
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-400">
            <span className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              contact@feishuai.com
            </span>
            <span className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              400-888-9999
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              北京市朝阳区
            </span>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-white/10 pt-8">
          <p className="text-sm text-slate-500">
            2024 飞鼠AI招聘助手. 保留所有权利.
          </p>
          <div className="flex items-center gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-slate-300 transition-colors cursor-pointer">隐私政策</a>
            <a href="#" className="hover:text-slate-300 transition-colors cursor-pointer">服务条款</a>
            <a href="#" className="hover:text-slate-300 transition-colors cursor-pointer">京ICP备XXXXXXXX号</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
