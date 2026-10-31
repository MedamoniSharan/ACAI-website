import React from 'react';
import { MapPin, Instagram, ArrowUp } from 'lucide-react';

interface LocationFooterProps {
  onOpenAcai: () => void;
  onNavigate: (target: 'home' | 'menu' | 'gallery' | 'contact') => void;
}

export const LocationFooter: React.FC<LocationFooterProps> = ({ onOpenAcai, onNavigate }) => {
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
          <div className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white/5 border border-white/10 space-y-2.5 sm:space-y-3">
            <div className="flex items-center gap-2 text-[#E17285] text-xs font-semibold uppercase tracking-wider">
              <MapPin className="w-4 h-4" />
              <span>Hyderabad</span>
            </div>
            <h4 className="text-xl font-bold tracking-tight">Kokapet</h4>
            <p className="text-xs text-white/70 leading-relaxed">
              Offline bowls, built the way you like them.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white/5 border border-white/10 space-y-3">
            <div className="flex items-center gap-2 text-[#E17285] text-xs font-semibold uppercase tracking-wider">
              <MapPin className="w-4 h-4" />
              <span>Mumbai</span>
            </div>
            <h4 className="text-xl font-bold tracking-tight">Worli</h4>
            <p className="text-xs text-white/70 leading-relaxed">
              Offline bowls, built the way you like them.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white/5 border border-white/10 space-y-3">
            <div className="flex items-center gap-2 text-[#E17285] text-xs font-semibold uppercase tracking-wider">
              <span>Order in</span>
            </div>
            <h4 className="text-xl font-bold tracking-tight">Swiggy & Zomato</h4>
            <p className="text-xs text-white/70 leading-relaxed">
              The same custom bowls, delivered.
            </p>
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
              100% pure açaí purée. Zero refined sugar. No artificial sweeteners. Predominantly vegan, sugar-free, and gluten-free.
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
                <button onClick={() => onNavigate('home')} className="hover:text-white transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('menu')} className="hover:text-white transition-colors">
                  Menu
                </button>
              </li>
              <li>
                <button onClick={onOpenAcai} className="hover:text-white transition-colors">
                  What is Açaí
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('gallery')} className="hover:text-white transition-colors">
                  Gallery
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors">
                  Kokapet & Worli
                </button>
              </li>
            </ul>
          </div>

          {/* Dietary & Hours */}
          <div className="md:col-span-4 space-y-3">
            <h5 className="text-xs uppercase tracking-widest font-semibold text-[#E17285]">
              Purity & Care
            </h5>
            <p className="text-xs text-white/70 leading-relaxed">
              Predominantly vegan, sugar-free, and gluten-free. Zero refined sugar and no artificial sweeteners.
            </p>
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
