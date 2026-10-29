import React, { useState } from 'react';
import { Coffee, Sparkles, Check } from 'lucide-react';
import confetti from 'canvas-confetti';

export const StoryAmbience: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.8 },
      });
    }
  };

  return (
    <section id="story" className="py-14 sm:py-20 lg:py-28 relative bg-[#F4EFE6]/70">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 space-y-12 sm:space-y-20">
        {/* Story Section Header inspired by Beanona / Aromé */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4A0E17]/5 border border-[#4A0E17]/10 text-xs font-semibold text-[#4A0E17] uppercase tracking-wider">
              <span>Our Philosophy</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-[-0.03em] text-[#1d1d1f] leading-[1.12]">
              A Cozy Sanctuary for <br />
              <span className="text-[#9B1E36]">
                Superfoods & Great Souls.
              </span>
            </h2>
            <p className="text-sm sm:text-base text-[#4A0E17]/75 font-normal leading-relaxed">
              AÇAI.IN was born from a simple belief: that eating clean should feel like pure indulgence. We set out to pair nature’s most antioxidant-dense superberry with the world’s most nuanced specialty coffees and ceremonial teas.
            </p>
            <p className="text-xs sm:text-sm text-[#4A0E17]/70 font-light leading-relaxed">
              Whether you are here for a post-workout Power Bomb smoothie, an afternoon velvet flat white, or a quiet corner with your laptop and a warm molten cookie, we craft each recipe as an invitation to slow down and savor life.
            </p>

            {/* Pillar Grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-2 sm:pt-4">
              <div className="p-3.5 sm:p-4 rounded-2xl bg-white/70 border border-[#4A0E17]/10">
                <Coffee className="w-4 h-4 sm:w-5 sm:h-5 text-[#9B1E36] mb-1.5" />
                <div className="font-semibold text-xs sm:text-sm text-[#221B19]">100% Arabica</div>
                <div className="text-[11px] sm:text-xs text-[#4A0E17]/70 mt-0.5">Direct trade estate beans</div>
              </div>

              <div className="p-3.5 sm:p-4 rounded-2xl bg-white/70 border border-[#4A0E17]/10">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4AF37] mb-1.5" />
                <div className="font-semibold text-xs sm:text-sm text-[#221B19]">Wild Açaí Pulp</div>
                <div className="text-[11px] sm:text-xs text-[#4A0E17]/70 mt-0.5">Flash-frozen Amazonian</div>
              </div>
            </div>
          </div>

          {/* Right Images Collage */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-3 sm:gap-4 relative">
            <div className="space-y-3 sm:space-y-4">
              <div className="h-48 sm:h-64 rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80"
                  alt="Cafe Interior"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="h-44 rounded-3xl overflow-hidden shadow-lg bg-[#4A0E17] p-6 text-white flex flex-col justify-between">
                <div className="text-xs uppercase tracking-widest text-[#E17285] font-semibold">
                  Good Coffee Good Mood
                </div>
                <div className="text-xl font-bold tracking-tight">
                  "The best açaí bowl experience in town."
                </div>
              </div>
            </div>

            <div className="space-y-4 pt-8">
              <div className="h-44 rounded-3xl overflow-hidden shadow-lg bg-[#1E382B] p-6 text-white flex flex-col justify-between">
                <div className="text-xs uppercase tracking-widest text-[#8AA878] font-semibold">
                  Freshly Blended
                </div>
                <div className="text-2xl font-bold tracking-tight">
                  Zero Preservatives. Zero Guilt.
                </div>
              </div>
              <div className="h-64 rounded-3xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80"
                  alt="Barista Pouring Coffee"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Ambience & Atmosphere Gallery */}
        <div id="ambience" className="space-y-8 pt-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="text-2xl sm:text-4xl font-bold tracking-[-0.02em] text-[#1d1d1f]">
              Designed for Comfort & Connection
            </h3>
            <p className="text-sm text-[#4A0E17]/70">
              Sunlight, lush tropical botanicals, handcrafted walnut tables, and the soothing hum of our espresso bar.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {[
              {
                title: 'Handcrafted Espresso Bar',
                img: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=600&q=80',
              },
              {
                title: 'Cozy Reading Nooks',
                img: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=600&q=80',
              },
              {
                title: 'Artisanal Bowl Station',
                img: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=600&q=80',
              },
              {
                title: 'Outdoor Garden Terrace',
                img: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=600&q=80',
              },
            ].map((spot, i) => (
              <div
                key={i}
                className="group relative h-40 sm:h-64 rounded-2xl sm:rounded-3xl overflow-hidden shadow-xs sm:shadow-md"
              >
                <img
                  src={spot.img}
                  alt={spot.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-105"
                />
                <div className="absolute bottom-0 inset-x-0 h-16 sm:h-20 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
                <div className="absolute bottom-2.5 sm:bottom-4 left-2.5 sm:left-4 right-2.5 sm:right-4">
                  <span className="text-[11px] sm:text-xs font-semibold text-white tracking-wide line-clamp-1">
                    {spot.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Special Offer Newsletter Box */}
        <div className="rounded-[1.75rem] sm:rounded-3xl bg-white border border-[#4A0E17]/15 p-5 sm:p-12 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
          <div className="space-y-1.5 sm:space-y-2 text-center md:text-left">
            <span className="text-[11px] sm:text-xs uppercase tracking-widest text-[#9B1E36] font-bold">
              Special Cafe Welcome
            </span>
            <h3 className="text-2xl sm:text-4xl font-bold tracking-[-0.02em] text-[#1d1d1f]">
              Enjoy 20% Off Your First Order
            </h3>
            <p className="text-xs sm:text-sm text-[#4A0E17]/70 max-w-md">
              Sign up today and receive an instant 20% welcome discount voucher for your dine-in or takeaway order.
            </p>
          </div>

          <form
            onSubmit={handleSubscribe}
            className="w-full md:w-auto flex-1 max-w-md"
          >
            {subscribed ? (
              <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-[#4A0E17]/5 border border-[#4A0E17]/20 text-[#4A0E17] flex items-center gap-3">
                <Check className="w-5 h-5 text-[#9B1E36] flex-shrink-0" />
                <div className="text-xs font-semibold">
                  Welcome code <span className="font-mono bg-white px-2 py-0.5 rounded border">SUPER20</span> activated!
                </div>
              </div>
            ) : (
              <div className="flex flex-col sm:flex-row gap-2.5">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 sm:px-5 py-3 rounded-full bg-[#FAF7F2] border border-[#4A0E17]/20 text-xs sm:text-sm text-[#221B19] placeholder-[#4A0E17]/40 outline-none focus:border-[#4A0E17]"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#4A0E17] hover:bg-[#32070e] text-white text-xs sm:text-sm font-semibold tracking-wide transition-colors whitespace-nowrap shadow-md text-center"
                >
                  Get 20% Off
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
