import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-50/50">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-50/50 -skew-x-12 translate-x-1/4 -z-10" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold mb-6">
            <Sparkles size={16} />
            <span>대한민국 No.1 통합 마케팅 솔루션</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-6">
            당신의 비즈니스를 <br />
            <span className="text-primary">성공의 궤도</span>에 <br />
            올려드립니다.
          </h1>
          
          <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl">
            원플레이스마케팅은 단순한 광고를 넘어, 고객사의 가치를 발견하고 
            최적의 채널을 통해 확실한 매출 성장을 실현하는 파트너입니다.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button className="btn-primary flex items-center gap-2 group">
              무료 컨설팅 신청하기
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-6 py-3 rounded-full border border-slate-200 font-semibold text-slate-600 hover:bg-white transition-all">
              포트폴리오 보기
            </button>
          </div>

          <div className="mt-12 flex items-center gap-6">
            {[
              { label: '누적 고객사', value: '500+' },
              { label: '광고 수익률', value: '320%' },
              { label: '만족도', value: '98%' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                <div className="text-sm text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="relative"
        >
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000" 
              alt="Marketing Dashboard"
              className="w-full h-auto"
              referrerPolicy="no-referrer"
            />
          </div>
          
          {/* Floating Elements */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-6 -right-6 glass-morphism p-4 rounded-xl shadow-xl z-20"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-primary">
                <CheckCircle2 size={24} />
              </div>
              <div>
                <div className="text-xs text-slate-500">전환율 상승</div>
                <div className="text-sm font-bold text-slate-900">+45.2%</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
