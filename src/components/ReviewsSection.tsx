import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    id: 1,
    name: 'Sarah Khan',
    role: 'Nutritionist & Daily Regular',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    text: 'AÇAI.IN is hands down the best bowl in town! You can tell instantly that they use 100% pure Amazonian açaí with zero added sugar syrup. Paired with their flat white, it’s my absolute daily morning routine.',
    favorite: 'Classic Açaí Cream + Flat White',
  },
  {
    id: 2,
    name: 'Arjun Mehta',
    role: 'Product Designer',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    text: 'The ambience is pure Apple elegance — minimalist, warm wooden textures, and lush greens. The Strawberry Matcha Latte and Molten Nutella Cookie are works of edible art.',
    favorite: 'Strawberry Matcha + Nutella Cookie',
  },
  {
    id: 3,
    name: 'Ananya Sharma',
    role: 'Fitness Coach & Athlete',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    text: 'As someone meticulous about macronutrients, the Power Bomb smoothie with 24g whey and raw peanut butter is unrivaled. Clean, deeply filling, and naturally delicious.',
    favorite: 'Power Bomb Smoothie',
  },
];

export const ReviewsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section className="py-14 sm:py-20 lg:py-28 bg-[#14271E] text-white relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#4A0E17]/25 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-end justify-between mb-8 sm:mb-12 gap-4">
          <div className="space-y-1.5 sm:space-y-2">
            <span className="text-[11px] sm:text-xs uppercase tracking-widest text-[#8AA878] font-semibold">
              Guest Experiences
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.03em]">
              Real People. Real Moments.
            </h2>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <button
              onClick={prev}
              className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/10 hover:bg-white hover:text-[#14271E] text-white flex items-center justify-center transition-all border border-white/15"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button
              onClick={next}
              className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/10 hover:bg-white hover:text-[#14271E] text-white flex items-center justify-center transition-all border border-white/15"
              aria-label="Next review"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>

        {/* Big Review Spotlight Card */}
        <div className="rounded-[1.75rem] sm:rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-5 sm:p-12 relative">
          <Quote className="w-8 h-8 sm:w-12 sm:h-12 text-[#8AA878]/30 mb-4 sm:mb-6" />

          <p className="text-base sm:text-2xl lg:text-3xl leading-relaxed font-normal text-white/95 mb-6 sm:mb-8 tracking-[-0.015em]">
            "{current.text}"
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-5 sm:pt-6 border-t border-white/10">
            <div className="flex items-center gap-4">
              <img
                src={current.avatar}
                alt={current.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-[#8AA878]"
              />
              <div>
                <h4 className="font-bold text-base text-white">{current.name}</h4>
                <p className="text-xs text-white/60">{current.role}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-right hidden sm:block">
                <span className="text-[11px] text-white/60 block">Regular Order:</span>
                <span className="text-xs font-semibold text-[#8AA878]">
                  {current.favorite}
                </span>
              </div>
              <div className="flex items-center gap-1 text-[#D4AF37]">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
