import React, { useState, useEffect, useRef, createContext, useContext } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import './styles/index.css';

// ============================================================================
// 1. CONFIGURATION
// ============================================================================
export const portfolioConfig = {
  personal: {
    name: "Ajay",
    initials: "AJ",
    roles: ["Full-Stack Engineer", "Creative Developer", "Open Source Advocate", "UI/UX Enthusiast"],
    tagline: "Building digital experiences that people remember.",
    bio: "I bridge the gap between design and engineering. With a strong focus on performance, accessibility, and clean aesthetics, I build scalable applications that feel intuitive and look stunning.",
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Ajay&backgroundColor=4285f4",
    email: "hello@akr-portfolio.dev",
    resumeUrl: "#",
  },
  socials: [
    { name: "GitHub", url: "https://github.com", icon: "Github" },
    { name: "Linkedin", url: "https://linkedin.com", icon: "Linkedin" },
    { name: "Twitter", url: "https://twitter.com", icon: "Twitter" },
  ],
  skills: {
    frontend: ["React 19", "TypeScript", "Tailwind CSS", "Framer Motion", "Next.js", "Three.js"],
    backend: ["Node.js", "Python", "PostgreSQL", "Redis", "GraphQL", "Go"],
    tools: ["Vite", "Docker", "AWS", "Figma", "Git", "Linux"],
  },
  projects: [
    {
      title: "Project Alpha",
      description: "A highly optimized system built with modern stacks. Features a custom command palette and real-time updates.",
      image: "https://placehold.co/800x450/202124/FFFFFF/png?text=Project+Alpha",
      tags: ["React", "TypeScript", "WebSocket"],
      github: "#",
      demo: "#",
      featured: true,
    },
    {
      title: "Design System",
      description: "An experimental visual experience exploring spatial interfaces. Built utilizing advanced shaders.",
      image: "https://placehold.co/800x450/4285f4/FFFFFF/png?text=Design+System",
      tags: ["Three.js", "WebGL", "Framer Motion"],
      github: "#",
      demo: "#",
      featured: true,
    },
  ],
  experience: [
    {
      role: "Senior Software Engineer",
      company: "XXXXXXX XXXXXX",
      period: "2023 - Present",
      description: "Leading the core infrastructure team. Architected XXXXXXX XXXXXXX XXXXXXX reducing global latency by 40%.",
      technologies: ["Next.js", "Rust", "Edge Runtime"],
    },
    {
      role: "Frontend Developer",
      company: "XXXXXXX XXXXXXX",
      period: "2021 - 2023",
      description: "Developed XXXXXXX XXXXXXX flows and interactive XXXXXXX dashboards with complex state management.",
      technologies: ["React", "Redux", "Framer Motion"],
    },
  ],
};

// ============================================================================
// 2. THEME ENGINE & CONTEXT
// ============================================================================
type Theme = 'static';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  themes: Theme[];
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'static',
  setTheme: () => { },
  themes: ['static'],
});

const themeStyles: Record<Theme, string> = {
  static: "bg-[#f8f9fa] text-[#202124] font-sans selection:bg-[#4285f4]/30",
};

const DynamicIcon = ({ name, size = 20, className = "" }: { name: string, size?: number, className?: string }) => {
  const Icon = (LucideIcons as any)[name];
  if (!Icon) return <LucideIcons.HelpCircle size={size} className={className} />;
  return <Icon size={size} className={className} />;
};

// ============================================================================
// 3. CUSTOM HOOKS
// ============================================================================
const useKonamiCode = (callback: () => void) => {
  useEffect(() => {
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiIndex = 0;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
          callback();
          konamiIndex = 0;
        }
      } else {
        konamiIndex = 0;
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [callback]);
};

// ============================================================================
// 4. UI COMPONENTS (Reusable Design System)
// ============================================================================
const MagneticWrapper = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => setPosition({ x: 0, y: 0 });

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const Section = ({ id, children, className = "" }: { id: string, children: React.ReactNode, className?: string }) => (
  <section id={id} className={`py-24 md:py-32 w-full max-w-6xl mx-auto px-6 ${className}`}>
    {children}
  </section>
);

const SectionHeading = ({ children, number }: { children: React.ReactNode, number?: string }) => {
  const { theme } = useContext(ThemeContext);
  const isBrutalist = theme === ('brutalist' as any);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="flex items-center gap-4 mb-12 md:mb-16"
    >
      {number && (
        <span className={`text-sm md:text-base font-mono ${isBrutalist ? 'text-black' : 'text-blue-500'}`}>
          {number}.
        </span>
      )}
      <h2 className={`text-3xl md:text-5xl font-bold tracking-tight ${isBrutalist ? 'border-b-4 border-black inline-block' : ''}`}>
        {children}
      </h2>
      {!isBrutalist && <div className="h-[1px] flex-grow bg-gradient-to-r from-current to-transparent opacity-20 ml-4 hidden md:block"></div>}
    </motion.div>
  );
};

// ============================================================================
// 5. COMMAND PALETTE (Cmd+K)
// ============================================================================
const CommandPalette = ({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: (v: boolean) => void }) => {
  const [query, setQuery] = useState("");
  const { theme, setTheme, themes } = useContext(ThemeContext);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(!isOpen);
      }
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, setIsOpen]);

  if (!isOpen) return null;

  const commands = [
    { name: "Navigate: About", action: () => { window.location.hash = "about"; setIsOpen(false); }, icon: "User" },
    { name: "Navigate: Projects", action: () => { window.location.hash = "projects"; setIsOpen(false); }, icon: "Code" },
    { name: "Navigate: Experience", action: () => { window.location.hash = "experience"; setIsOpen(false); }, icon: "Briefcase" },
    { name: "Contact Developer", action: () => { window.location.hash = "contact"; setIsOpen(false); }, icon: "Mail" },
    ...themes.map(t => ({
      name: `Theme: ${t.charAt(0).toUpperCase() + t.slice(1)}`,
      action: () => { setTheme(t); setIsOpen(false); },
      icon: "Palette"
    }))
  ];

  const filtered = commands.filter(c => c.name.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh] px-4">
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: -20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className={`relative w-full max-w-xl rounded-xl shadow-2xl overflow-hidden border ${theme === ('minimal' as any) ? 'bg-white border-gray-200 text-black' :
            theme === ('brutalist' as any) ? 'bg-yellow-400 border-4 border-black text-black rounded-none shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]' :
              'bg-zinc-900 border-white/10 text-white'
          }`}
      >
        <div className="p-4 border-b border-inherit/10 flex items-center gap-3">
          <LucideIcons.Search size={20} className="opacity-50" />
          <input
            autoFocus
            type="text"
            placeholder="Type a command or search..."
            className="flex-1 bg-transparent border-none outline-none text-lg placeholder:opacity-50"
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
          <kbd className="hidden sm:inline-block text-xs font-mono opacity-50 border border-inherit/20 rounded px-2 py-1">ESC</kbd>
        </div>
        <div className="max-h-[60vh] overflow-y-auto p-2">
          {filtered.length === 0 ? (
            <div className="p-8 text-center opacity-50">No results found.</div>
          ) : (
            filtered.map((cmd, i) => (
              <button
                key={i}
                onClick={cmd.action}
                className={`w-full flex items-center gap-3 p-3 text-left rounded-lg transition-colors hover:bg-black/10 dark:hover:bg-white/10 ${theme === ('brutalist' as any) ? 'hover:bg-black hover:text-white rounded-none border-b-2 border-transparent hover:border-black' : ''
                  }`}
              >
                <DynamicIcon name={cmd.icon} size={18} className="opacity-70" />
                <span>{cmd.name}</span>
              </button>
            ))
          )}
        </div>
      </motion.div>
    </div>
  );
};

// ============================================================================
// 6. SECTIONS
// ============================================================================
const Hero = () => {
  const { theme } = useContext(ThemeContext);
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % portfolioConfig.personal.roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden w-full px-6">
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        {/* Subtle background glow mimicking Vercel/Linear */}
        <div className="w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-blue-500/10 blur-[120px] rounded-full mix-blend-screen" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-start w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 flex items-center gap-3"
        >
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-current/20">
            <img src={portfolioConfig.personal.avatar} alt="Avatar" className="w-full h-full object-cover" />
          </div>
          <div>
            <p className="text-sm font-mono opacity-70">Hi, I'm {portfolioConfig.personal.name}</p>
            <div className="flex h-6 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="font-medium text-blue-500 dark:text-blue-400 block"
                >
                  {portfolioConfig.personal.roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={`text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-[1.1] mb-8 max-w-4xl ${theme === ('brutalist' as any) ? 'uppercase font-black text-shadow-brutal' : ''
            }`}
        >
          Building digital <br className="hidden md:block" /> experiences that <br className="hidden md:block" />
          <span className={`text-transparent bg-clip-text ${theme === 'static' ? 'bg-gradient-to-r from-[#4285f4] to-[#ea4335]' : 'bg-gradient-to-r from-blue-500 to-cyan-400'}`}>
            people remember.
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-4 items-center"
        >
          <MagneticWrapper>
            <a href="#projects" className={`px-8 py-4 rounded-full font-medium transition-transform flex items-center gap-2 ${theme === ('brutalist' as any)
                ? 'bg-black text-white rounded-none border-2 border-black hover:bg-transparent hover:text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
                : 'bg-foreground text-background hover:scale-105 active:scale-95 bg-black text-white dark:bg-white dark:text-black'
              }`}>
              View Work <LucideIcons.ArrowRight size={18} />
            </a>
          </MagneticWrapper>
          <MagneticWrapper>
            <a href="#contact" className={`px-8 py-4 rounded-full font-medium border flex items-center gap-2 ${theme === ('brutalist' as any)
                ? 'bg-transparent text-black border-2 border-black rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-black hover:text-white'
                : 'border-current/20 hover:bg-current/5 transition-colors'
              }`}>
              Contact Me
            </a>
          </MagneticWrapper>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50"
      >
        <span className="text-xs font-mono uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-current to-transparent"></div>
      </motion.div>
    </section>
  );
};

const About = () => {
  return (
    <Section id="about">
      <SectionHeading number="01">About Me</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
          className="space-y-6 text-lg md:text-xl opacity-80 leading-relaxed"
        >
          <p>{portfolioConfig.personal.bio}</p>
          <p>
            When I'm not at my computer, you can usually find me reading sci-fi,
            exploring modern architecture, or trying to perfect my pour-over coffee recipe.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
          className="space-y-8"
        >
          {Object.entries(portfolioConfig.skills).map(([category, skills], idx) => (
            <div key={category}>
              <h3 className="text-sm font-mono uppercase tracking-widest opacity-50 mb-4">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map(skill => (
                  <span
                    key={skill}
                    className="px-4 py-2 text-sm rounded-full border border-current/10 bg-current/5 hover:bg-current/10 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
};

const Projects = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Section id="projects">
      <SectionHeading number="02">Featured Work</SectionHeading>
      <div className="space-y-24 md:space-y-32">
        {portfolioConfig.projects.filter(p => p.featured).map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className={`flex flex-col ${i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-16 items-center`}
          >
            <div className={`w-full md:w-3/5 group relative rounded-2xl overflow-hidden aspect-video ${theme === ('brutalist' as any) ? 'border-4 border-black rounded-none shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]' : ''
              }`}>
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            <div className="w-full md:w-2/5 flex flex-col space-y-6">
              <div>
                <p className="text-blue-500 font-mono text-sm mb-2">Featured Project</p>
                <h3 className="text-3xl font-bold">{project.title}</h3>
              </div>
              <div className={`p-6 rounded-xl ${theme === ('minimal' as any) ? 'bg-gray-100' :
                  theme === ('brutalist' as any) ? 'border-4 border-black bg-white text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]' :
                    'bg-white/5 backdrop-blur-md border border-white/10'
                }`}>
                <p className="opacity-90">{project.description}</p>
              </div>
              <div className="flex flex-wrap gap-3 font-mono text-xs opacity-70">
                {project.tags.map(tag => <span key={tag}>{tag}</span>)}
              </div>
              <div className="flex gap-4 pt-2">
                {project.github && (
                  <a href={project.github} className="hover:text-blue-500 transition-colors" aria-label="GitHub Repository">
                    <LucideIcons.Github size={24} />
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} className="hover:text-blue-500 transition-colors" aria-label="Live Demo">
                    <LucideIcons.ExternalLink size={24} />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

const Experience = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <Section id="experience" className="max-w-4xl">
      <SectionHeading number="03">Where I've Worked</SectionHeading>
      <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-current/20 before:to-transparent">
        {portfolioConfig.experience.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active`}
          >
            <div className={`flex items-center justify-center w-10 h-10 rounded-full border-4 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow absolute left-0 md:left-1/2 -translate-x-1/2 ${theme === ('brutalist' as any) ? 'border-black bg-yellow-400' : 'border-background bg-blue-500'
              }`}>
              <LucideIcons.Briefcase size={16} className={theme === ('brutalist' as any) ? 'text-black' : 'text-white'} />
            </div>

            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] ml-14 md:ml-0 p-6 rounded-xl border border-current/10 bg-current/5 hover:bg-current/10 transition-colors">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
                <h4 className="font-bold text-xl">{exp.role}</h4>
                <span className="text-sm font-mono opacity-60">{exp.period}</span>
              </div>
              <p className="text-blue-500 font-medium mb-4">{exp.company}</p>
              <p className="opacity-80 mb-4 text-sm md:text-base">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map(tech => (
                  <span key={tech} className="text-xs font-mono px-2 py-1 bg-current/10 rounded">{tech}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

const Contact = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <Section id="contact" className="text-center max-w-3xl">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        <SectionHeading number="04">Get In Touch</SectionHeading>
        <p className="text-lg md:text-xl opacity-80 leading-relaxed mb-8">
          Although I'm not currently looking for any new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        <MagneticWrapper className="inline-block">
          <a
            href={`mailto:${portfolioConfig.personal.email}`}
            className={`inline-block px-10 py-5 text-lg font-medium rounded-xl transition-all ${theme === ('brutalist' as any)
                ? 'bg-black text-white rounded-none border-4 border-black hover:bg-transparent hover:text-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]'
                : 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-blue-500/25'
              }`}
          >
            Say Hello
          </a>
        </MagneticWrapper>
      </motion.div>
    </Section>
  );
};

const Footer = () => (
  <footer className="py-8 text-center opacity-60 flex flex-col items-center gap-4">
    <div className="flex gap-6">
      {portfolioConfig.socials.map(social => (
        <a key={social.name} href={social.url} className="hover:text-blue-500 transition-colors" aria-label={social.name}>
          <DynamicIcon name={social.icon} size={24} />
        </a>
      ))}
    </div>
    <p className="font-mono text-sm">
      Designed & Built by {portfolioConfig.personal.name}
      <br />
      <span className="opacity-50 text-xs mt-2 block">Press Cmd/Ctrl + K for magic.</span>
    </p>
  </footer>
);

// ============================================================================
// 7. MAIN LAYOUT & NAV
// ============================================================================
const Navbar = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 50], [0, -100]);
  const opacity = useTransform(scrollY, [0, 50], [1, 0]);

  // A subtle navbar that fades out on scroll down, typical in premium dev portfolios.
  return (
    <motion.nav
      style={{ y, opacity }}
      className="fixed top-0 left-0 right-0 z-40 p-6 flex justify-between items-center mix-blend-difference text-white"
    >
      <div className="font-bold text-xl tracking-tighter cursor-pointer">
        {portfolioConfig.personal.initials}
      </div>
      <div className="hidden md:flex gap-8 font-mono text-sm">
        {['About', 'Projects', 'Experience', 'Contact'].map((item, i) => (
          <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-blue-400 transition-colors">
            <span className="text-blue-500 mr-1">0{i + 1}.</span> {item}
          </a>
        ))}
      </div>
      <button
        onClick={() => window.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', metaKey: true }))}
        className="md:hidden p-2 border border-current/20 rounded"
        aria-label="Open Menu"
      >
        <LucideIcons.Command size={20} />
      </button>
    </motion.nav>
  );
};

export default function App() {
  const [theme, setTheme] = useState<Theme>('static');
  const [cmdOpen, setCmdOpen] = useState(false);
  const [easterEggActive, setEasterEggActive] = useState(false);

  useKonamiCode(() => {
    setEasterEggActive(true);
    setTimeout(() => setEasterEggActive(false), 5000);
  });

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themes: ['static'] }}>
      <div className={`min-h-screen w-full transition-colors duration-500 overflow-x-hidden ${themeStyles[theme]} ${easterEggActive ? 'animate-pulse' : ''}`}>
        {/* Custom Font Implementation (Creative Google-inspired) */}
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;700;900&family=JetBrains+Mono:wght@400;700&display=swap');
          body { 
            font-family: 'Outfit', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; 
          }
          .font-mono {
            font-family: 'JetBrains Mono', monospace;
          }
        `}</style>

        <Navbar />
        <CommandPalette isOpen={cmdOpen} setIsOpen={setCmdOpen} />

        <main>
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Contact />
        </main>

        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}
