import React from 'react';
import { Sparkles, Cookie, ArrowUpRight, Flame, Leaf, Coffee, Check } from 'lucide-react';

interface ParallaxShowcaseProps {
  onSelectCategory: (cat: any) => void;
}

export const ParallaxShowcase: React.FC<ParallaxShowcaseProps> = ({ onSelectCategory }) => {
  return (
    <section className="py-14 sm:py-20 lg:py-28 relative overflow-hidden bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#4A0E17]/5 border border-[#4A0E17]/10 text-xs font-semibold text-[#4A0E17] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>The Craft & Precision</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-[-0.03em] text-[#1d1d1f]">
            Obsessive Quality. <br />
            <span className="text-[#9B1E36]">Pure, Unadulterated Taste.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#86868b] font-normal leading-relaxed">
            Every creation at AÇAI.IN is built on three foundational tenets: single-origin transparency, artisanal patience, and zero artificial shortcuts.
          </p>
        </div>

        {/* Apple-style Bento Grid with Highlighted, Radiant Photography */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 lg:gap-8">
          {/* Card 1: Wild Amazonian Açaí (Large Card - Highlighted Split Image) */}
          <div className="md:col-span-7 rounded-[1.75rem] sm:rounded-[2rem] overflow-hidden bg-[#3D0812] text-white p-5 sm:p-10 relative flex flex-col justify-between group shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/10">
            {/* Ambient subtle warm glow behind image */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#9B1E36]/30 rounded-full blur-3xl pointer-events-none" />

            {/* Top Bar */}
            <div className="relative z-10 flex items-center justify-between mb-6">
              <span className="px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-xs font-semibold tracking-wider uppercase text-[#F5CED3] border border-white/20">
                Superfood Origin
              </span>
              <button
                onClick={() => onSelectCategory('smoothies')}
                className="w-10 h-10 rounded-full bg-white/15 hover:bg-white text-white hover:text-[#4A0E17] flex items-center justify-center transition-colors backdrop-blur-md border border-white/20"
                aria-label="View Smoothies"
              >
                <ArrowUpRight className="w-5 h-5" />
              </button>
            </div>

            {/* Split Content: Details Left + Bright Highlighted Image Right */}
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-12 gap-6 sm:gap-8 items-center">
              {/* Text side */}
              <div className="sm:col-span-7 space-y-3.5">
                <span className="text-xs uppercase tracking-[0.2em] text-[#F5CED3] font-semibold block">
                  Wild Harvested in Pará, Brazil
                </span>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-[-0.03em] leading-tight text-white">
                  Pure Amazonian Açaí. <br />
                  <span className="text-[#F5CED3]">Zero Dilution.</span>
                </h3>
                <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-normal">
                  Flash-frozen at harvest to lock in potent anthocyanins and healthy omegas. Savor a velvety texture so dense your spoon stands upright.
                </p>

                <div className="pt-2 flex flex-wrap gap-2 text-[11px] text-white/90">
                  <span className="px-2.5 py-1 rounded-full bg-white/10 border border-white/15">
                    ✓ High Antioxidants
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-white/10 border border-white/15">
                    ✓ 0g Refined Sugars
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-white/10 border border-white/15">
                    ✓ Fair Trade
                  </span>
                </div>
              </div>

              {/* HIGHLIGHTED IMAGE SIDE */}
              <div className="sm:col-span-5 relative">
                <div className="relative w-full h-56 sm:h-64 rounded-2xl overflow-hidden shadow-2xl border-2 border-white/25 group-hover:border-white/50 transition-colors">
                  <img
                    src="https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=800&q=85"
                    alt="Pure Amazonian Açaí Bowl with Fresh Berries"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-105 contrast-105"
                  />
                  {/* Subtle glossy glass border tag */}
                  <div className="absolute bottom-2.5 left-2.5 px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md text-[10px] font-semibold text-white">
                    Freshly Hand-Blended
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: 18-Hour Cold Extraction Coffee (Highlighted Image Showcase) */}
          <div className="md:col-span-5 rounded-[1.75rem] sm:rounded-[2rem] overflow-hidden bg-[#14261C] text-white p-5 sm:p-10 relative flex flex-col justify-between group shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/10">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#42634C]/25 rounded-full blur-3xl pointer-events-none" />

            {/* Top Bar */}
            <div className="relative z-10 flex items-center justify-between mb-6">
              <span className="px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-xs font-semibold tracking-wider uppercase text-[#B4D79D] border border-white/20">
                Slow Extraction
              </span>
              <button
                onClick={() => onSelectCategory('cold-brew')}
                className="w-10 h-10 rounded-full bg-white/15 hover:bg-white text-white hover:text-[#14261C] flex items-center justify-center transition-colors backdrop-blur-md border border-white/20"
                aria-label="View Cold Brews"
              >
                <ArrowUpRight className="w-5 h-5" />
              </button>
            </div>

            {/* Content & HIGHLIGHTED IMAGE */}
            <div className="relative z-10 space-y-4">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-[0.2em] text-[#B4D79D] font-semibold block">
                  Single Origin Arabica
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-[-0.02em] leading-tight text-white">
                  Cranberry & Strawberry Cold Brew.
                </h3>
                <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-normal">
                  Steeped cold drop-by-drop for 18 continuous hours. 67% less acidity, ultra-silky mouthfeel, and rich fruit aromatics.
                </p>
              </div>

              {/* HIGHLIGHTED IMAGE CONTAINER */}
              <div className="relative w-full h-48 sm:h-52 rounded-2xl overflow-hidden shadow-2xl border-2 border-white/25 group-hover:border-white/50 transition-colors">
                <img
                  src="https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=800&q=85"
                  alt="Specialty Cold Brew Coffee over Crystal Ice"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-105 contrast-105"
                />
                <div className="absolute bottom-2.5 left-2.5 px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md text-[10px] font-semibold text-white">
                  18h Cold Steep • 4°C
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Ceremonial Uji Matcha & Royal Ube (Highlighted Split) */}
          <div className="md:col-span-6 rounded-[1.75rem] sm:rounded-[2rem] overflow-hidden bg-white border border-[#4A0E17]/10 p-5 sm:p-10 relative flex flex-col justify-between group shadow-lg hover:shadow-xl transition-all duration-500">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#5D8A3D]" />
                <span className="w-3 h-3 rounded-full bg-[#6B3F8F]" />
                <span className="text-xs font-semibold uppercase tracking-wider text-[#4A0E17]">
                  Ceremonial Kyoto & Ube
                </span>
              </div>
              <button
                onClick={() => onSelectCategory('matcha')}
                className="w-10 h-10 rounded-full bg-[#4A0E17]/5 hover:bg-[#4A0E17] text-[#4A0E17] hover:text-white flex items-center justify-center transition-colors"
                aria-label="View Matcha & Ube"
              >
                <ArrowUpRight className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
              <div className="sm:col-span-7 space-y-3">
                <h4 className="text-2xl font-bold tracking-[-0.02em] text-[#1d1d1f]">
                  Cloud Matcha & Velvet Ube
                </h4>
                <p className="text-xs sm:text-sm text-[#86868b] leading-relaxed">
                  Stone-ground first harvest shade-grown matcha from Uji, Kyoto paired with real sweet Filipino purple yam cold foams.
                </p>
                <div className="text-xs font-semibold text-[#9B1E36] pt-1">
                  Try Cloud Coconut Matcha →
                </div>
              </div>

              {/* HIGHLIGHTED IMAGE */}
              <div className="sm:col-span-5 relative w-full h-48 sm:h-52 rounded-2xl overflow-hidden shadow-lg border border-black/[0.08]">
                <img
                  src="https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=700&q=85"
                  alt="Cloud Coconut Matcha with Velvet Foam"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-105"
                />
                <div className="absolute bottom-2.5 left-2.5 px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-md text-[9px] font-semibold text-white">
                  Kyoto Ceremonial
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: Artisanal Molten Cookies & Acai Tiramisu (Highlighted Split) */}
          <div className="md:col-span-6 rounded-[1.75rem] sm:rounded-[2rem] overflow-hidden bg-white border border-[#4A0E17]/10 p-5 sm:p-10 relative flex flex-col justify-between group shadow-lg hover:shadow-xl transition-all duration-500">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Cookie className="w-4 h-4 text-[#C6923C]" />
                <span className="text-xs font-semibold uppercase tracking-wider text-[#4A0E17]">
                  Daily Fresh Bakes
                </span>
              </div>
              <button
                onClick={() => onSelectCategory('cookies')}
                className="w-10 h-10 rounded-full bg-[#4A0E17]/5 hover:bg-[#4A0E17] text-[#4A0E17] hover:text-white flex items-center justify-center transition-colors"
                aria-label="View Cookies & Bakes"
              >
                <ArrowUpRight className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
              <div className="sm:col-span-7 space-y-3">
                <h4 className="text-2xl font-bold tracking-[-0.02em] text-[#1d1d1f]">
                  Molten Nutella & Açaí Tiramisu
                </h4>
                <p className="text-xs sm:text-sm text-[#86868b] leading-relaxed">
                  Warm browned-butter cookies with molten Nutella & Lotus cores, and world-first Açaí Mascarpone Tiramisu.
                </p>
                <div className="text-xs font-semibold text-[#9B1E36] pt-1">
                  Explore Bakery Specials →
                </div>
              </div>

              {/* HIGHLIGHTED IMAGE */}
              <div className="sm:col-span-5 relative w-full h-48 sm:h-52 rounded-2xl overflow-hidden shadow-lg border border-black/[0.08]">
                <img
                  src="https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=700&q=85"
                  alt="Authentic Italian Tiramisu & Molten Bakes"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-105"
                />
                <div className="absolute bottom-2.5 left-2.5 px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-md text-[9px] font-semibold text-white">
                  Baked Fresh Hourly
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
