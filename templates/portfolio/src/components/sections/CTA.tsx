export function CTA() {
  return (
    <section className="mb-12 max-w-[90rem] mx-auto px-6 md:px-12 pt-20">
      <div className="newsletter-gradient rounded-[2rem] p-10 md:p-16 flex flex-col lg:flex-row justify-between items-center gap-10 shadow-sm border border-orange-50/50">
        <div className="lg:w-5/12">
          <h3 className="text-[26px] md:text-3xl font-medium mb-4 leading-tight">
            A semi-regular dispatch from the studio.
          </h3>
          <p className="text-gray-600 text-[15px]">
            Insights on design, technology, and culture, delivered to your inbox.
          </p>
        </div>
        <div className="w-full lg:w-5/12">
          <form className="flex w-full bg-white rounded-full p-1.5 shadow-sm border border-gray-200 focus-within:border-gray-300 transition-colors" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 bg-transparent px-5 text-[15px] outline-none text-gray-800 placeholder-gray-400" 
              required 
            />
            <button 
              type="submit" 
              className="bg-black text-white px-7 py-3 rounded-full text-[13px] font-medium hover:bg-gray-800 transition-colors"
            >
              Subscribe
            </button>
          </form>
          <p className="text-[12px] text-gray-500 mt-4 px-2">
            By subscribing, you agree to our <a href="#" className="underline hover:text-black">Privacy Policy</a>.
          </p>
        </div>
      </div>
    </section>
  );
}
