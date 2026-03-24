import React from 'react';
import { motion } from 'motion/react';
import { Search, Share2, PenTool, BarChart3, Globe, Users } from 'lucide-react';

const services = [
  {
    title: '검색 광고 (SA)',
    description: '네이버, 구글 등 주요 포털 사이트 상위 노출을 통해 잠재 고객의 유입을 극대화합니다.',
    icon: Search,
    color: 'bg-blue-50 text-blue-600',
  },
  {
    title: 'SNS 마케팅',
    description: '인스타그램, 페이스북 타겟팅 광고로 브랜드 인지도를 높이고 팬덤을 형성합니다.',
    icon: Share2,
    color: 'bg-pink-50 text-pink-600',
  },
  {
    title: '콘텐츠 제작',
    description: '브랜드의 스토리를 담은 고퀄리티 디자인과 영상으로 고객의 시선을 사로잡습니다.',
    icon: PenTool,
    color: 'bg-purple-50 text-purple-600',
  },
  {
    title: '데이터 분석',
    description: '정밀한 로그 분석을 통해 마케팅 효율을 진단하고 최적의 전략을 제안합니다.',
    icon: BarChart3,
    color: 'bg-emerald-50 text-emerald-600',
  },
  {
    title: '웹/앱 개발',
    description: '사용자 경험(UX)을 최우선으로 고려한 전환 최적화 랜딩페이지와 웹사이트를 구축합니다.',
    icon: Globe,
    color: 'bg-orange-50 text-orange-600',
  },
  {
    title: '인플루언서 협업',
    description: '브랜드 이미지에 적합한 인플루언서 매칭을 통해 진정성 있는 바이럴을 유도합니다.',
    icon: Users,
    color: 'bg-indigo-50 text-indigo-600',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">전문적인 마케팅 서비스</h2>
          <p className="section-subtitle mx-auto">
            원플레이스마케팅은 각 분야의 전문가들이 모여 <br className="hidden md:block" />
            귀사의 비즈니스 성격에 맞는 최적의 믹스 전략을 제공합니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-2xl border border-slate-100 bg-slate-50/30 hover:bg-white hover:shadow-xl hover:shadow-emerald-500/5 transition-all group"
            >
              <div className={`w-14 h-14 ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
