import logo from '../logo.png';

export function Footer() {
  return (
    <footer className="bg-brand-dark text-white pt-32 pb-12 px-6 lg:px-12">
      <div className="max-w-[1700px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-24">
          
          <div className="md:col-span-3 flex items-start">
            <a href="#" className="block mt-[-15px]">
              <img src={logo} alt="AKR Logo" className="h-16 w-auto rounded-xl" />
            </a>
          </div>
          
          <div className="md:col-span-6 flex flex-col items-start md:items-center text-left md:text-center">
            <p className="text-gray-400 text-sm md:text-base font-light mb-6 max-w-sm leading-relaxed">
              Join the Collector's community. Receive invitations, latest news and releases.
            </p>
            <form className="w-full max-w-md flex flex-col sm:flex-row gap-6 items-end justify-center" onSubmit={e => e.preventDefault()}>
              <input type="email" placeholder="Email address" className="flex-grow bg-transparent border-b border-gray-700 pb-4 text-white placeholder-gray-600 focus:outline-none focus:border-white transition-colors text-sm rounded-none tracking-wide" />
              <button type="submit" className="bg-white text-black text-xs font-bold uppercase tracking-widest px-10 py-4 rounded-full hover:bg-brand-copper hover:text-white transition-colors duration-300 whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </div>
          
          <div className="md:col-span-3 flex flex-col items-start md:items-end space-y-4 text-xs font-light text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Contact</a>
            <a href="#" className="hover:text-white transition-colors">FAQ</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
            <a href="#" className="hover:text-white transition-colors">Shipping & Returns</a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 uppercase tracking-widest">
          <div className="mb-4 md:mb-0">
            &copy; 2024 AKR. All rights reserved.
          </div>
          <div className="flex space-x-12">
            <a href="#" className="hover:text-white transition-colors flex items-center gap-2">
              Instagram
            </a>
            <a href="#" className="hover:text-white transition-colors flex items-center gap-2">
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
