import React from 'react';
import { Rocket, Phone, MapPin, Instagram, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-slate-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="flex flex-col items-center mb-12">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white">
              <Rocket size={20} />
            </div>
            <span className="text-xl font-bold tracking-tight">
              원플레이스<span className="text-primary">마케팅</span>
            </span>
          </div>
          <p className="text-slate-400 leading-relaxed max-w-md">
            데이터 기반의 전략적 마케팅으로 <br />
            고객사의 비즈니스 가치를 극대화합니다.
          </p>
        </div>

        <div className="pt-10 border-t border-slate-800 text-slate-500 text-sm">
          <p>© 2026 원플레이스마케팅. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
