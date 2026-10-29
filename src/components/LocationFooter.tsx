import React from 'react';
import { MapPin, Clock, Instagram, ArrowUp } from 'lucide-react';

export const LocationFooter: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="locations" className="bg-[#2D060C] text-[#FAF7F2] pt-14 sm:pt-20 pb-10 sm:pb-12 relative overflow-hidden">
      {/* Decorative ambient glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#9B1E36]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 space-y-10 sm:space-y-16 relative z-10">
        {/* Top Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8 pb-8 sm:pb-12 border-b border-white/10">
          {/* Flagship Cafe */}
          <div className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white/5 border border-white/10 space-y-2.5 sm:space-y-3">
            <div className="flex items-center gap-2 text-[#E17285] text-xs font-semibold uppercase tracking-wider">
              <MapPin className="w-4 h-4" />
              <span>Flagship Sanctuary</span>
            </div>
            <h4 className="text-xl font-bold tracking-tight">Indiranagar 100ft Road</h4>
            <p className="text-xs text-white/70 leading-relaxed">
              #42, 100 Feet Road, HAL 2nd Stage, Indiranagar, Bengaluru, KA 560038
            </p>
            <div className="flex items-center gap-2 text-xs text-white/60 pt-2 border-t border-white/5">
              <Clock className="w-3.5 h-3.5 text-[#E17285]" />
              <span>8:00 AM – 11:30 PM (Daily)</span>
            </div>
          </div>

          {/* Location 2 */}
          <div className="p-6 rounded-3xl bg-white/5 border border-white/10 space-y-3">
            <div className="flex items-center gap-2 text-[#E17285] text-xs font-semibold uppercase tracking-wider">
              <MapPin className="w-4 h-4" />
              <span>Artisan Roastery & Bar</span>
            </div>
            <h4 className="text-xl font-bold tracking-tight">Koramangala 4th Block</h4>
            <p className="text-xs text-white/70 leading-relaxed">
              80 Feet Rd, 4th Block, Koramangala, Bengaluru, KA 560034
            </p>
            <div className="flex items-center gap-2 text-xs text-white/60 pt-2 border-t border-white/5">
              <Clock className="w-3.5 h-3.5 text-[#E17285]" />
              <span>8:00 AM – 12:00 Midnight (Daily)</span>
            </div>
          </div>

          {/* Location 3 */}
          <div className="p-6 rounded-3xl bg-white/5 border border-white/10 space-y-3">
            <div className="flex items-center gap-2 text-[#E17285] text-xs font-semibold uppercase tracking-wider">
              <MapPin className="w-4 h-4" />
              <span>Terrace Garden Cafe</span>
            </div>
            <h4 className="text-xl font-bold tracking-tight">Bandra West, Mumbai</h4>
            <p className="text-xs text-white/70 leading-relaxed">
              Pali Hill Road, Bandra West, Mumbai, MH 400050
            </p>
            <div className="flex items-center gap-2 text-xs text-white/60 pt-2 border-t border-white/5">
              <Clock className="w-3.5 h-3.5 text-[#E17285]" />
              <span>7:30 AM – 11:00 PM (Daily)</span>
            </div>
          </div>
        </div>

        {/* Footer Brand Info & Links */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          {/* Logo & Tagline */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl overflow-hidden border border-white/25 shadow-xl flex-shrink-0">
                <img
                  src="/logos/acai-in-badge.png"
                  alt="AÇAI.IN — The Super Food"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="text-2xl font-bold tracking-[-0.03em] text-white">
                  AÇAI.IN
                </span>
                <span className="text-[10px] tracking-[0.25em] uppercase text-[#E17285] block font-medium mt-0.5">
                  The Super Food
                </span>
              </div>
            </div>

            <p className="text-xs text-white/70 max-w-sm leading-relaxed">
              Rooted in the pristine Amazonian rainforest. Roasted with Scandinavian Nordic discipline. Whisked with Japanese Kyoto ceremony.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors text-xs"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <span className="text-xs text-white/60">Follow @acai.in on Instagram</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h5 className="text-xs uppercase tracking-widest font-semibold text-[#E17285]">
              Quick Exploration
            </h5>
            <ul className="space-y-2 text-xs text-white/75">
              <li>
                <a href="#hero" className="hover:text-white transition-colors">
                  3D Product Experience
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-white transition-colors">
                  Full Beverage & Food Menu
                </a>
              </li>
              <li>
                <a href="#story" className="hover:text-white transition-colors">
                  Amazonian Sourcing Story
                </a>
              </li>
              <li>
                <a href="#ambience" className="hover:text-white transition-colors">
                  Cafe Ambience Gallery
                </a>
              </li>
              <li>
                <a href="#locations" className="hover:text-white transition-colors">
                  Find Nearest Cafe
                </a>
              </li>
            </ul>
          </div>

          {/* Dietary & Hours */}
          <div className="md:col-span-4 space-y-3">
            <h5 className="text-xs uppercase tracking-widest font-semibold text-[#E17285]">
              Purity & Care
            </h5>
            <p className="text-xs text-white/70 leading-relaxed">
              We cater to vegan, keto, high-protein, and gluten-sensitive diets. Plant-based oat, coconut, and almond milks available at zero extra charge for wellness creations.
            </p>
            <div className="pt-2 text-xs text-white/60 space-y-1">
              <div>Concierge: hello@acai.in</div>
              <div>Direct Phone: +91 (080) 4122-ACAI</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 gap-4">
          <div>
            © {new Date().getFullYear()} AÇAI.IN — The Super Food. All rights reserved.
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
