import React, { useState } from 'react';
import { ArrowRight, Sparkles, Star, Plus, ShieldCheck, Heart, Coffee, Leaf } from 'lucide-react';
import { Product, CartItem } from '../types';

interface HeroCleanProps {
  onExploreMenu: () => void;
  onOpenDIY: () => void;
  onAddToCart: (item: CartItem) => void;
}

interface HeroHighlight {
  id: string;
  badge: string;
  tagline: string;
  title: string;
  subtitle: string;
  price: number;
  calories: string;
  rating: number;
  reviews: number;
  image: string;
  accentBg: string;
  accentText: string;
  notes: string[];
  productData: Product;
}

const HERO_HIGHLIGHTS: HeroHighlight[] = [
  {
    id: 'classic-acai',
    badge: 'Signature Superfood',
    tagline: '100% Wild Amazonian Pulp',
    title: 'Pure Açaí. Zero Dilution.',
    subtitle: 'Wild-harvested organic Amazonian açaí blended with sun-ripened strawberries, banana, and oat milk. Dense, velvety, and deeply antioxidant-rich.',
    price: 329,
    calories: '280 kcal',
    rating: 4.9,
    reviews: 142,
    image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=1200&q=85',
    accentBg: '#4A0E17',
    accentText: '#F5CED3',
    notes: ['Organic Pará Açaí', '0g Refined Sugars', 'Omega 3, 6 & 9'],
    productData: {
      id: 'classic-acai-cream',
      name: 'Classic Açaí Cream',
      category: 'smoothies',
      categoryLabel: 'Açaí & Smoothies',
      price: 329,
      description: 'Wild-harvested organic Amazonian açaí blended with sweet sun-ripened strawberries and fresh oat milk.',
      ingredients: ['Pure Amazonian Açaí', 'Fresh Strawberries', 'Oat Milk', 'Organic Banana'],
      image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=800&q=80',
      calories: '280 kcal',
      prepTime: '4 mins',
      rating: 4.9,
      reviewCount: 142,
    }
  },
  {
    id: 'cold-brew',
    badge: '18-Hour Slow Extraction',
    tagline: 'Single Origin Arabica',
    title: 'Cranberry Cold Brew.',
    subtitle: 'Slow-steeped cold for 18 hours at 4°C, infused with tart cranberry reduction and aromatic fresh rosemary. Silky, crisp, with 67% less acidity.',
    price: 229,
    calories: '45 kcal',
    rating: 4.9,
    reviews: 114,
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=1200&q=85',
    accentBg: '#1B2E24',
    accentText: '#B4D79D',
    notes: ['Single Origin Estate', '18h Cold Steep', 'Zero Bitterness'],
    productData: {
      id: 'cranberry-cold-brew',
      name: 'Cranberry Cold Brew',
      category: 'cold-brew',
      categoryLabel: 'Cold Brew',
      price: 229,
      description: 'Slow-steeped 18-hour cold brew infused with tart cranberry reduction, a splash of tonic, and fresh rosemary sprig aroma.',
      ingredients: ['18h Cold Brew', 'Cranberry Reduction', 'Rosemary', 'Tonic'],
      image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=800&q=80',
      calories: '45 kcal',
      prepTime: '2 mins',
      rating: 4.9,
      reviewCount: 114,
    }
  },
  {
    id: 'matcha-cloud',
    badge: 'First Harvest Kyoto',
    tagline: 'Ceremonial Shade-Grown Uji',
    title: 'Cloud Coconut Matcha.',
    subtitle: 'Crisp chilled pure coconut water crowned with a velvety, whipped ceremonial Kyoto matcha cold foam cloud. Ultra-hydrating and vibrantly energizing.',
    price: 319,
    calories: '110 kcal',
    rating: 5.0,
    reviews: 201,
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1200&q=85',
    accentBg: '#233816',
    accentText: '#E6F0DE',
    notes: ['Ceremonial Kyoto', 'Stone Ground', 'L-Theanine Clean Energy'],
    productData: {
      id: 'cloud-matcha',
      name: 'Cloud Matcha / Coconut Clear',
      category: 'matcha',
      categoryLabel: 'Matcha & Ube',
      price: 319,
      description: 'Crisp, chilled pure coconut water base topped with a floating, whipped emerald matcha cold cream cloud.',
      ingredients: ['Chilled Tender Coconut Water', 'Whipped Matcha Cold Foam', 'Ice'],
      image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80',
      calories: '110 kcal',
      prepTime: '4 mins',
      rating: 5.0,
      reviewCount: 201,
    }
  },
  {
    id: 'molten-cookie',
    badge: 'Freshly Baked Hourly',
    tagline: 'Artisanal French Butter',
    title: 'Molten Nutella Cookie.',
    subtitle: 'Golden browned butter cookie dough with crisp edges and a warm lava center of pure Italian hazelnut Nutella, finished with Maldon sea salt.',
    price: 179,
    calories: '340 kcal',
    rating: 5.0,
    reviews: 220,
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=1200&q=85',
    accentBg: '#3E2415',
    accentText: '#E5CAAB',
    notes: ['Browned French Butter', 'Molten Nutella Lava', 'Flaky Maldon Salt'],
    productData: {
      id: 'nutella-cookie',
      name: 'Nutella Stuffed Cookie',
      category: 'cookies',
      categoryLabel: 'Artisanal Cookies',
      price: 179,
      description: 'Golden baked browned butter dough with crisp edges and a warm molten core of creamy Italian Nutella hazelnut chocolate.',
      ingredients: ['Brown Butter Dough', 'Molten Nutella Core', 'Maldon Flaky Sea Salt'],
      image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=800&q=80',
      calories: '340 kcal',
      prepTime: 'Freshly Baked',
      rating: 5.0,
      reviewCount: 220,
    }
  }
];

export const HeroClean: React.FC<HeroCleanProps> = ({
  onExploreMenu,
  onOpenDIY,
  onAddToCart,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const current = HERO_HIGHLIGHTS[activeIndex];

  const handleQuickAdd = () => {
    onAddToCart({
      cartId: `hero-cart-${current.id}-${Date.now()}`,
      product: current.productData,
      quantity: 1,
      selectedOptions: {},
      unitPrice: current.price,
      totalPrice: current.price,
    });
  };

  return (
    <section className="pt-20 pb-10 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        {/* Apple-Style Master Card Container */}
        <div
          className="relative rounded-[1.75rem] sm:rounded-[2.5rem] overflow-hidden text-white transition-colors duration-700 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.18)] border border-white/10"
          style={{ backgroundColor: current.accentBg }}
        >
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute -top-32 -right-32 w-[550px] h-[550px] bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-[450px] h-[450px] bg-black/25 rounded-full blur-3xl pointer-events-none" />

          {/* Top Bar inside Card: Showcase Category Selector */}
          <div className="relative z-20 px-4 sm:px-10 pt-5 sm:pt-10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 border-b border-white/10 pb-4 sm:pb-6">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg overflow-hidden border border-white/30 shadow-sm flex-shrink-0">
                <img
                  src="/logos/acai-in-badge.png"
                  alt="AÇAI.IN"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-white/90">
                AÇAI.IN Curated Showcase
              </span>
            </div>

            {/* Apple-style pill selector */}
            <div className="flex items-center gap-1.5 p-1 rounded-full bg-black/30 backdrop-blur-xl border border-white/15 overflow-x-auto no-scrollbar max-w-full">
              {HERO_HIGHLIGHTS.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`px-3 sm:px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-semibold transition-all whitespace-nowrap flex-shrink-0 ${
                    activeIndex === idx
                      ? 'bg-white text-[#1d1d1f] shadow-md'
                      : 'text-white/75 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.badge}
                </button>
              ))}
            </div>
          </div>

          {/* Hero Grid Body */}
          <div className="relative z-10 px-4 sm:px-10 py-8 sm:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-5 sm:space-y-8">
              {/* Pill badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-[11px] sm:text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-[#F5CED3] flex-shrink-0" />
                <span style={{ color: current.accentText }}>{current.tagline}</span>
              </div>

              {/* Bold Apple-style Headline */}
              <div className="space-y-2.5 sm:space-y-3">
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.03em] leading-[1.08] text-white">
                  {current.title}
                </h1>
                <p className="text-sm sm:text-lg text-white/80 font-normal leading-relaxed max-w-xl">
                  {current.subtitle}
                </p>
              </div>

              {/* Tasting Notes Pills */}
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 pt-1">
                {current.notes.map((note, i) => (
                  <span
                    key={i}
                    className="px-2.5 sm:px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-[11px] sm:text-xs text-white/90 font-medium"
                  >
                    ✓ {note}
                  </span>
                ))}
              </div>

              {/* Price & Rating Bar */}
              <div className="flex items-center justify-between sm:justify-start gap-3 sm:gap-6 pt-1 sm:pt-2 border-y sm:border-y-0 border-white/10 py-3 sm:py-0">
                <div>
                  <span className="text-[10px] sm:text-xs uppercase tracking-wider text-white/60 block">
                    Price
                  </span>
                  <span className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    ₹{current.price}
                  </span>
                </div>
                <div className="h-7 sm:h-9 w-px bg-white/20" />
                <div>
                  <span className="text-[10px] sm:text-xs uppercase tracking-wider text-white/60 block">
                    Calories
                  </span>
                  <span className="text-base sm:text-lg font-semibold text-white/95">
                    {current.calories}
                  </span>
                </div>
                <div className="h-7 sm:h-9 w-px bg-white/20" />
                <div>
                  <span className="text-[10px] sm:text-xs uppercase tracking-wider text-white/60 block">
                    Rating
                  </span>
                  <div className="flex items-center gap-1 text-xs sm:text-sm font-semibold text-[#FFD700]">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span>{current.rating}</span>
                    <span className="text-[10px] sm:text-xs text-white/60 font-normal">
                      ({current.reviews})
                    </span>
                  </div>
                </div>
              </div>

              {/* Primary Actions (Mobile optimized full-width stacking) */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2 sm:pt-4">
                <button
                  onClick={handleQuickAdd}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white hover:bg-[#FAF7F2] text-[#1d1d1f] font-semibold text-sm tracking-tight flex items-center justify-center gap-2.5 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <Plus className="w-4 h-4 text-[#4A0E17]" />
                  <span>Order Now • ₹{current.price}</span>
                </button>

                <button
                  onClick={onOpenDIY}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white/15 hover:bg-white/25 text-white border border-white/25 font-semibold text-sm tracking-tight flex items-center justify-center gap-2 backdrop-blur-md hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <Sparkles className="w-4 h-4 text-[#FFD700]" />
                  <span>Custom D.I.Y Bowl</span>
                </button>

                <button
                  onClick={onExploreMenu}
                  className="text-xs text-white/80 hover:text-white font-medium flex items-center justify-center gap-1.5 py-1 transition-colors"
                >
                  <span>View All 31 Items</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right Product Showcase Column */}
            <div className="lg:col-span-6 relative flex items-center justify-center">
              <div className="relative w-full max-w-lg aspect-[4/3] sm:aspect-square rounded-2xl sm:rounded-[2rem] overflow-hidden shadow-2xl border-2 border-white/30 group">
                <img
                  src={current.image}
                  alt={current.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 brightness-105 contrast-105"
                />

                {/* Light bottom gradient only behind caption */}
                <div className="absolute bottom-0 inset-x-0 h-28 sm:h-32 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />

                {/* Apple-style floating caption stamp */}
                <div className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6 right-3 sm:right-6 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-black/45 backdrop-blur-xl border border-white/25 text-white flex items-center justify-between">
                  <div>
                    <div className="text-[10px] sm:text-xs font-semibold tracking-wider uppercase text-white/70">
                      Real Harvest • Real Moments
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-white mt-0.5 line-clamp-1">
                      {current.productData.name}
                    </div>
                  </div>
                  <button
                    onClick={handleQuickAdd}
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white text-[#1d1d1f] hover:bg-[#F5CED3] flex items-center justify-center transition-colors shadow-md flex-shrink-0 ml-2"
                    title="Add to Bag"
                    aria-label="Add to Bag"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Apple 4-Column Clean Feature Band (Mobile 2x2 grid) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 mt-6 sm:mt-8">
          <div className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-white/80 border border-black/[0.06] shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-[#4A0E17]/10 flex items-center justify-center text-[#4A0E17] mb-2.5">
              <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-[#1d1d1f] tracking-tight">
                100% Wild Amazonian
              </h4>
              <p className="text-[11px] sm:text-xs text-[#86868b] mt-0.5 sm:mt-1 font-normal leading-relaxed">
                Organic açaí pulp from Pará. Zero filler syrups.
              </p>
            </div>
          </div>

          <div className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-white/80 border border-black/[0.06] shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-[#1B2E24]/10 flex items-center justify-center text-[#1B2E24] mb-2.5">
              <Coffee className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-[#1d1d1f] tracking-tight">
                Fresh Daily Brews
              </h4>
              <p className="text-[11px] sm:text-xs text-[#86868b] mt-0.5 sm:mt-1 font-normal leading-relaxed">
                Specialty Arabica steeped 18 hours cold.
              </p>
            </div>
          </div>

          <div className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-white/80 border border-black/[0.06] shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-[#233816]/10 flex items-center justify-center text-[#233816] mb-2.5">
              <Leaf className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-[#1d1d1f] tracking-tight">
                Ceremonial Kyoto
              </h4>
              <p className="text-[11px] sm:text-xs text-[#86868b] mt-0.5 sm:mt-1 font-normal leading-relaxed">
                Shade-grown Uji tea whisked with cloud foam.
              </p>
            </div>
          </div>

          <div className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-white/80 border border-black/[0.06] shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-[#D4AF37]/15 flex items-center justify-center text-[#C6923C] mb-2.5">
              <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-[#1d1d1f] tracking-tight">
                5,000+ Happy Guests
              </h4>
              <p className="text-[11px] sm:text-xs text-[#86868b] mt-0.5 sm:mt-1 font-normal leading-relaxed">
                4.9★ verified average across sanctuaries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
