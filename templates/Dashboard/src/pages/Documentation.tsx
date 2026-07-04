import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell,
  LineChart, Line, AreaChart, Area, PieChart, Pie
} from "recharts";
import { incomeData, proposalProgressData, lineChartData, areaChartData, pieChartData } from "@/data/mockData";

export function Documentation() {
  return (
    <main className="flex-grow max-w-5xl mx-auto w-full">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-slate-800 mb-3">Component Documentation</h1>
        <p className="text-slate-500 font-light max-w-2xl mx-auto">
          A showcase of all Shadcn UI primitives available in this project. You can pick and choose 
          the components you need for your dashboard pages from this library.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        
        {/* Buttons */}
        <Card className="border-slate-200 shadow-sm">
          <CardHeader>
            <CardTitle>Buttons</CardTitle>
            <CardDescription>Standard button variants for actions.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-4">
            <Button variant="default">Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </CardContent>
        </Card>

        {/* Badges */}
        <Card className="border-slate-200 shadow-sm">
          <CardHeader>
            <CardTitle>Badges</CardTitle>
            <CardDescription>Small indicators for status or tags.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-4">
            <Badge variant="default">Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge className="bg-[#1e293b] text-white border-none">Custom Paid</Badge>
          </CardContent>
        </Card>

        {/* Inputs */}
        <Card className="border-slate-200 shadow-sm">
          <CardHeader>
            <CardTitle>Inputs</CardTitle>
            <CardDescription>Standard form input elements.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <Input placeholder="Default text input" />
            <Input type="email" placeholder="Email input" />
            <Input type="password" placeholder="Password input" disabled />
          </CardContent>
        </Card>

        {/* Avatars */}
        <Card className="border-slate-200 shadow-sm">
          <CardHeader>
            <CardTitle>Avatars</CardTitle>
            <CardDescription>User profile image representations.</CardDescription>
          </CardHeader>
          <CardContent className="flex items-center gap-6">
            <Avatar className="w-16 h-16 shadow-sm">
              <AvatarImage src="https://i.pravatar.cc/150?img=11" alt="User 1" />
              <AvatarFallback>U1</AvatarFallback>
            </Avatar>
            <Avatar className="w-12 h-12 shadow-sm">
              <AvatarImage src="https://i.pravatar.cc/150?img=5" alt="User 2" />
              <AvatarFallback>U2</AvatarFallback>
            </Avatar>
            <Avatar className="w-8 h-8 shadow-sm">
              <AvatarFallback className="bg-primary text-primary-foreground">AK</AvatarFallback>
            </Avatar>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <h2 className="text-2xl font-bold text-slate-800 mb-6 mt-12">Charts Integration</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Income Tracker Chart */}
        <Card className="border-slate-200 shadow-sm">
          <CardHeader>
            <CardTitle>Standard Bar Chart</CardTitle>
            <CardDescription>Visualizing simple time-series data.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[200px] w-full">
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
          </CardContent>
        </Card>

        {/* Stacked Chart */}
        <Card className="border-slate-200 shadow-sm">
          <CardHeader>
            <CardTitle>Stacked Bar Chart</CardTitle>
            <CardDescription>Visualizing complex categorical progression.</CardDescription>
          </CardHeader>
          <CardContent>
             <div className="h-[200px] w-full mt-1">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={proposalProgressData} barGap={1} barCategoryGap={1}>
                  <Tooltip contentStyle={{ fontSize: '10px' }} />
                  <Bar dataKey="sent" stackId="a" fill="#CBD5E1" radius={[2, 2, 0, 0]} />
                  <Bar dataKey="interviews" stackId="a" fill="#E55B4C" radius={[0, 0, 0, 0]} />
                  <Bar dataKey="hires" stackId="a" fill="#1E293B" radius={[0, 0, 2, 2]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Line Chart */}
        <Card className="border-slate-200 shadow-sm">
          <CardHeader>
            <CardTitle>Line Chart</CardTitle>
            <CardDescription>Tracking multiple continuous metrics over time.</CardDescription>
          </CardHeader>
          <CardContent>
             <div className="h-[200px] w-full mt-1">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={lineChartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#64748b' }} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#64748b' }} />
                  <Tooltip contentStyle={{ fontSize: '10px', borderRadius: '8px' }} />
                  <Line type="monotone" dataKey="users" stroke="#1e293b" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                  <Line type="monotone" dataKey="revenue" stroke="#E55B4C" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Area Chart */}
        <Card className="border-slate-200 shadow-sm">
          <CardHeader>
            <CardTitle>Area Chart</CardTitle>
            <CardDescription>Visualizing volume distributions over time.</CardDescription>
          </CardHeader>
          <CardContent>
             <div className="h-[200px] w-full mt-1">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={areaChartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#64748b' }} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#64748b' }} />
                  <Tooltip contentStyle={{ fontSize: '10px', borderRadius: '8px' }} />
                  <Area type="monotone" dataKey="current" stackId="1" stroke="#8BA6C9" fill="#8BA6C9" fillOpacity={0.8} />
                  <Area type="monotone" dataKey="previous" stackId="1" stroke="#CBD5E1" fill="#CBD5E1" fillOpacity={0.5} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Pie Chart */}
        <Card className="border-slate-200 shadow-sm">
          <CardHeader>
            <CardTitle>Donut Chart</CardTitle>
            <CardDescription>Proportional distribution of variables.</CardDescription>
          </CardHeader>
          <CardContent>
             <div className="h-[200px] w-full mt-1">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Tooltip contentStyle={{ fontSize: '10px', borderRadius: '8px' }} />
                  <Pie 
                    data={pieChartData} 
                    cx="50%" 
                    cy="50%" 
                    innerRadius={60} 
                    outerRadius={80} 
                    paddingAngle={5} 
                    dataKey="value"
                  >
                    {pieChartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

      </div>
    </main>
  );
}
