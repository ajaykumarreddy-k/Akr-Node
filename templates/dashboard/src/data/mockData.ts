export const users = [
  {
    id: "1",
    name: "Randy Gouse",
    role: "Senior",
    title: "Cybersecurity specialist",
    avatarUrl: "https://i.pravatar.cc/150?img=11",
    statusColor: "text-[#E55B4C]",
    statusBg: "bg-[#FFEFEA]",
  },
  {
    id: "2",
    name: "Giana Schleifer",
    role: "Middle",
    title: "UX/UI Designer",
    avatarUrl: "https://i.pravatar.cc/150?img=5",
    statusColor: "text-[#6366F1]",
    statusBg: "bg-[#EEF2FF]",
  },
];

export const recentProjects = [
  {
    id: "p1",
    title: "Web Development Project",
    status: "Paid",
    rate: "$10/hour",
    icon: "life-ring",
    iconBg: "bg-[#E55B4C]",
    tags: ["Remote", "Part-time"],
    description:
      "This project involves implementing both frontend and backend functionalities, as well as integrating with third-party APIs.",
    location: "Germany",
    timeAgo: "2h ago",
    expanded: true,
  },
  {
    id: "p2",
    title: "Copyright Project",
    status: "Not Paid",
    rate: "$10/hour",
    icon: "layer-group",
    iconBg: "bg-[#1e293b]",
    expanded: false,
  },
  {
    id: "p3",
    title: "Web Design Project",
    status: "Paid",
    rate: "$10/hour",
    icon: "pen-nib", // approximate standard icon
    iconBg: "bg-[#8BA6C9]",
    expanded: false,
  },
];

export const incomeData = [
  { name: "S", value: 400 },
  { name: "M", value: 1200 },
  { name: "T", value: 2567 },
  { name: "W", value: 800 },
  { name: "T", value: 1600 },
  { name: "F", value: 600 },
  { name: "S", value: 300 },
];

export const proposalProgressData = [
  { name: "W1", sent: 64, interviews: 12, hires: 10 },
  { name: "W2", sent: 80, interviews: 15, hires: 12 },
  { name: "W3", sent: 45, interviews: 8, hires: 5 },
  { name: "W4", sent: 95, interviews: 20, hires: 18 },
  { name: "W5", sent: 70, interviews: 14, hires: 11 },
  { name: "W6", sent: 85, interviews: 18, hires: 15 },
  { name: "W7", sent: 50, interviews: 10, hires: 8 },
];

export const lineChartData = [
  { name: "Jan", users: 400, revenue: 240 },
  { name: "Feb", users: 300, revenue: 139 },
  { name: "Mar", users: 200, revenue: 980 },
  { name: "Apr", users: 278, revenue: 390 },
  { name: "May", users: 189, revenue: 480 },
  { name: "Jun", users: 239, revenue: 380 },
  { name: "Jul", users: 349, revenue: 430 },
];

export const pieChartData = [
  { name: "Direct", value: 400, color: "#1e293b" },
  { name: "Organic", value: 300, color: "#8BA6C9" },
  { name: "Referral", value: 300, color: "#E55B4C" },
  { name: "Social", value: 200, color: "#CBD5E1" },
];

export const areaChartData = [
  { name: "Week 1", current: 4000, previous: 2400 },
  { name: "Week 2", current: 3000, previous: 1398 },
  { name: "Week 3", current: 2000, previous: 9800 },
  { name: "Week 4", current: 2780, previous: 3908 },
  { name: "Week 5", current: 1890, previous: 4800 },
  { name: "Week 6", current: 2390, previous: 3800 },
  { name: "Week 7", current: 3490, previous: 4300 },
];
