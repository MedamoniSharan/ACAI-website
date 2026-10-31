import React from 'react';
import { CartItem } from '../types';

interface HeroCleanProps {
  onExploreMenu: () => void;
  onOpenDIY: () => void;
  onOpenAcai: () => void;
  onAddToCart: (item: CartItem) => void;
}

const BENEFITS = ['Rich in antioxidants', 'Vegan', 'Zero refined sugar'];

export const HeroClean: React.FC<HeroCleanProps> = ({
  onExploreMenu,
  onOpenDIY,
  onOpenAcai,
}) => {
  return (
    <section id="hero" className="overflow-hidden bg-[#FAF7F2] pb-14 pt-28 sm:pb-20">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-8">
        <div>
          <p className="mb-5 inline-flex w-fit items-center rounded-full border border-[#4A0E17]/15 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#9B1E36]">
            100% pure açaí
          </p>
          <h1 className="max-w-xl text-[2.6rem] font-bold leading-[1.05] tracking-[-0.04em] text-[#1d1d1f] sm:text-6xl">
            Açaí, as authentic as it gets.
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-[#4A0E17]/80">
            100% organic açaí, straight from the Amazon. Bowls built to order, with real fruit and no shortcuts.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              onClick={onExploreMenu}
              className="rounded-full bg-[#4A0E17] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#340910]"
            >
              Order Now
            </button>
            <button
              onClick={onOpenAcai}
              className="rounded-full border border-[#4A0E17]/20 bg-white px-6 py-3 text-sm font-semibold text-[#4A0E17] transition hover:bg-[#fff8ee]"
            >
              What is Açaí
            </button>
            <button
              onClick={onOpenDIY}
              className="rounded-full px-4 py-3 text-sm font-semibold text-[#9B1E36] underline-offset-4 hover:underline"
            >
              Build a Bowl
            </button>
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2">
            {BENEFITS.map((benefit) => (
              <li key={benefit} className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#4A0E17]/70">
                <span className="h-1.5 w-1.5 rounded-full bg-[#9B1E36]" />
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <img
            src="/menu/classical-acai-bowl.jpg"
            alt="Classical açaí bowl with strawberries, banana, granola, and honey"
            className="h-[420px] w-full rounded-[2rem] object-cover shadow-[0_30px_70px_-36px_rgba(74,14,23,0.55)] sm:h-[500px]"
          />
          <img
            src="/menu/brazilian-tropical-bowl.jpg"
            alt="Brazilian tropical açaí bowl with mango, passion fruit, and coconut"
            className="absolute -left-4 bottom-8 hidden w-36 rounded-[1.4rem] object-cover shadow-xl ring-[6px] ring-[#FAF7F2] sm:block sm:w-44 lg:-left-10"
          />
        </div>
      </div>
    </section>
  );
};
