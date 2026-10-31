import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { CartItem } from '../types';

interface NavbarProps {
  cart: CartItem[];
  onOpenCart: () => void;
  onOpenDIY: () => void;
  onOpenAcai: () => void;
  onNavigate: (target: 'home' | 'menu' | 'gallery' | 'contact') => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cart,
  onOpenCart,
  onOpenAcai,
  onNavigate,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 border-b border-[#4A0E17]/10 bg-[#fff8ee]/95 backdrop-blur-md transition-all ${
          scrolled || mobileMenuOpen ? 'py-2.5 shadow-sm' : 'py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2">
            {/* Logo */}
            <button
              type="button"
              onClick={() => onNavigate('home')}
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
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-[#1d1d1f]/80">
              <button onClick={() => onNavigate('home')} className="hover:text-[#4A0E17] transition-colors">
                Home
              </button>
              <button onClick={() => onNavigate('menu')} className="hover:text-[#4A0E17] transition-colors">
                Menu
              </button>
              <button onClick={onOpenAcai} className="hover:text-[#4A0E17] transition-colors">
                What is Açaí
              </button>
              <button onClick={() => onNavigate('gallery')} className="hover:text-[#4A0E17] transition-colors">
                Gallery
              </button>
              <button onClick={() => onNavigate('contact')} className="hover:text-[#4A0E17] transition-colors">
                Contact
              </button>
            </nav>

            {/* Right Action Icons */}
            <div className="flex items-center gap-1.5 sm:gap-3">
              <button
                onClick={onOpenCart}
                className="relative flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#4A0E17] text-white shadow-md transition hover:bg-[#340910]"
                aria-label="View shopping bag"
              >
                <ShoppingBag className="h-4 w-4" />
                {totalCartCount > 0 && (
                  <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#D4AF37] text-[10px] font-bold text-[#2D060C]">
                    {totalCartCount}
                  </span>
                )}
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
            {[
              ['Home', 'hero'],
              ['Menu', 'menu'],
              ['What is Açaí', 'acai'],
              ['Gallery', 'ambience'],
              ['Contact', 'locations'],
            ].map(([label, id]) => (
              <button
                key={id}
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (id === 'acai') {
                    onOpenAcai();
                    return;
                  }
                  const target = id === 'hero' ? 'home' : id === 'menu' ? 'menu' : id === 'ambience' ? 'gallery' : 'contact';
                  onNavigate(target);
                }}
                className="w-full rounded-2xl px-4 py-3 text-left text-base font-semibold text-[#1d1d1f] hover:bg-[#4A0E17]/5"
              >
                {label}
              </button>
            ))}
          </div>
        )}
      </header>
    </>
  );
};
