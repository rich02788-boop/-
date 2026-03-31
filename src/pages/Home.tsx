import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown, AlertCircle, CheckCircle2, ArrowRight, Rocket, ShieldCheck, Timer, MessageCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingKakao from '../components/FloatingKakao';

const Home = () => {
  const scrollToForm = () => {
    document.getElementById('inquiry-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const KAKAO_CHAT_URL = 'http://pf.kakao.com/_USxalX/chat';

  return (
    <main className="min-h-screen bg-white font-sans selection:bg-primary/20">
      <Navbar />
      <FloatingKakao />

      {/* 1. Hero Section: Pain Point */}
      <section className="pt-24 pb-20 md:pt-32 md:pb-24 px-5 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative">
          {/* Decorative element */}
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10 animate-pulse"></div>
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl -z-10 animate-pulse delay-700"></div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-6 py-2.5 md:px-8 md:py-3 rounded-full bg-primary text-white font-black text-lg sm:text-xl md:text-2xl mb-10 md:mb-12 shadow-2xl shadow-emerald-500/30 border-2 border-white/20 break-keep"
          >
            “결과 나오기 전까지는, <br /> 돈 받지 않겠습니다.”
          </motion.div>

          <div className="block mb-6 md:mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1.5 md:px-5 md:py-2 rounded-lg bg-red-50 text-red-600 font-bold text-sm sm:text-base md:text-lg border border-red-100"
            >
              왜 우리 가게만 안될까요?
            </motion.div>
          </div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-6xl font-black text-slate-900 leading-[1.2] md:leading-[1.15] mb-8 md:mb-10 break-keep tracking-tight"
          >
            “맛도 괜찮고 리뷰도 쌓았는데 <br className="md:hidden" />
            <span className="text-red-600 relative inline-block">
              왜 손님은 늘지 않을까요?
              <svg className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-2 md:h-3 text-red-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 25 0, 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="8" />
              </svg>
            </span>”
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="space-y-4 md:space-y-6 text-lg md:text-2xl text-slate-600 mb-10 md:mb-14 font-medium break-keep"
          >
            <p>혹시 지금 이런 상황이신가요?</p>
            <div className="flex flex-col items-center gap-2 md:gap-3 text-slate-900 font-bold">
              <p className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span> 손님은 늘지 않고</p>
              <p className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span> 매출은 계속 떨어지고</p>
            </div>
          </motion.div>

          <div className="flex justify-center">
            <motion.a 
              href={KAKAO_CHAT_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#FEE500] text-[#191919] text-xl md:text-2xl px-10 py-5 md:px-12 md:py-6 rounded-full font-black shadow-2xl shadow-yellow-500/20 flex items-center justify-center gap-3 w-full md:w-auto border-b-4 border-yellow-600/20"
            >
              <MessageCircle size={28} className="md:w-8 md:h-8" fill="currentColor" />
              남은자리 확인하기
            </motion.a>
          </div>

          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mt-16 md:mt-20 text-slate-400 flex flex-col items-center gap-2 md:gap-3"
          >
            <span className="text-xs md:text-sm font-bold tracking-widest uppercase opacity-50">Scroll to find solution</span>
            <ChevronDown size={24} className="md:w-7 md:h-7 text-primary animate-bounce" />
          </motion.div>
        </div>
      </section>

      {/* 2. Problem Section */}
      <section className="py-20 md:py-32 px-5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-6 md:mb-8 break-keep">문제는 아주 단순합니다</h2>
            <div className="inline-block bg-slate-900 text-white text-xl sm:text-3xl md:text-7xl font-black px-6 py-4 md:px-12 md:py-8 rounded-2xl md:rounded-[2rem] mb-8 md:mb-10 break-keep shadow-2xl transform -rotate-1">
              👉 “노출 위치”입니다
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 text-lg md:text-xl leading-relaxed text-slate-700">
            <div className="p-6 md:p-10 rounded-3xl md:rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:border-primary/20 transition-colors group break-keep">
              <p className="mb-4 md:mb-6 text-slate-500 font-bold text-sm md:text-base">대한민국 사람들은 가게를 찾을 때</p>
              <p className="text-xl md:text-3xl font-black text-slate-900 leading-tight">
                90% 이상 <br />
                <span className="text-primary group-hover:underline decoration-primary/30 underline-offset-8">네이버에서 검색</span>합니다
              </p>
            </div>

            <div className="p-6 md:p-10 rounded-3xl md:rounded-[2.5rem] bg-emerald-50/50 border border-emerald-100 hover:border-primary/20 transition-colors group break-keep">
              <p className="mb-4 md:mb-6 text-emerald-600 font-bold text-sm md:text-base">그리고 가장 중요한 사실</p>
              <p className="text-xl md:text-3xl font-black text-slate-900 leading-tight">
                사람들은 <br />
                <span className="text-primary group-hover:underline decoration-primary/30 underline-offset-8">첫 화면에서 선택</span>을 끝냅니다
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Contrast Section */}
      <section className="py-20 md:py-32 px-5 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent"></div>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-10 relative z-10">
          <div className="p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] bg-slate-800/40 border border-slate-700/50 backdrop-blur-sm opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            <h3 className="text-lg md:text-2xl font-bold mb-6 md:mb-8 text-slate-400 flex items-center gap-3">
              <AlertCircle size={20} className="md:w-7 md:h-7 text-red-500" />
              대부분 업체가 이렇게 합니다
            </h3>
            <ul className="space-y-4 md:space-y-6 mb-8 md:mb-10 text-sm md:text-lg break-keep">
              <li className="flex items-start gap-3 md:gap-4">
                <div className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-red-500/20 flex items-center justify-center shrink-0 mt-1">
                  <div className="w-1 h-1 md:w-2 md:h-2 bg-red-500 rounded-full"></div>
                </div>
                <span>같은 지역, 같은 업종 여러 개 받음</span>
              </li>
              <li className="flex items-start gap-3 md:gap-4">
                <div className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-red-500/20 flex items-center justify-center shrink-0 mt-1">
                  <div className="w-1 h-1 md:w-2 md:h-2 bg-red-500 rounded-full"></div>
                </div>
                <span>효과도 못 내면서 비용부터 받는 선불 구조</span>
              </li>
            </ul>
            <div className="text-lg md:text-2xl font-black text-red-400 break-keep leading-tight">
              👉 결과? 전부 상위 못 가고 <br />
              광고비만 날립니다
            </div>
          </div>

          <div className="p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] bg-gradient-to-br from-primary/20 to-emerald-900/20 border-2 border-primary relative overflow-hidden shadow-[0_0_50px_rgba(16,185,129,0.15)]">
            <div className="absolute top-0 right-0 p-3 md:p-5 bg-primary text-white text-[10px] md:text-sm font-black uppercase tracking-[0.2em] rounded-bl-2xl md:rounded-bl-3xl shadow-lg">Only One</div>
            <h3 className="text-lg md:text-2xl font-bold mb-6 md:mb-8 text-primary flex items-center gap-3">
              <Rocket size={20} className="md:w-7 md:h-7" />
              원플레이스마케팅 시스템
            </h3>
            <ul className="space-y-4 md:space-y-6 mb-8 md:mb-10 text-sm md:text-lg break-keep">
              <li className="flex items-start gap-3 md:gap-4">
                <CheckCircle2 className="text-primary shrink-0 mt-1 md:w-6 md:h-6" size={18} />
                <span className="font-bold text-white">일정 반경 내 동일 업종 1곳만 진행</span>
              </li>
              <li className="flex items-start gap-3 md:gap-4">
                <CheckCircle2 className="text-primary shrink-0 mt-1 md:w-6 md:h-6" size={18} />
                <span className="font-bold text-slate-300">결과로 먼저 증명하고 결제받는 100% 후불제</span>
              </li>
            </ul>
            <div className="text-xl md:text-3xl font-black text-white break-keep leading-tight">
              👉 우리는 애초에 <br />
              <span className="text-primary underline decoration-primary/30 underline-offset-8">방식 자체가 다릅니다</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Philosophy Section */}
      <section className="py-20 md:py-32 px-5 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-12 md:mb-16 break-keep text-slate-900">이유는 간단합니다</h2>
          
          <div className="space-y-6 md:space-y-8 text-xl sm:text-2xl md:text-5xl font-black text-slate-900 break-keep leading-tight">
            <p className="opacity-20 line-through decoration-slate-400 decoration-1 md:decoration-4">상위노출은 “경쟁 싸움”이 아니라</p>
            <p className="text-primary">👉 “자리 선점 싸움”이기 때문입니다</p>
          </div>

          <div className="mt-16 md:mt-20 p-6 md:p-20 rounded-[2.5rem] md:rounded-[4rem] bg-slate-50 border-2 border-dashed border-slate-200 relative">
            <div className="absolute -top-5 md:-top-6 left-1/2 -translate-x-1/2 bg-white px-6 md:px-8 py-1.5 md:py-2 border-2 border-slate-200 rounded-full text-slate-400 font-bold text-[10px] md:text-sm uppercase tracking-widest">Our Strategy</div>
            <p className="text-base md:text-2xl text-slate-500 mb-6 md:mb-8 font-medium">그래서 우리는</p>
            <p className="text-xl md:text-5xl font-black text-slate-900 break-keep leading-[1.3] md:leading-[1.3]">
              👉 한 고객만 집중해서 <br />
              👉 그 지역 <br />
              <span className="text-primary bg-primary/5 px-3 py-0.5 md:px-4 md:py-1 rounded-lg md:rounded-xl">‘자리를 먹게 만듭니다’</span>
            </p>
          </div>
        </div>
      </section>

      {/* 5. Benefit Section */}
      <section className="py-20 md:py-32 px-5 bg-emerald-50/20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-center text-2xl md:text-4xl font-bold mb-16 md:mb-20 break-keep text-slate-900">이렇게 바뀝니다</h2>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { title: '검색하면 내 가게가 먼저 보임', icon: Rocket, desc: '지역 키워드 검색 시 최상단 노출' },
              { title: '비교 없이 바로 선택됨', icon: CheckCircle2, desc: '압도적 위치가 주는 신뢰감' },
              { title: '광고 없이도 예약 들어옴', icon: Timer, desc: '지속 가능한 매출 구조 형성' },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] shadow-xl shadow-emerald-900/5 border border-emerald-100/50 flex flex-col items-center text-center hover:translate-y-[-5px] transition-all duration-300 break-keep">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6 md:mb-8 rotate-3">
                  <item.icon size={24} className="md:w-8 md:h-8" />
                </div>
                <h4 className="text-lg md:text-xl font-black text-slate-900 mb-3 md:mb-4">{item.title}</h4>
                <p className="text-slate-500 font-medium text-xs md:text-base">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 md:mt-24 text-center">
            <div className="text-2xl md:text-4xl font-black text-slate-900 mb-4 md:mb-6">👉 결국</div>
            <div className="text-3xl md:text-7xl font-black text-primary break-keep leading-tight">
              손님이 <span className="text-slate-900">찾는</span> 가게가 됩니다
            </div>
          </div>
        </div>
      </section>

      {/* 6. Trust Section */}
      <section className="py-20 md:py-32 px-5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 break-keep leading-tight">
              왜 원플레이스는 <br className="md:hidden" /> 아무나 받지 않을까요?
            </h2>
          </div>

          <div className="space-y-6 md:space-y-8">
            <div className="p-8 md:p-16 rounded-[2.5rem] md:rounded-[3.5rem] bg-slate-50 border border-slate-100 shadow-inner break-keep text-center">
              <p className="text-xl sm:text-2xl md:text-4xl font-black text-slate-900 mb-6 md:mb-10 leading-tight">
                우리의 목표는 단순한 계약이 아니라 <br />
                <span className="text-primary">‘확실한 노출’</span>이기 때문입니다.
              </p>
              <p className="text-base md:text-2xl text-slate-600 mb-8 md:mb-12 font-medium leading-relaxed">
                안 되는 곳은 처음부터 거절합니다. <br />
                결과가 나오기 전엔 돈을 받지 않는 이유이기도 합니다.
              </p>
              <div className="h-px w-20 md:w-32 bg-slate-200 mx-auto mb-8 md:mb-12"></div>
              <p className="text-xl md:text-3xl font-black text-slate-400 uppercase tracking-widest">Our Principles</p>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 md:gap-6">
              {[
                { text: '이미 자리가 찬 지역 → 진행 안함', icon: ShieldCheck },
                { text: '효과가 불투명한 곳 → 사전 안내', icon: ShieldCheck },
                { text: '실력 없는 무작정 계약 → 안 받음', icon: ShieldCheck },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-3 md:gap-4 p-6 md:p-8 bg-white border border-slate-200 rounded-2xl md:rounded-[2.5rem] text-center hover:border-primary/30 transition-colors break-keep">
                  <item.icon className="text-primary md:w-8 md:h-8" size={28} />
                  <span className="font-black text-slate-800 text-base md:text-lg">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="text-center mt-12 md:mt-16">
              <div className="text-2xl md:text-4xl font-black text-slate-900 break-keep leading-tight">
                👉 애초에 <span className="text-primary bg-primary/5 px-3 py-0.5 md:px-4 md:py-1 rounded-lg md:rounded-xl">‘되는 곳’</span>만 합니다
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6.5. Guarantee Section */}
      <section className="py-20 md:py-32 px-5 bg-slate-50 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-6 md:p-20 rounded-[2.5rem] md:rounded-[4rem] bg-white border-[4px] md:border-[6px] border-primary shadow-[0_20px_60px_rgba(16,185,129,0.1)] md:shadow-[0_40px_100px_rgba(16,185,129,0.15)] relative"
          >
            <div className="absolute -top-5 md:-top-8 left-1/2 -translate-x-1/2 bg-primary text-white px-6 md:px-10 py-2 md:py-3 rounded-full font-black text-xs md:text-xl shadow-2xl border-2 md:border-4 border-white break-keep">
              NO RISK GUARANTEE
            </div>
            
            <h2 className="text-xl sm:text-3xl md:text-6xl font-black text-slate-900 mb-10 md:mb-14 break-keep leading-[1.3] md:leading-[1.2]">
              “결과 나오기 전까지는, <br />
              <span className="text-primary underline decoration-primary/20 underline-offset-[6px] md:underline-offset-[12px]">돈 받지 않습니다</span>”
            </h2>

            <div className="space-y-8 md:space-y-12 text-sm md:text-2xl text-slate-600 break-keep font-medium">
              <div className="space-y-2 md:space-y-4">
                <p>효과도 못 내면서</p>
                <p>비용부터 받는 구조</p>
                <p className="text-lg sm:text-2xl md:text-4xl font-black text-red-600 mt-6 md:mt-8">👉 이제는 저희가 먼저 바꾸겠습니다.</p>
              </div>

              <div className="pt-8 md:pt-12 border-t border-slate-100">
                <p className="mb-4 md:mb-6 text-slate-400 font-bold text-sm md:text-base">그래서 원플레이스마케팅은</p>
                <p className="text-xl md:text-5xl font-black text-slate-900 leading-[1.3] md:leading-[1.3]">
                  👉 <span className="text-primary">결과로 먼저 증명</span>하고 <br />
                  그 이후에 결제를 받는 <br />
                  구조로만 진행합니다
                </p>
              </div>

              <div className="pt-8 md:pt-12 text-slate-500">
                <p className="mb-3 md:mb-4 font-bold text-sm md:text-base">단, 아무나 진행하지 않습니다</p>
                <p className="text-lg md:text-2xl font-black text-slate-800 bg-slate-100 inline-block px-4 py-1.5 md:px-6 md:py-2 rounded-xl md:rounded-2xl">
                  👉 이미 자리가 없는 지역 / 업종은 <br className="md:hidden" />
                  처음부터 진행하지 않습니다
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 7. Urgency Section */}
      <section className="py-20 md:py-32 px-5 bg-red-600 text-white relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-black/20 rounded-full blur-3xl"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-block px-5 py-1.5 bg-white text-red-600 font-black text-sm md:text-lg rounded-full mb-8 md:mb-10 animate-pulse shadow-xl">
            URGENT: 마감 임박
          </div>
          <h2 className="text-3xl md:text-7xl font-black mb-10 md:mb-12 break-keep leading-[1.2] md:leading-tight">
            현재 추가 모집 <br className="md:hidden" /> 
            <span className="underline decoration-white/30 underline-offset-[8px] md:underline-offset-[16px]">30곳만</span> 진행 중
          </h2>
          
          <div className="space-y-6 md:space-y-8 text-lg md:text-3xl font-bold mb-12 md:mb-16 break-keep leading-snug">
            <p className="flex items-center justify-center gap-2 md:gap-3">
              <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-yellow-400 rounded-full"></span>
              한 번 자리 채우면 같은 업종 절대 추가 계약 안 받습니다
            </p>
            <p className="opacity-70 font-medium text-base md:text-2xl">지금 고민하는 동안 경쟁업체가 먼저 들어오면</p>
            <p className="text-yellow-300 text-2xl md:text-5xl font-black">👉 당신은 그 지역에서 밀립니다</p>
          </div>

          <div className="flex justify-center">
            <a 
              href={KAKAO_CHAT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-red-600 text-xl md:text-2xl font-black px-10 py-6 md:px-12 md:py-6 rounded-full shadow-[0_15px_45px_rgba(0,0,0,0.2)] md:shadow-[0_20px_60px_rgba(0,0,0,0.3)] transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-3 md:gap-4 w-full md:w-auto"
            >
              <MessageCircle size={28} className="md:w-8 md:h-8" fill="currentColor" />
              남은자리 확인하기
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Home;
