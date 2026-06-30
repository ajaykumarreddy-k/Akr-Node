export function Footer() {
  return (
    <div className="footer-gradient w-full pt-32 flex flex-col items-center relative overflow-hidden">
      <div className="max-w-[72rem] mx-auto px-6 text-left mb-48 md:mb-64 relative z-10 w-full pt-16">
        <h2 className="text-[28px] md:text-4xl lg:text-[42px] font-medium leading-[1.3] tracking-tight text-[#221008] mix-blend-color-burn">
          "At our core we believe in culture, code, and craft.<br className="hidden md:block"/>
          Turning abstract visions into tangible realities—<br className="hidden md:block"/>
          from brand identity to digital platforms, building<br className="hidden md:block"/>
          and scaling companies for the next decade of<br className="hidden md:block"/>
          interaction."
        </h2>
        <div className="mt-8 text-[13px] font-medium text-[#4A2614] mix-blend-color-burn uppercase tracking-widest">
          — Studio Philosophy
        </div>
      </div>

      <footer className="w-full max-w-[90rem] mx-auto px-6 md:px-12 text-white/80 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16 pt-16 border-t border-white/10">
          <div className="col-span-2 lg:col-span-1">
            <h4 className="text-[11px] font-semibold uppercase tracking-widest text-white/40 mb-6">Oslo</h4>
            <p className="text-[13px] leading-relaxed font-light">
              xxxxxxxxxxxx xxxxxxxxxxxxx,<br />
              xxxxxxxxxxxx,<br />
              xxxxxxxxxxxx
            </p>
          </div>
          <div className="col-span-2 lg:col-span-1">
            <h4 className="text-[11px] font-semibold uppercase tracking-widest text-white/40 mb-6">London</h4>
            <p className="text-[13px] leading-relaxed font-light">
              xxxxxxxxxxxx xxxxxxxxxxxxx,<br />
              xxxxxxxxxxxx,<br />
              xxxxxxxxxxxx
            </p>
          </div>
          <div className="hidden lg:block col-span-1"></div>
          <div className="col-span-1">
            <h4 className="text-[11px] font-semibold uppercase tracking-widest text-white/40 mb-6">Studio</h4>
            <ul className="space-y-3 text-[13px] font-light">
              <li><a href="#" className="hover:text-white transition-colors">Work</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors">About us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Journal</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>
          <div className="col-span-1">
            <h4 className="text-[11px] font-semibold uppercase tracking-widest text-white/40 mb-6">Social</h4>
            <ul className="space-y-3 text-[13px] font-light">
              <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Twitter (X)</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Behance</a></li>
            </ul>
          </div>
        </div>

        <div className="w-full flex justify-center mb-16 relative pointer-events-none">
          <img src="/logo.svg" 
               alt="AKR Logo Large" 
               className="h-72 md:h-96 object-contain opacity-90" />
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-[11px] font-light text-white/40 pt-6 pb-8 border-t border-white/10">
          <div className="mb-4 md:mb-0 flex items-center gap-3">
            <img src="/logo.svg" alt="AKR Logo" className="w-5 h-5 object-contain" />
            © {new Date().getFullYear()} akr base template
          </div>
          <div className="flex space-x-8 uppercase tracking-widest font-semibold">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
