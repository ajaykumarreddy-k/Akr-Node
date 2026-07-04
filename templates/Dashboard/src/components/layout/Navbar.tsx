import { NavLink } from "react-router-dom";
import { Search, Settings, Bell } from "lucide-react";
import logo from "../../logo.png";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Navbar() {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Messages", path: "/messages" },
    { name: "Discover", path: "/discover" },
    { name: "Wallet", path: "/wallet" },
    { name: "Projects", path: "/projects" },
    { name: "Documentation", path: "/docs" },
  ];

  return (
    <header className="flex items-center justify-between mb-8">
      {/* Logo & Nav */}
      <div className="flex items-center gap-12 lg:gap-16">
        {/* Branding */}
        <div className="flex items-center gap-2.5 text-[#E55B4C] font-extrabold text-lg tracking-wider uppercase">
          <img src={logo} alt="AKR Logo" className="h-10 object-contain" />
          AKR
        </div>

        {/* Main Nav Links */}
        <nav className="hidden md:flex gap-8 text-[14px] font-medium text-slate-500">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `transition-colors pb-1 ${
                  isActive
                    ? "text-slate-800 border-b-2 border-slate-800 relative top-[1px]"
                    : "hover:text-slate-800"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Search Field & Quick Utility Actions */}
      <div className="flex items-center gap-3">
        <div className="relative hidden lg:block mr-2">
          <input
            type="text"
            placeholder="Enter your search request..."
            className="bg-white/80 rounded-full py-2.5 pl-5 pr-12 w-[280px] text-xs focus:outline-none focus:ring-2 focus:ring-slate-300 shadow-sm text-slate-500 font-normal"
          />
          <Search className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
        </div>

        {/* Action Buttons */}
        <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-slate-500 hover:text-slate-800 transition-all border border-slate-100 hover:scale-105 active:scale-95">
          <Settings className="w-4 h-4" />
        </button>
        <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-slate-500 hover:text-slate-800 transition-all border border-slate-100 relative hover:scale-105 active:scale-95">
          <Bell className="w-4 h-4" />
          <span className="absolute top-3 right-3 w-1.5 h-1.5 bg-red-500 rounded-full"></span>
        </button>

        {/* Profile Avatar */}
        <Avatar className="w-10 h-10 ml-1 cursor-pointer hover:scale-105 transition-transform border border-slate-200 shadow-sm">
          <AvatarImage src="https://i.pravatar.cc/150?img=47" alt="User Profile" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
