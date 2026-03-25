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
      <section className="pt-32 pb-20 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full bg-red-50 text-red-600 font-bold text-sm mb-6"
          >
            왜 우리 가게만 안될까요?
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-8 break-keep"
          >
            “맛도 괜찮고 리뷰도 쌓았는데 <br className="hidden md:block" />
            <span className="text-red-600">왜 손님은 늘지 않을까요?</span>”
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="space-y-4 text-lg text-slate-600 mb-12"
          >
            <p>혹시 지금 이런 상황이신가요?</p>
            <div className="flex flex-col items-center gap-2 font-bold text-slate-800">
              <p>손님은 늘지 않고</p>
              <p>매출은 계속 떨어지고</p>
            </div>
          </motion.div>

          <div className="flex justify-center">
            <motion.a 
              href={KAKAO_CHAT_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#FEE500] text-[#191919] text-xl px-10 py-5 rounded-full font-bold shadow-xl flex items-center justify-center gap-2 w-full md:w-auto"
            >
              <MessageCircle size={24} fill="currentColor" />
              남은자리 확인하기
            </motion.a>
          </div>

          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mt-16 text-slate-400 flex flex-col items-center gap-2"
          >
            <span className="text-sm">스크롤해서 문제 해결하기</span>
            <ChevronDown size={24} />
          </motion.div>
        </div>
      </section>

      {/* 2. Problem Section */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-6 break-keep">문제는 단순합니다</h2>
            <div className="inline-block bg-slate-900 text-white text-xl md:text-6xl font-black px-4 py-3 md:px-6 md:py-4 rounded-2xl mb-8 break-keep">
              👉 “노출 위치”입니다
            </div>
          </div>

          <div className="space-y-12 text-xl leading-relaxed text-slate-700">
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100">
              <p className="mb-4">대한민국 사람들은 가게를 찾을 때 거의 대부분</p>
              <p className="text-2xl font-bold text-slate-900">👉 네이버에서 검색합니다</p>
            </div>

            <div className="p-8 rounded-3xl bg-primary/5 border border-primary/10">
              <p className="mb-4">그리고 중요한 사실 하나</p>
              <p className="text-2xl font-bold text-slate-900">👉 사람들은 검색하면 <br className="md:hidden" /> <span className="text-primary">첫 화면에서 선택을 끝냅니다</span></p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Contrast Section */}
      <section className="py-16 md:py-24 px-6 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="p-8 rounded-3xl bg-slate-800/50 border border-slate-700 opacity-60">
            <h3 className="text-xl font-bold mb-6 text-slate-400">대부분 업체가 이렇게 합니다</h3>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-2">
                <AlertCircle className="text-red-500 shrink-0 mt-1" size={20} />
                <span>같은 지역, 같은 업종 여러 개 받음</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle className="text-red-500 shrink-0 mt-1" size={20} />
                <span>서로 경쟁 붙여서 돈만 받음</span>
              </li>
            </ul>
            <div className="text-lg md:text-xl font-bold text-red-400 break-keep">
              👉 결과? 전부 상위 못 가고 돈만 날립니다
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-primary/10 border-2 border-primary relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 bg-primary text-white text-xs font-bold uppercase tracking-widest">Only One</div>
            <h3 className="text-xl font-bold mb-6 text-primary">원플레이스마케팅 시스템</h3>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="text-primary shrink-0 mt-1" size={20} />
                <span className="font-bold">일정 반경 내 동일 업종 1곳만 진행</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="text-primary shrink-0 mt-1" size={20} />
                <span className="font-bold text-slate-300">이미 계약된 업종 있으면 추가 진행 절대 안 함</span>
              </li>
            </ul>
            <div className="text-lg md:text-xl font-bold text-white break-keep">
              👉 우리는 애초에 방식이 다릅니다
            </div>
          </div>
        </div>
      </section>

      {/* 4. Philosophy Section */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 break-keep">이유는 간단합니다</h2>
          
          <div className="space-y-6 text-xl md:text-3xl font-bold text-slate-900 break-keep">
            <p className="opacity-40 line-through">상위노출은 “경쟁 싸움”이 아니라</p>
            <p className="text-primary">👉 “자리 선점 싸움”이기 때문입니다</p>
          </div>

          <div className="mt-16 p-10 rounded-[3rem] bg-slate-50 border-2 border-dashed border-slate-200">
            <p className="text-xl text-slate-600 mb-4">그래서 우리는</p>
            <p className="text-xl md:text-3xl font-black text-slate-900 break-keep">
              👉 한 고객만 집중해서 <br />
              👉 그 지역 <span className="text-primary underline underline-offset-8">‘자리를 먹게 만듭니다’</span>
            </p>
          </div>
          
        </div>
      </section>

      {/* 5. Benefit Section */}
      <section className="py-16 md:py-24 px-6 bg-emerald-50/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center text-2xl md:text-3xl font-bold mb-16 break-keep">이렇게 바뀝니다</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: '검색하면 내 가게가 먼저 보임', icon: Rocket },
              { title: '비교 없이 바로 선택됨', icon: CheckCircle2 },
              { title: '광고 없이도 예약 들어옴', icon: Timer },
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-emerald-100 flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
                  <item.icon size={24} />
                </div>
                <p className="font-bold text-slate-800">{item.title}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="text-3xl md:text-4xl font-black text-slate-900 mb-4">👉 결국</div>
            <div className="text-4xl md:text-5xl font-black text-primary break-keep">손님이 찾는 가게가 됩니다</div>
          </div>
        </div>
      </section>

      {/* 6. Trust Section */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">“그래도 또 사기 아니야?”</h2>
          </div>

          <div className="space-y-6">
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100">
              <p className="text-xl font-bold text-slate-900 mb-4">👉 맞습니다, 그렇게 느끼실 수 있습니다.</p>
              <p className="text-slate-600 mb-6">왜냐하면 실제로 그런 업체들이 많기 때문입니다.</p>
              <p className="text-xl font-bold text-slate-900">그래서 저희는</p>
            </div>

            <div className="grid gap-4">
              {[
                '자리 없는 곳 → 진행 안함',
                '효과 어려운 곳 → 사전 안내',
                '무작정 계약 → 안 받음',
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-white border border-slate-200 rounded-2xl">
                  <ShieldCheck className="text-primary" size={24} />
                  <span className="font-bold text-slate-800">{text}</span>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <div className="text-3xl font-black text-slate-900">👉 애초에 <span className="text-primary">‘되는 곳’</span>만 합니다</div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Urgency Section */}
      <section className="py-16 md:py-24 px-6 bg-red-600 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block px-4 py-1 bg-white text-red-600 font-bold text-sm rounded-full mb-6 animate-pulse">
            URGENT: 마감 임박
          </div>
          <h2 className="text-2xl md:text-5xl font-black mb-8 break-keep">현재 추가 모집 <br className="md:hidden" /> <span className="underline decoration-white underline-offset-8">30곳만</span> 진행 중</h2>
          
          <div className="space-y-6 text-lg md:text-2xl font-bold mb-12 break-keep">
            <p>👉 한 번 자리 채우면 같은 업종 절대 추가 계약 안 받습니다</p>
            <p className="opacity-80">지금 고민하는 동안 경쟁업체가 먼저 들어오면</p>
            <p className="text-yellow-300">👉 당신은 그 지역에서 밀립니다</p>
          </div>

          <div className="flex justify-center">
            <a 
              href={KAKAO_CHAT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FEE500] text-[#191919] text-xl md:text-2xl font-black px-8 py-5 md:px-12 md:py-6 rounded-full shadow-2xl transition-all active:scale-95 flex items-center justify-center gap-2 w-full md:w-auto"
            >
              <MessageCircle size={28} fill="currentColor" />
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
