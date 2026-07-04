import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronDown, ChevronUp, Wallet, MapPin, Calendar, Plus } from "lucide-react";
import { 
  BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, Cell 
} from "recharts";
import { users, recentProjects, incomeData, proposalProgressData } from "@/data/mockData";

export function Home() {
  return (
    <main className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch flex-grow">
      {/* LEFT AREA (7 Columns on Large Screens) */}
      <div className="lg:col-span-7 flex flex-col justify-between gap-8">
        
        {/* Income Tracker Card */}
        <Card className="rounded-[2rem] p-8 shadow-sm relative flex flex-col justify-between h-[420px] border-none">
          <div className="flex justify-between items-start">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-xl bg-[#F8FAFC] flex items-center justify-center text-slate-500 border border-slate-100 shadow-sm">
                  <Wallet className="w-4 h-4" />
                </div>
                <h2 className="text-[24px] font-semibold text-slate-800 tracking-tight">
                  Income Tracker
                </h2>
              </div>
              <p className="text-slate-400 text-[12px] max-w-[340px] mt-2 leading-relaxed font-light">
                Track changes in income over time and access detailed data on each project and payments received
              </p>
            </div>
            
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full text-xs font-semibold text-slate-600 hover:bg-slate-50 transition-colors shadow-sm">
              Week
              <ChevronDown className="w-3 h-3 text-slate-400" />
            </button>
          </div>

          <div className="grid grid-cols-12 gap-4 items-end relative h-[250px] mt-4">
            {/* Left Stats Overlay */}
            <div className="col-span-3 pb-2 z-10 self-end">
              <h3 className="text-[34px] font-semibold text-slate-800 mb-0.5 leading-none">
                +20%
              </h3>
              <p className="text-[11px] text-slate-400 leading-normal font-light max-w-[120px]">
                This week's income is higher than last week's
              </p>
            </div>

            {/* Recharts Bar Chart integration */}
            <div className="col-span-9 h-full w-full relative z-0">
               <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={incomeData} margin={{ top: 20, right: 0, left: 0, bottom: 0 }}>
                    <Tooltip 
                      cursor={{fill: 'transparent'}}
                      contentStyle={{ backgroundColor: '#1e293b', borderRadius: '9999px', color: '#fff', fontSize: '10px', padding: '4px 10px', border: 'none', fontWeight: 'bold' }}
                      itemStyle={{ color: '#fff' }}
                      formatter={(value: number) => [`$${value}`, '']}
                    />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fontWeight: 600, fill: '#64748b' }} dy={10} />
                    <Bar dataKey="value" radius={[20, 20, 20, 20]} barSize={12}>
                      {incomeData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.value > 2000 ? '#1e293b' : '#8BA6C9'} />
                      ))}
                    </Bar>
                  </BarChart>
               </ResponsiveContainer>
            </div>
          </div>
        </Card>

        {/* Bottom Left Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Let's Connect Card */}
          <div className="flex flex-col justify-between gap-3">
            <div className="flex justify-between items-center px-1">
              <h3 className="text-[16px] font-semibold text-slate-800">Let's Connect</h3>
              <a href="#" className="text-[11px] text-slate-500 hover:text-slate-800 border-b border-slate-300 pb-0.5 transition-colors">See all</a>
            </div>
            
            {users.map((user) => (
              <div key={user.id} className="bg-white/40 backdrop-blur-md rounded-full p-2 pr-4 flex items-center justify-between border border-white/60 shadow-sm hover:shadow-md transition-all">
                <div className="flex items-center gap-3">
                  <Avatar className="w-10 h-10 border border-white bg-slate-100">
                    <AvatarImage src={user.avatarUrl} alt={user.name} />
                    <AvatarFallback>{user.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-xs font-semibold text-slate-800 leading-tight">{user.name}</h4>
                      <Badge className={`text-[9px] hover:bg-opacity-80 px-2 py-0 border-none ${user.statusBg} ${user.statusColor}`}>
                        {user.role}
                      </Badge>
                    </div>
                    <p className="text-[10px] text-slate-400 mt-0.5">{user.title}</p>
                  </div>
                </div>
                <button className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-slate-400 hover:text-slate-800 shadow-sm hover:scale-105 active:scale-95 transition-all">
                  <Plus className="w-3 h-3" />
                </button>
              </div>
            ))}
          </div>

          {/* Upgrade Premium Feature Card */}
          <div className="premium-bg rounded-[2rem] p-6 flex flex-col justify-between text-slate-800 shadow-sm min-h-[170px]">
            <div className="relative z-10">
              <h3 className="text-[16px] font-semibold mb-1.5 text-slate-800">Unlock Premium Features</h3>
              <p className="text-[11px] text-slate-600 leading-relaxed max-w-[210px] font-light">
                Get access to exclusive benefits and expand your freelancing opportunities
              </p>
            </div>
            <button className="relative z-10 mt-4 w-full bg-white rounded-full py-2.5 px-5 flex justify-between items-center text-xs font-semibold shadow-sm hover:shadow-md hover:scale-[1.01] transition-all">
              Upgrade now
              <ChevronDown className="w-3 h-3 text-slate-400 -rotate-90" />
            </button>
          </div>
        </div>
      </div>

      {/* RIGHT AREA (5 Columns on Large Screens) */}
      <div className="lg:col-span-5 flex flex-col justify-between gap-8">
        
        {/* Recent Projects Header & Container */}
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-end mb-1 px-1">
            <h3 className="text-[18px] font-semibold text-slate-800">Your Recent Projects</h3>
            <a href="#" className="text-[11px] text-slate-500 hover:text-slate-800 border-b border-slate-300 pb-0.5 transition-colors">See all Project</a>
          </div>

          <div className="flex flex-col gap-3">
            {recentProjects.map((project) => (
              project.expanded ? (
                <div key={project.id} className="bg-[#DFE5ED] rounded-[2rem] p-5 border border-white/40 shadow-sm">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl ${project.iconBg} flex items-center justify-center text-white shadow-sm`}>
                        <Wallet className="w-4 h-4" /> {/* Standardizing icons for generic data */}
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-0.5">
                          <h4 className="text-xs font-semibold text-slate-800 leading-snug">{project.title}</h4>
                          <Badge className="text-[9px] bg-[#1e293b] text-white px-2 py-0 border-none hover:bg-[#1e293b]/90">{project.status}</Badge>
                        </div>
                        <p className="text-[10px] text-slate-500">{project.rate}</p>
                      </div>
                    </div>
                    <button className="w-7 h-7 rounded-full bg-white/60 flex items-center justify-center text-slate-400 hover:text-slate-700 transition-colors border border-white/50">
                      <ChevronUp className="w-3 h-3" />
                    </button>
                  </div>
                  
                  {project.tags && (
                    <div className="flex gap-2 mb-3">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-[10px] font-medium bg-slate-200/60 text-slate-600 px-3 py-1 rounded-full border border-white/30">{tag}</span>
                      ))}
                    </div>
                  )}
                  
                  <p className="text-[11px] text-slate-500 leading-relaxed mb-3 font-light">{project.description}</p>
                  
                  <div className="flex items-center gap-3 text-[10px] text-slate-400">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3 h-3" /> {project.location}
                    </div>
                    <div className="w-[1px] h-3 bg-slate-300"></div>
                    <div>{project.timeAgo}</div>
                  </div>
                </div>
              ) : (
                <div key={project.id} className="bg-[#DFE5ED]/50 rounded-full p-2.5 pl-4 pr-3 flex items-center justify-between border border-white/30 hover:bg-[#DFE5ED] transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-xl ${project.iconBg} flex items-center justify-center text-white shadow-sm`}>
                      <Wallet className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-0.5">
                        <h4 className="text-xs font-semibold text-slate-800">{project.title}</h4>
                        <Badge variant="outline" className={`text-[9px] px-2 py-0 ${project.status === 'Paid' ? 'bg-[#1e293b] text-white border-none' : 'text-slate-400 border-slate-300'}`}>
                          {project.status}
                        </Badge>
                      </div>
                      <p className="text-[10px] text-slate-400">{project.rate}</p>
                    </div>
                  </div>
                  <button className="w-7 h-7 rounded-full bg-white/60 flex items-center justify-center text-slate-400 hover:text-slate-700 transition-colors border border-white/50">
                    <ChevronDown className="w-3 h-3" />
                  </button>
                </div>
              )
            ))}
          </div>
        </div>

        {/* Proposal Progress Card using Recharts stacked bars */}
        <Card className="rounded-[2rem] p-6 shadow-sm flex flex-col justify-between h-[180px] border-none">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-[16px] font-semibold text-slate-800">Proposal Progress</h3>
            <button className="flex items-center gap-1.5 text-[10px] font-bold text-slate-500 hover:text-slate-800 transition-colors border border-slate-200 rounded-lg px-2.5 py-1.5 shadow-sm">
              <Calendar className="w-3 h-3 text-slate-400" />
              April 11, 2024
              <ChevronDown className="w-3 h-3 text-slate-400 ml-1" />
            </button>
          </div>

          <div className="flex-grow flex flex-col justify-between">
            <div className="flex items-end relative z-10 w-full mb-2">
              <div className="flex flex-col gap-0.5 w-1/3 border-r border-slate-100 pr-2">
                <span className="text-[10px] text-slate-400 font-bold border-l-2 border-slate-200 pl-1.5">Proposals sent</span>
                <span className="text-2xl font-semibold text-slate-800 pl-1.5 tracking-tight">64</span>
              </div>
              <div className="flex flex-col gap-0.5 w-1/3 px-3 border-r border-slate-100">
                <span className="text-[10px] text-slate-400 font-bold border-l-2 border-[#E55B4C] pl-1.5">Interviews</span>
                <span className="text-2xl font-semibold text-slate-800 pl-1.5 tracking-tight">12</span>
              </div>
              <div className="flex flex-col gap-0.5 w-1/3 pl-3">
                <span className="text-[10px] text-slate-400 font-bold border-l-2 border-[#1E293B] pl-1.5">Hires</span>
                <span className="text-2xl font-semibold text-slate-800 pl-1.5 tracking-tight">10</span>
              </div>
            </div>

            <div className="h-10 w-full mt-1">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={proposalProgressData} barGap={1} barCategoryGap={1}>
                  <Tooltip contentStyle={{ fontSize: '10px' }} />
                  <Bar dataKey="sent" stackId="a" fill="#CBD5E1" radius={[2, 2, 0, 0]} />
                  <Bar dataKey="interviews" stackId="a" fill="#E55B4C" radius={[0, 0, 0, 0]} />
                  <Bar dataKey="hires" stackId="a" fill="#1E293B" radius={[0, 0, 2, 2]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </Card>

      </div>
    </main>
  );
}
