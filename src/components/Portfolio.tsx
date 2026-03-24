import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'F&B 프랜차이즈 브랜딩',
    category: 'SNS 마케팅',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800',
    result: '매출 240% 상승',
  },
  {
    title: 'IT 스타트업 퍼포먼스',
    category: '검색 광고',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800',
    result: 'CPA 40% 절감',
  },
  {
    title: '뷰티 브랜드 런칭',
    category: '인플루언서',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=800',
    result: '신규 가입 1만명 돌파',
  },
  {
    title: '패션 쇼핑몰 리뉴얼',
    category: '웹 개발',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800',
    result: '이탈률 15% 감소',
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="section-title">성공 포트폴리오</h2>
            <p className="text-lg text-slate-500 max-w-xl">
              원플레이스마케팅과 함께한 수많은 파트너사들의 <br className="hidden md:block" />
              놀라운 성장 스토리를 확인해보세요.
            </p>
          </div>
          <button className="text-primary font-bold flex items-center gap-2 hover:underline">
            전체 포트폴리오 보기 <ExternalLink size={18} />
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-3xl bg-white shadow-lg"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-primary uppercase tracking-wider">{project.category}</span>
                  <span className="text-sm font-semibold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                    {project.result}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
