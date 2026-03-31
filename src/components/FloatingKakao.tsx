import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

const FloatingKakao = () => {
  const KAKAO_CHAT_URL = 'http://pf.kakao.com/_USxalX/chat';

  return (
    <motion.a
      href={KAKAO_CHAT_URL}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 flex items-center gap-2 md:gap-3 bg-[#FEE500] text-[#191919] px-5 py-3 md:px-6 md:py-4 rounded-full shadow-2xl font-bold text-base md:text-lg border-2 border-white/50 break-keep"
    >
      <MessageCircle size={20} className="md:w-6 md:h-6" fill="currentColor" />
      <span className="whitespace-nowrap">남은자리 확인하기</span>
      
      {/* Pulse Effect */}
      <span className="absolute inset-0 rounded-full bg-[#FEE500] animate-ping opacity-20 -z-10"></span>
    </motion.a>
  );
};

export default FloatingKakao;
