import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle2, MessageCircle } from 'lucide-react';
import { cn } from '../lib/utils';

const ConsultationForm = ({ className }: { className?: string }) => {
  const [submitted, setSubmitted] = useState(false);
  const KAKAO_CHAT_URL = 'http://pf.kakao.com/_USxalX/chat';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className={cn("bg-white p-8 rounded-3xl shadow-xl text-center border-2 border-primary", className)}
      >
        <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 size={32} />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-2">신청이 완료되었습니다!</h3>
        <p className="text-slate-600 mb-6">담당자가 확인 후 즉시 연락드리겠습니다.</p>
        
        <a 
          href={KAKAO_CHAT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#FEE500] text-[#191919] px-6 py-3 rounded-xl font-bold hover:shadow-lg transition-all"
        >
          <MessageCircle size={20} fill="currentColor" />
          카톡으로 더 빠르게 문의하기
        </a>
      </motion.div>
    );
  }

  return (
    <div className={cn("bg-white p-8 rounded-3xl shadow-2xl border border-slate-100", className)}>
      <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
        내 지역 <span className="text-primary">자리 남아있는지</span> 확인하기
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-1">네이버 플레이스 주소</label>
          <input 
            required
            type="url" 
            placeholder="https://naver.me/..." 
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-1">원하는 상위노출 키워드</label>
          <input 
            required
            type="text" 
            placeholder="예: 강남역 맛집, 역삼동 미용실" 
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-1">연락처</label>
          <input 
            required
            type="tel" 
            placeholder="010-0000-0000" 
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
          />
        </div>
        <button 
          type="submit"
          className="w-full btn-primary py-4 text-lg flex items-center justify-center gap-2 mt-4"
        >
          무료 상담 및 가능 여부 확인 <Send size={20} />
        </button>
        
        <div className="relative py-4">
          <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-100"></div></div>
          <div className="relative flex justify-center text-xs uppercase"><span className="bg-white px-2 text-slate-400 font-bold">OR</span></div>
        </div>

        <a 
          href={KAKAO_CHAT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-[#FEE500] text-[#191919] py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:shadow-lg transition-all"
        >
          <MessageCircle size={20} fill="currentColor" />
          카카오톡 1:1 상담하기
        </a>

        <p className="text-center text-xs text-slate-400 mt-4">
          * 상담은 100% 무료이며, 가능 여부를 즉시 안내해드립니다.
        </p>
      </form>
    </div>
  );
};

export default ConsultationForm;
