import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Settings, 
  FileText, 
  Users, 
  LogOut, 
  Plus, 
  Search,
  TrendingUp,
  Eye,
  MousePointer2,
  MessageSquare
} from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

const Admin = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const sidebarItems = [
    { id: 'dashboard', label: '대시보드', icon: LayoutDashboard },
    { id: 'content', label: '콘텐츠 관리', icon: FileText },
    { id: 'users', label: '고객 문의', icon: MessageSquare },
    { id: 'team', label: '팀 관리', icon: Users },
    { id: 'settings', label: '설정', icon: Settings },
  ];

  const stats = [
    { label: '오늘 방문자', value: '1,284', change: '+12.5%', icon: Eye, color: 'text-blue-600 bg-blue-50' },
    { label: '전환율', value: '3.8%', change: '+0.4%', icon: MousePointer2, color: 'text-emerald-600 bg-emerald-50' },
    { label: '신규 문의', value: '24', change: '+5', icon: MessageSquare, color: 'text-purple-600 bg-purple-50' },
    { label: '예상 매출', value: '₩12.4M', change: '+18%', icon: TrendingUp, color: 'text-orange-600 bg-orange-50' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-slate-200 flex flex-col">
        <div className="p-6 border-bottom border-slate-100">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white">
              <LayoutDashboard size={20} />
            </div>
            <span className="font-bold text-slate-900">Admin Panel</span>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          {sidebarItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all",
                activeTab === item.id 
                  ? "bg-primary text-white shadow-lg shadow-emerald-500/20" 
                  : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
              )}
            >
              <item.icon size={20} />
              {item.label}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-100">
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-red-500 hover:bg-red-50 transition-all">
            <LogOut size={20} />
            로그아웃
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <header className="bg-white border-b border-slate-200 px-8 py-4 flex items-center justify-between sticky top-0 z-10">
          <h1 className="text-xl font-bold text-slate-900">
            {sidebarItems.find(i => i.id === activeTab)?.label}
          </h1>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="text" 
                placeholder="검색..." 
                className="bg-slate-50 border border-slate-200 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
            </div>
            <div className="w-10 h-10 rounded-full bg-slate-200 border-2 border-white shadow-sm" />
          </div>
        </header>

        <div className="p-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center", stat.color)}>
                    <stat.icon size={24} />
                  </div>
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg">
                    {stat.change}
                  </span>
                </div>
                <div className="text-2xl font-bold text-slate-900 mb-1">{stat.value}</div>
                <div className="text-sm text-slate-500">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Content Area */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-100 flex items-center justify-between">
              <h2 className="font-bold text-slate-900">최근 문의 내역</h2>
              <button className="btn-primary py-2 px-4 text-sm flex items-center gap-2">
                <Plus size={18} />
                새 항목 추가
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wider">
                    <th className="px-6 py-4 font-semibold">고객명</th>
                    <th className="px-6 py-4 font-semibold">문의 유형</th>
                    <th className="px-6 py-4 font-semibold">상태</th>
                    <th className="px-6 py-4 font-semibold">날짜</th>
                    <th className="px-6 py-4 font-semibold">작업</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    { name: '김철수', type: '검색 광고 문의', status: '대기중', date: '2026-03-24' },
                    { name: '이영희', type: 'SNS 마케팅', status: '진행중', date: '2026-03-23' },
                    { name: '박민수', type: '웹사이트 제작', status: '완료', date: '2026-03-22' },
                    { name: '최지우', type: '콘텐츠 제작', status: '대기중', date: '2026-03-21' },
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="font-medium text-slate-900">{row.name}</div>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-600">{row.type}</td>
                      <td className="px-6 py-4">
                        <span className={cn(
                          "text-xs font-bold px-2 py-1 rounded-lg",
                          row.status === '완료' ? "text-emerald-600 bg-emerald-50" :
                          row.status === '진행중' ? "text-blue-600 bg-blue-50" :
                          "text-orange-600 bg-orange-50"
                        )}>
                          {row.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-500">{row.date}</td>
                      <td className="px-6 py-4">
                        <button className="text-slate-400 hover:text-primary transition-colors">상세보기</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Admin;
