import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Layout } from '@/components/layout/Layout';
import { FadeIn, Stagger, HoverLift, motion, fadeUp } from '@/components/MotionPrimitives';
import {
  Sparkles,
  FileText,
  Users,
  Brain,
  MessageSquare,
  Mic,
  Target,
  Zap,
  Shield,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Bot,
  Send,
  Clock,
  ChevronRight
} from 'lucide-react';

// 痛点数据
const painPoints = [
  {
    icon: FileText,
    title: '海量简历筛选难',
    description: '企业积累数万份简历，缺乏有效工具持续盘活，优质候选人石沉大海',
  },
  {
    icon: Users,
    title: '人岗匹配效率低',
    description: '初筛无明确标准，主观判断耗时耗力，入职后留存率低',
  },
  {
    icon: Clock,
    title: '事务工作繁重',
    description: '筛选简历、打电话、安排面试占用HR大量时间，核心价值难以发挥',
  },
  {
    icon: MessageSquare,
    title: '候选人响应慢',
    description: '咨询量大，HR难以及时响应，候选人体验差，流失率高',
  },
];

// 功能模块数据
const features = [
  {
    icon: FileText,
    title: '智能JD生成',
    description: 'AI基于岗位需求自动生成结构化JD，支持多行业模板，一键优化提升职位吸引力',
    gradient: 'linear-gradient(135deg, #2563EB 0%, #3B82F6 100%)',
  },
  {
    icon: Users,
    title: '多平台寻访',
    description: '自动同步BOSS直聘、猎聘、智联等主流平台，AI智能筛选目标候选人池',
    gradient: 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)',
  },
  {
    icon: Brain,
    title: '简历智能解析',
    description: '一键下载解析简历关键信息，结构化存储，自动去重，建立人才数据库',
    gradient: 'linear-gradient(135deg, #8B5CF6 0%, #A78BFA 100%)',
  },
  {
    icon: Target,
    title: 'AI匹配打分',
    description: '基于岗位与候选人画像深度匹配，多维度评估，自动生成评分报告',
    gradient: 'linear-gradient(135deg, #2563EB 0%, #8B5CF6 100%)',
  },
  {
    icon: Send,
    title: '自动邀约面试',
    description: '阈值自动触发邀约流程，支持自定义话术模板，多渠道触达候选人',
    gradient: 'linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)',
  },
  {
    icon: Bot,
    title: 'AI面试题库',
    description: '根据岗位要求智能生成面试题，提供高中低分回答范例，标准化面试流程',
    gradient: 'linear-gradient(135deg, #8B5CF6 0%, #3B82F6 100%)',
  },
  {
    icon: Mic,
    title: '面试录音评分',
    description: '自动录音转写面试内容，AI分析回答质量，多维度评分辅助决策',
    gradient: 'linear-gradient(135deg, #2563EB 0%, #A78BFA 100%)',
  },
  {
    icon: TrendingUp,
    title: 'AI流程推进',
    description: '自动推进招聘流程节点，智能提醒面试安排，数据看板实时追踪进度',
    gradient: 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)',
  },
];

// 流程步骤
const processSteps = [
  {
    step: '01',
    title: '发布职位',
    description: 'AI智能生成JD，一键发布至多平台',
  },
  {
    step: '02',
    title: '智能寻访',
    description: '多平台同步获取候选人，自动解析入库',
  },
  {
    step: '03',
    title: 'AI筛选',
    description: '简历智能打分，精准匹配岗位需求',
  },
  {
    step: '04',
    title: '自动邀约',
    description: '高分候选人自动触达，安排面试',
  },
  {
    step: '05',
    title: '面试评估',
    description: 'AI辅助面试评分，生成决策建议',
  },
  {
    step: '06',
    title: '入职跟进',
    description: '全流程追踪，数据分析优化',
  },
];

// 核心优势
const advantages = [
  {
    icon: Zap,
    title: '效率提升300%',
    description: 'AI自动化处理重复性工作，释放HR核心价值',
  },
  {
    icon: Target,
    title: '转化率提升45%',
    description: '精准人岗匹配，提升入职质量和留存率',
  },
  {
    icon: Shield,
    title: '数据安全可靠',
    description: '企业级数据加密，隐私保护，合规运营',
  },
  {
    icon: TrendingUp,
    title: '成本降低60%',
    description: '解放前链路，减少人工投入，降低单次招聘成本',
  },
];

// 客户logo数据
// const clientLogos = [
//   '腾讯', '阿里巴巴', '字节跳动', '美团', '京东', '小米',
// ];

export default function Index() {
  const handleTryNow = () => {
    window.open('https://iza99wzyuc.feishu.cn/share/base/form/shrcnhqYeb8BoDSvzHgzPf1IULd', '_blank');
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-24">
        {/* Background Effects */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 70% 30%, rgba(37, 99, 235, 0.25) 0%, transparent 50%)',
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

        <div className="relative mx-auto max-w-7xl px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{
                background: 'rgba(37, 99, 235, 0.2)',
                border: '1px solid rgba(37, 99, 235, 0.3)',
              }}>
                <Sparkles className="h-4 w-4" style={{ color: '#8B5CF6' }} />
                <span className="text-sm font-medium" style={{ color: '#A78BFA' }}>新一代AI-ATS招聘系统</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                让AI成为您的
                <br />
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage: 'linear-gradient(135deg, #2563EB 0%, #8B5CF6 100%)',
                  }}
                >
                  专属招聘专家
                </span>
              </h1>
              
              <p className="mt-6 text-lg text-slate-400 leading-relaxed max-w-lg">
                飞鼠AI招聘助手通过Agent招聘工作流，实现寻访、初筛、邀约、面试的全流程AI赋能，帮助企业高效获取优质人才。
              </p>
              
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="rounded-full px-8 text-white font-medium text-base transition-all duration-300 hover:scale-105"
                  style={{
                    background: 'linear-gradient(135deg, #2563EB 0%, #8B5CF6 100%)',
                    boxShadow: '0 8px 32px rgba(37, 99, 235, 0.4)',
                  }}
                  onClick={handleTryNow}
                >
                  免费试用
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 text-white font-medium text-base border-white/20 hover:bg-white/10"
                  onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  了解更多
                </Button>
              </div>
              
              {/* Stats */}
              <div className="mt-12 grid grid-cols-3 gap-8">
                {[
                  { value: '300%', label: '效率提升' },
                  { value: '45%', label: '转化提升' },
                  { value: '60%', label: '成本降低' },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="text-3xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-slate-400 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </FadeIn>

            {/* Right Visual */}
            <FadeIn delay={0.2}>
              <div className="relative">
                {/* Main Card */}
                <div
                  className="relative rounded-3xl p-8"
                  style={{
                    background: 'rgba(26, 31, 54, 0.6)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    boxShadow: '0 24px 48px rgba(0, 0, 0, 0.4)',
                  }}
                >
                  {/* AI Interface Mock */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 mb-6">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{
                          background: 'linear-gradient(135deg, #2563EB 0%, #8B5CF6 100%)',
                        }}
                      >
                        <Bot className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-white">AI招聘助手</div>
                        <div className="text-xs text-slate-400">正在分析中...</div>
                      </div>
                    </div>
                    
                    {/* Candidate Cards */}
                    <div className="space-y-3">
                      {[
                        { name: '张三', score: 92, match: '高级前端工程师' },
                        { name: '李四', score: 88, match: '产品经理' },
                        { name: '王五', score: 85, match: '数据分析师' },
                      ].map((candidate, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between p-4 rounded-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer"
                          style={{
                            background: 'rgba(255, 255, 255, 0.05)',
                            border: '1px solid rgba(255, 255, 255, 0.08)',
                          }}
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-white font-medium">
                              {candidate.name[0]}
                            </div>
                            <div>
                              <div className="font-medium text-white">{candidate.name}</div>
                              <div className="text-xs text-slate-400">{candidate.match}</div>
                            </div>
                          </div>
                          <div
                            className="px-3 py-1 rounded-full text-sm font-semibold"
                            style={{
                              background: candidate.score >= 90 ? 'rgba(34, 197, 94, 0.2)' : 'rgba(37, 99, 235, 0.2)',
                              color: candidate.score >= 90 ? '#22C55E' : '#3B82F6',
                            }}
                          >
                            {candidate.score}%
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div
                  className="absolute -top-4 -right-4 px-4 py-2 rounded-xl"
                  style={{
                    background: 'rgba(34, 197, 94, 0.2)',
                    border: '1px solid rgba(34, 197, 94, 0.3)',
                  }}
                >
                  <span className="text-sm font-medium text-green-400">已自动邀约 12 位候选人</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section id="pain-points" className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              传统招聘面临的挑战
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              在激烈的人才竞争环境下，传统招聘方式已难以满足企业高效获取优质人才的需求
            </p>
          </FadeIn>

          <Stagger className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {painPoints.map((point, i) => (
              <motion.div key={i} variants={fadeUp}>
                <HoverLift>
                  <Card
                    className="h-full p-6 cursor-pointer transition-all duration-300"
                    style={{
                      background: 'rgba(26, 31, 54, 0.6)',
                      backdropFilter: 'blur(12px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                    }}
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                      style={{
                        background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.2) 0%, rgba(139, 92, 246, 0.2) 100%)',
                      }}
                    >
                      <point.icon className="h-6 w-6" style={{ color: '#8B5CF6' }} />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{point.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">{point.description}</p>
                  </Card>
                </HoverLift>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 relative">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(37, 99, 235, 0.08) 0%, transparent 60%)',
          }}
        />
        
        <div className="relative mx-auto max-w-7xl px-6">
          <FadeIn className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{
              background: 'rgba(139, 92, 246, 0.2)',
              border: '1px solid rgba(139, 92, 246, 0.3)',
            }}>
              <Zap className="h-4 w-4" style={{ color: '#A78BFA' }} />
              <span className="text-sm font-medium" style={{ color: '#A78BFA' }}>全流程AI赋能</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              八大核心功能模块
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              从岗位发布到入职跟进，全链路智能化招聘解决方案
            </p>
          </FadeIn>

          <Stagger className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <motion.div key={i} variants={fadeUp}>
                <HoverLift>
                  <Card
                    className="h-full p-6 cursor-pointer group transition-all duration-300"
                    style={{
                      background: 'rgba(26, 31, 54, 0.6)',
                      backdropFilter: 'blur(12px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                    }}
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                      style={{
                        background: feature.gradient,
                        boxShadow: `0 8px 24px ${feature.gradient.includes('8B5CF6') ? 'rgba(139, 92, 246, 0.3)' : 'rgba(37, 99, 235, 0.3)'}`,
                      }}
                    >
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed">{feature.description}</p>
                  </Card>
                </HoverLift>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Process Section */}
      <section id="solutions" className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              六步完成智能招聘闭环
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              AI驱动的标准化招聘流程，让每一步都精准高效
            </p>
          </FadeIn>

          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600/20 via-purple-600/40 to-blue-600/20 -translate-y-1/2" />
            
            <Stagger className="grid md:grid-cols-2 lg:grid-cols-6 gap-6">
              {processSteps.map((step, i) => (
                <motion.div key={i} variants={fadeUp} className="relative">
                  <HoverLift>
                    <div
                      className="relative p-6 rounded-2xl text-center cursor-pointer"
                      style={{
                        background: 'rgba(26, 31, 54, 0.6)',
                        backdropFilter: 'blur(12px)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                      }}
                    >
                      <div
                        className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold"
                        style={{
                          background: 'linear-gradient(135deg, #2563EB 0%, #8B5CF6 100%)',
                          boxShadow: '0 8px 24px rgba(37, 99, 235, 0.4)',
                        }}
                      >
                        {step.step}
                      </div>
                      <h3 className="font-semibold text-white mb-2">{step.title}</h3>
                      <p className="text-sm text-slate-400">{step.description}</p>
                      
                      {i < processSteps.length - 1 && (
                        <ChevronRight className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 h-5 w-5 text-slate-600" />
                      )}
                    </div>
                  </HoverLift>
                </motion.div>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)',
          }}
        />
        
        <div className="relative mx-auto max-w-7xl px-6">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              为什么选择飞鼠AI
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              技术领先、服务专业、安全可靠，为企业提供卓越的招聘体验
            </p>
          </FadeIn>

          <Stagger className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((adv, i) => (
              <motion.div key={i} variants={fadeUp}>
                <HoverLift>
                  <div
                    className="p-8 rounded-2xl text-center cursor-pointer transition-all duration-300 h-full flex flex-col"
                    style={{
                      background: 'rgba(26, 31, 54, 0.6)',
                      backdropFilter: 'blur(12px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                    }}
                  >
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 flex-shrink-0"
                      style={{
                        background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.2) 0%, rgba(139, 92, 246, 0.2) 100%)',
                      }}
                    >
                      <adv.icon className="h-8 w-8" style={{ color: '#8B5CF6' }} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{adv.title}</h3>
                    <p className="text-sm text-slate-400 mt-auto">{adv.description}</p>
                  </div>
                </HoverLift>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.15) 0%, rgba(139, 92, 246, 0.15) 100%)',
          }}
        />
        
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              开启智能招聘新时代
            </h2>
            <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
              立即申请免费试用，体验AI赋能的高效招聘流程
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="rounded-full px-10 text-white font-medium text-base transition-all duration-300 hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, #2563EB 0%, #8B5CF6 100%)',
                  boxShadow: '0 8px 32px rgba(37, 99, 235, 0.4)',
                }}
                onClick={handleTryNow}
              >
                免费试用
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-10 text-white font-medium text-base border-white/20 hover:bg-white/10"
              >
                预约演示
              </Button>
            </div>
            
            <div className="mt-12 flex flex-wrap items-center justify-center gap-8">
              {[
                '免费试用14天',
                '无需绑定信用卡',
                '专属客户成功经理',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="h-5 w-5" style={{ color: '#22C55E' }} />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
}
