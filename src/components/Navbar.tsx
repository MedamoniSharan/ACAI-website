import React, { useState, useEffect } from 'react';
import { ShoppingBag, Search, Sparkles, MapPin, Menu, X, ArrowRight, Coffee, Heart, Clock } from 'lucide-react';
import { CartItem } from '../types';

interface NavbarProps {
  cart: CartItem[];
  onOpenCart: () => void;
  onOpenDIY: () => void;
  onSelectCategory: (cat: any) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cart,
  onOpenCart,
  onOpenDIY,
  onSelectCategory,
  searchQuery,
  setSearchQuery,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || mobileMenuOpen
            ? 'py-2.5 sm:py-3 bg-[#FAF7F2]/90 backdrop-blur-xl border-b border-[#4A0E17]/10 shadow-[0_4px_20px_rgb(0,0,0,0.03)]'
            : 'py-3.5 sm:py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2">
            {/* Logo */}
            <a
              href="#"
              className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none flex-shrink-0"
            >
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl overflow-hidden shadow-sm border border-[#4A0E17]/20 transition-transform group-hover:scale-105 duration-300 flex-shrink-0">
                <img
                  src="/logos/acai-in-badge.png"
                  alt="AÇAI.IN — The Super Food"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg sm:text-2xl font-bold tracking-[-0.03em] text-[#4A0E17] leading-none">
                  AÇAI.IN
                </span>
                <span className="text-[8px] sm:text-[9px] tracking-[0.22em] uppercase text-[#7E1C2E] font-semibold mt-0.5">
                  The Super Food
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-[#1d1d1f]/80">
              <button
                onClick={() => scrollTo('hero')}
                className="hover:text-[#4A0E17] transition-colors"
              >
                Featured
              </button>
              <button
                onClick={() => {
                  onSelectCategory('all');
                  scrollTo('menu');
                }}
                className="hover:text-[#4A0E17] transition-colors"
              >
                Menu & Drinks
              </button>
              <button
                onClick={() => onOpenDIY()}
                className="flex items-center gap-1.5 text-[#9B1E36] hover:text-[#4A0E17] font-semibold transition-colors"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] animate-spin-slow" />
                D.I.Y Bowl Builder
              </button>
              <button
                onClick={() => scrollTo('story')}
                className="hover:text-[#4A0E17] transition-colors"
              >
                Our Story
              </button>
              <button
                onClick={() => scrollTo('ambience')}
                className="hover:text-[#4A0E17] transition-colors"
              >
                Ambience
              </button>
              <button
                onClick={() => scrollTo('locations')}
                className="hover:text-[#4A0E17] transition-colors flex items-center gap-1"
              >
                <MapPin className="w-3.5 h-3.5 text-[#9B1E36]" />
                Locations
              </button>
            </nav>

            {/* Right Action Icons */}
            <div className="flex items-center gap-1.5 sm:gap-3">
              {/* Search Toggle */}
              <div className="relative">
                {searchOpen ? (
                  <div className="flex items-center bg-white/95 backdrop-blur-md border border-[#4A0E17]/20 rounded-full px-2.5 sm:px-3 py-1 sm:py-1.5 shadow-sm transition-all animate-fadeIn">
                    <Search className="w-3.5 h-3.5 text-[#4A0E17]/60 mr-1.5 flex-shrink-0" />
                    <input
                      type="text"
                      placeholder="Search menu..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="bg-transparent text-xs sm:text-sm text-[#4A0E17] placeholder-[#4A0E17]/40 outline-none w-24 xs:w-32 sm:w-48"
                      autoFocus
                    />
                    <button
                      onClick={() => {
                        setSearchOpen(false);
                        setSearchQuery('');
                      }}
                      className="text-[#4A0E17]/50 hover:text-[#4A0E17] text-xs ml-1 flex-shrink-0"
                    >
                      ✕
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => {
                      setSearchOpen(true);
                      scrollTo('menu');
                    }}
                    className="p-2 sm:p-2.5 rounded-full hover:bg-[#4A0E17]/5 text-[#4A0E17] transition-colors"
                    title="Search Menu"
                    aria-label="Search Menu"
                  >
                    <Search className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Order Now CTA (Desktop) */}
              <button
                onClick={() => scrollTo('menu')}
                className="hidden lg:flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#4A0E17] hover:bg-[#340910] text-white text-xs font-semibold tracking-wide uppercase transition-all shadow-md hover:shadow-lg hover:scale-[1.02] duration-200"
              >
                <span>Order Now</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              {/* Cart Drawer Trigger */}
              <button
                onClick={onOpenCart}
                className="relative p-2 sm:px-3 sm:py-2 rounded-full bg-white/85 border border-[#4A0E17]/15 hover:border-[#4A0E17]/40 text-[#4A0E17] shadow-xs hover:shadow transition-all flex items-center gap-1.5 group flex-shrink-0"
                aria-label="View shopping bag"
              >
                <div className="relative">
                  <ShoppingBag className="w-4 h-4 transition-transform group-hover:scale-110" />
                  {totalCartCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-[#9B1E36] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center animate-bounce">
                      {totalCartCount}
                    </span>
                  )}
                </div>
                <span className="hidden sm:inline text-xs font-semibold">
                  Bag ({totalCartCount})
                </span>
              </button>

              {/* Mobile menu hamburger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-full hover:bg-[#4A0E17]/5 text-[#4A0E17] flex-shrink-0"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Slide Menu Drawer (Apple Style) */}
        {mobileMenuOpen && (
          <div className="md:hidden px-4 pt-4 pb-6 bg-[#FAF7F2]/98 backdrop-blur-2xl border-b border-[#4A0E17]/10 space-y-2 animate-fadeIn max-h-[85vh] overflow-y-auto">
            <button
              onClick={() => scrollTo('hero')}
              className="w-full text-left px-4 py-3 rounded-2xl hover:bg-[#4A0E17]/5 text-base font-semibold text-[#1d1d1f] flex items-center justify-between"
            >
              <span>Featured Specials</span>
              <ArrowRight className="w-4 h-4 text-[#4A0E17]/40" />
            </button>

            <button
              onClick={() => {
                onSelectCategory('all');
                scrollTo('menu');
              }}
              className="w-full text-left px-4 py-3 rounded-2xl hover:bg-[#4A0E17]/5 text-base font-semibold text-[#1d1d1f] flex items-center justify-between"
            >
              <span>Full Menu & Drinks</span>
              <span className="text-xs font-medium text-[#4A0E17]/60 bg-[#4A0E17]/5 px-2 py-0.5 rounded-full">
                31 Items
              </span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDIY();
              }}
              className="w-full text-left px-4 py-3 rounded-2xl bg-[#9B1E36]/10 text-base font-semibold text-[#9B1E36] flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                <span>Build Custom D.I.Y Bowl</span>
              </div>
              <span className="text-xs font-bold text-[#9B1E36]">Step-by-Step →</span>
            </button>

            <button
              onClick={() => scrollTo('story')}
              className="w-full text-left px-4 py-3 rounded-2xl hover:bg-[#4A0E17]/5 text-base font-semibold text-[#1d1d1f] flex items-center justify-between"
            >
              <span>Our Philosophy</span>
              <ArrowRight className="w-4 h-4 text-[#4A0E17]/40" />
            </button>

            <button
              onClick={() => scrollTo('ambience')}
              className="w-full text-left px-4 py-3 rounded-2xl hover:bg-[#4A0E17]/5 text-base font-semibold text-[#1d1d1f] flex items-center justify-between"
            >
              <span>Cafe Ambience Gallery</span>
              <ArrowRight className="w-4 h-4 text-[#4A0E17]/40" />
            </button>

            <button
              onClick={() => scrollTo('locations')}
              className="w-full text-left px-4 py-3 rounded-2xl hover:bg-[#4A0E17]/5 text-base font-semibold text-[#1d1d1f] flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#9B1E36]" />
                <span>Cafe Locations & Hours</span>
              </div>
              <span className="text-xs text-[#4A0E17]/60">3 Cafes</span>
            </button>

            {/* Quick Mobile Order Button */}
            <div className="pt-3 border-t border-[#4A0E17]/10">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  scrollTo('menu');
                }}
                className="w-full py-3.5 rounded-full bg-[#4A0E17] text-white text-sm font-semibold tracking-wide flex items-center justify-center gap-2 shadow-md"
              >
                <span>Order Online Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
