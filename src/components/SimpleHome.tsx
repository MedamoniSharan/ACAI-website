import React from 'react';
import { Leaf, Coffee, Cookie, Flame } from 'lucide-react';
import { Category } from '../types';

interface SimpleHomeProps {
  onSelectCategory: (cat: Category) => void;
}

const CATEGORY_CARDS: { id: Category; title: string; image: string }[] = [
  { id: 'bowls', title: 'Açaí Bowls', image: '/menu/classical-acai-bowl.jpg' },
  { id: 'smoothies', title: 'Smoothies', image: '/menu/classic-acai-cream.jpg' },
  { id: 'coffee', title: 'Coffee', image: '/menu/latte.jpg' },
  { id: 'matcha-ube', title: 'Matcha & Ube', image: '/menu/strawberry-matcha-latte.jpg' },
  { id: 'tiramisu', title: 'Tiramisu', image: '/menu/acai-tiramisu.jpg' },
  { id: 'cookies', title: 'Cookies', image: '/menu/nutella-cookie.jpg' },
];

const PROMISES = [
  { icon: Leaf, title: 'Zero Dilution', text: 'Wild açaí pulp. No filler syrups.' },
  { icon: Coffee, title: '18-Hour Brew', text: 'Single-origin coffee, steeped cold.' },
  { icon: Cookie, title: 'Baked Daily', text: 'Cookies and tiramisu made in house.' },
  { icon: Flame, title: 'Real Ingredients', text: 'Ceremonial matcha and fresh fruit.' },
];

export const SimpleHome: React.FC<SimpleHomeProps> = ({ onSelectCategory }) => {
  return (
    <>
      <section className="bg-[#FAF7F2] py-14 text-center lg:py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#9B1E36]">Made with care</p>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#1d1d1f] sm:text-3xl">Fresh, simple, and made to order.</h2>
        <p className="mx-auto mt-3 max-w-xl text-sm text-[#4A0E17]/70">
          Small batches. Straight recipes. The same bowl, cup, and cookie every visit.
        </p>
      </section>

      <section className="bg-[#FAF7F2] pb-16 lg:pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.22em] text-[#9B1E36]">Our menu</p>
          <h2 className="mt-2 text-center text-3xl font-bold tracking-tight text-[#1d1d1f] sm:text-4xl">Explore Categories</h2>
          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3">
            {CATEGORY_CARDS.map((card) => (
              <button
                key={card.id}
                onClick={() => onSelectCategory(card.id)}
                className="group overflow-hidden rounded-3xl bg-white text-left shadow-sm"
              >
                <div className="h-36 overflow-hidden sm:h-44">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center justify-between px-4 py-3">
                  <span className="text-sm font-semibold text-[#1d1d1f]">{card.title}</span>
                  <span className="text-xs font-medium text-[#9B1E36]">Browse</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.22em] text-[#9B1E36]">Why AÇAI.IN</p>
          <h2 className="mt-2 text-center text-3xl font-bold tracking-tight text-[#1d1d1f] sm:text-4xl">The AÇAI.IN Promise</h2>
          <div className="mt-10 grid grid-cols-2 gap-6 lg:grid-cols-4">
            {PROMISES.map((item) => (
              <div key={item.title} className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#4A0E17]/10 text-[#4A0E17]">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-3 text-sm font-semibold text-[#1d1d1f]">{item.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-[#4A0E17]/70">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
