import React, { useState } from 'react';
import { Check } from 'lucide-react';
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
        <div id="about" className="mx-auto max-w-2xl space-y-3 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#9B1E36]">About</p>
          <h2 className="text-3xl font-bold tracking-tight text-[#1d1d1f] sm:text-4xl">
            Real nourishment, no shortcuts.
          </h2>
          <p className="text-sm leading-relaxed text-[#4A0E17]/75">
            AÇAI.IN uses 100% pure açaí purée with zero refined sugar and no artificial sweeteners. Bowls are fully custom, and available on Swiggy, Zomato, and offline in Kokapet and Worli.
          </p>
        </div>

        {/* Ambience & Atmosphere Gallery */}
        <div id="ambience" className="space-y-8 pt-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="text-2xl sm:text-4xl font-bold tracking-[-0.02em] text-[#1d1d1f]">
              Gallery
            </h3>
            <p className="text-sm text-[#4A0E17]/70">
              Sunlight, lush tropical botanicals, handcrafted walnut tables, and the soothing hum of our espresso bar.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {[
              {
                title: 'Cozy Reading Nooks',
                img: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=600&q=80',
              },
              {
                title: 'Artisanal Bowl Station',
                img: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=600&q=80',
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
