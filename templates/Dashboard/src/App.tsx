import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Home } from "@/pages/Home";
import { Placeholder } from "@/pages/Placeholder";
import { Documentation } from "./pages/Documentation";
import "./index.css";

export function App() {
  return (
    <Router>
      <div className="text-slate-800 antialiased min-h-screen flex flex-col justify-between bg-[#E8EEF3]">
        <div className="w-full flex-grow flex flex-col p-6 md:p-10 max-w-[1600px] mx-auto">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/messages" element={<Placeholder title="Messages" />} />
            <Route path="/discover" element={<Placeholder title="Discover" />} />
            <Route path="/wallet" element={<Placeholder title="Wallet" />} />
            <Route path="/projects" element={<Placeholder title="Projects" />} />
            <Route path="/docs" element={<Documentation />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
