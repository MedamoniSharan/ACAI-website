import React from 'react';
import { CartItem } from '../types';

interface HeroCleanProps {
  onExploreMenu: () => void;
  onOpenDIY: () => void;
  onOpenAcai: () => void;
  onAddToCart: (item: CartItem) => void;
}

const HERO_IMAGES = [
  {
    src: '/acai/bowl-banana.jpg',
    alt: 'Purple açaí bowl topped with banana',
    position: 'center 40%',
  },
  {
    src: '/acai/bowl-fruit.jpg',
    alt: 'Açaí bowl with mango, berries, and coconut',
    position: 'center 70%',
  },
];

export const HeroClean: React.FC<HeroCleanProps> = ({
  onExploreMenu,
  onOpenDIY,
  onOpenAcai,
}) => {
  return (
    <section id="hero" className="bg-[#FAF7F2] pb-8 pt-28 sm:pb-14">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="mb-4 inline-flex w-fit items-center rounded-full border border-[#4A0E17]/15 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#9B1E36]">
            100% pure açaí
          </p>
          <h1 className="max-w-xl text-4xl font-bold tracking-[-0.03em] text-[#1d1d1f] sm:text-6xl">
            Açaí, as authentic as it gets.
          </h1>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-[#4A0E17]/80 sm:text-base">
            100% organic açaí, straight from the Amazon. No shortcuts — just pure superfood goodness, packed with antioxidants and nutrients.
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
              className="rounded-full px-2 py-3 text-sm font-semibold text-[#9B1E36]"
            >
              Build a Bowl
            </button>
          </div>
        </div>

        <div className="grid grid-cols-5 gap-3">
          <img
            src={HERO_IMAGES[0].src}
            alt={HERO_IMAGES[0].alt}
            style={{ objectPosition: HERO_IMAGES[0].position }}
            className="col-span-3 h-72 rounded-3xl object-cover sm:h-[440px]"
          />
          <img
            src={HERO_IMAGES[1].src}
            alt={HERO_IMAGES[1].alt}
            style={{ objectPosition: HERO_IMAGES[1].position }}
            className="col-span-2 h-72 rounded-3xl object-cover sm:h-[440px]"
          />
        </div>
      </div>
    </section>
  );
};
