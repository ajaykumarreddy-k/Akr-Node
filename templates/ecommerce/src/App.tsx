import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Button } from "./components/Button";
import { ProductCard } from "./components/ProductCard";
import { SectionHeader } from "./components/SectionHeader";
import { useScrollReveal } from "./hooks/useScrollReveal";
import "./index.css";

export function App() {
  useScrollReveal();

  return (
    <div className="bg-white font-sans text-brand-text">
      <Header />

      <main className="pt-[100px]">
        <section className="w-full bg-white mb-20 md:mb-32 reveal">
          {/* Title and Shop Button Row */}
          <div className="max-w-[1700px] mx-auto px-6 lg:px-12 pt-16 pb-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-copper mb-6">The New</p>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-black tracking-wide leading-tight">
                DUALTRAC - Collector
              </h1>
            </div>
            <div className="mb-4">
              <Button href="#shop" size="lg">Shop</Button>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="max-w-[1700px] mx-auto px-6 lg:px-12">
            <div className="w-full overflow-hidden bg-gray-50 rounded-sm">
              <img 
                src="https://loremflickr.com/1920/1080/watch,luxury,macro?random=1" 
                alt="Dualtrac Watches Hero" 
                className="w-full object-cover h-[500px] md:h-[650px] lg:h-[800px] hover:scale-105 transition-transform duration-[2s] ease-premium" 
              />
            </div>
          </div>
        </section>

        <section className="py-24 md:py-32 px-6 flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
          {/* Custom SR Monogram Emblem */}
          <div className="mb-10 text-brand-copper reveal">
            <svg viewBox="0 0 100 100" className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" strokeWidth="1.2">
              <circle cx="50" cy="50" r="45" strokeWidth="0.8" strokeDasharray="2 4" opacity="0.6"/>
              <path d="M 35 40 C 35 20, 65 20, 65 40 C 65 60, 35 60, 35 80" strokeLinecap="round"/>
              <path d="M 45 80 L 45 40 C 65 35, 75 50, 55 60 L 65 80" strokeLinecap="round"/>
            </svg>
          </div>
          <h3 className="text-xs font-bold uppercase tracking-widest text-brand-copper mb-12 reveal delay-100">The Brand</h3>
          <p className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-snug text-black mb-16 reveal delay-200">
            Born in Design. Fuelled By Vision. We<br className="hidden md:block"/>
            Re-imagined Icons with Soul, Beauty and<br className="hidden md:block"/>
            Precision.
          </p>
          <div className="reveal delay-300">
            <Button href="#discover" size="md">Discover</Button>
          </div>
        </section>

        <section className="py-24 md:py-32 border-t border-gray-100 relative">
          <div className="max-w-[1700px] mx-auto px-6 lg:px-12">
            <SectionHeader title="COLLECTIONS" />

            {/* Product Carousel */}
            <div className="flex overflow-x-auto no-scrollbar gap-8 md:gap-10 pb-12 snap-x snap-mandatory">
              <ProductCard imageSrc="https://loremflickr.com/800/1000/watch,luxury?random=2" name="Track1" price="CHF 60,000" delay={100} />
              <ProductCard imageSrc="https://loremflickr.com/800/1000/watch,luxury?random=3" name="Flytrack" price="CHF 26,500" delay={200} />
              <ProductCard imageSrc="https://loremflickr.com/800/1000/watch,luxury?random=4" name="1969" price="CHF 50,000" delay={300} />
              <ProductCard imageSrc="https://loremflickr.com/800/1000/watch,luxury?random=5" name="Dualtrac" price="CHF 45,000" delay={400} />
            </div>
            
            <div className="text-center mt-20 mb-8 reveal">
              <Button href="#view-all" variant="ghost">VIEW ALL</Button>
            </div>
          </div>
        </section>

        <section className="w-full reveal">
          <div 
            className="w-full h-[500px] md:h-[750px] bg-cover bg-center parallax-bg"
            style={{ backgroundImage: "url('https://loremflickr.com/1920/1080/watch,movement?random=6')" }}
          />
        </section>

        {/* Latest Models Section */}
        <section className="py-24 md:py-32 border-b border-gray-100">
          <div className="max-w-[1700px] mx-auto px-6 lg:px-12">
            <SectionHeader title="Latest Models" />

            <div className="flex overflow-x-auto no-scrollbar gap-8 md:gap-10 pb-12 snap-x snap-mandatory">
              <ProductCard imageSrc="https://loremflickr.com/800/1000/watch,luxury?random=7" name="Flytrack Blue" price="CHF 26,500" delay={100} />
              <ProductCard imageSrc="https://loremflickr.com/800/1000/watch,luxury?random=8" name="Track1 Black" price="CHF 60,000" delay={200} />
              <ProductCard imageSrc="https://loremflickr.com/800/1000/watch,luxury?random=9" name="1969 Bronze" price="CHF 50,000" delay={300} />
              <ProductCard imageSrc="https://loremflickr.com/800/1000/watch,luxury?random=10" name="Dualtrac Steel" price="CHF 45,000" delay={400} />
            </div>
             
            <div className="text-center mt-20 reveal">
              <Button href="#view-all-models" variant="ghost">VIEW ALL</Button>
            </div>
          </div>
        </section>

        {/* Blue Dial Image */}
        <section className="w-full bg-[#1c303f] reveal">
          <div 
            className="w-full h-[500px] md:h-[850px] bg-cover bg-center parallax-bg opacity-95 mix-blend-luminosity"
            style={{ backgroundImage: "url('https://loremflickr.com/1920/1080/watch,blue,macro?random=11')" }}
          />
        </section>

        {/* The Movement */}
        <section className="py-32 md:py-48 px-6 flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
          <div className="mb-10 text-brand-copper reveal">
            <svg viewBox="0 0 100 100" className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" strokeWidth="1.2">
              <circle cx="50" cy="50" r="45" strokeWidth="0.8" strokeDasharray="2 4" opacity="0.6"/>
              <path d="M 35 40 C 35 20, 65 20, 65 40 C 65 60, 35 60, 35 80" strokeLinecap="round"/>
              <path d="M 45 80 L 45 40 C 65 35, 75 50, 55 60 L 65 80" strokeLinecap="round"/>
            </svg>
          </div>
          <h3 className="text-xs font-bold uppercase tracking-widest text-brand-copper mb-12 reveal delay-100">The Movement</h3>
          <p className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-snug text-black mb-16 reveal delay-200">
            Behind every label lies a labour of<br className="hidden md:block"/>
            love. For design, for engineering, for the<br className="hidden md:block"/>
            quiet discipline of creating something<br className="hidden md:block"/>
            enduring.
          </p>
          <div className="reveal delay-300">
            <Button href="#discover-movement" size="md">Discover</Button>
          </div>
        </section>

        {/* Black Dial Image */}
        <section className="w-full bg-[#0a0a0a] reveal">
          <div 
            className="w-full h-[500px] md:h-[850px] bg-cover bg-center parallax-bg opacity-80 mix-blend-luminosity"
            style={{ backgroundImage: "url('https://loremflickr.com/1920/1080/watch,black,macro?random=12')" }}
          />
        </section>

        {/* The Collection */}
        <section className="py-32 md:py-48 px-6 flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
           <div className="mb-10 text-brand-copper reveal">
            <svg viewBox="0 0 100 100" className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" strokeWidth="1.2">
              <circle cx="50" cy="50" r="45" strokeWidth="0.8" strokeDasharray="2 4" opacity="0.6"/>
              <path d="M 35 40 C 35 20, 65 20, 65 40 C 65 60, 35 60, 35 80" strokeLinecap="round"/>
              <path d="M 45 80 L 45 40 C 65 35, 75 50, 55 60 L 65 80" strokeLinecap="round"/>
            </svg>
          </div>
          <h3 className="text-xs font-bold uppercase tracking-widest text-brand-copper mb-12 reveal delay-100">The Collection</h3>
          <p className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-snug text-black mb-16 reveal delay-200">
            The core model that reinvented the<br className="hidden md:block"/>
            chronograph.
          </p>
          <div className="reveal delay-300">
            <Button href="#explore-collection" size="md">Explore</Button>
          </div>
        </section>

        <section className="py-24 md:py-32 pb-40 border-t border-gray-100">
          <div className="max-w-[1500px] mx-auto px-6 lg:px-12">
            <div className="flex flex-col md:flex-row items-center gap-16 lg:gap-32">
              <div className="w-full md:w-1/2 reveal">
                <div className="bg-gray-50 overflow-hidden relative w-[90%] lg:w-[85%] aspect-square rounded-sm">
                  <img 
                    src="https://loremflickr.com/800/800/watch,box?random=13" 
                    alt="Watch in box" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-premium" 
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 mt-12 md:mt-0 reveal delay-200">
                <h4 className="text-xs font-bold uppercase tracking-widest text-brand-copper mb-8">Journal</h4>
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-black mb-10 leading-tight font-light tracking-wide uppercase">
                  INNOVATION AND BEAUTY<br />IN WATCHMAKING
                </h2>
                <p className="text-gray-600 font-light text-base leading-relaxed mb-12 max-w-lg">
                  Discover the story behind our latest caliber. A journey of passion, precision, and the relentless pursuit of redefining the mechanical chronograph.
                </p>
                <Button href="#journal" size="md">Read More</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Top Image */}
        <section className="w-full reveal">
          <div className="w-full overflow-hidden">
            <img 
              src="https://loremflickr.com/1920/1080/watchmaker?random=14" 
              alt="Watchmaker detailing" 
              className="w-full h-[400px] md:h-[600px] object-cover hover:scale-105 transition-transform duration-[2s] ease-premium" 
              loading="lazy"
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
