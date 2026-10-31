import React from 'react';
import { Leaf, ShieldCheck, Droplets, Heart, Ban } from 'lucide-react';

interface WhatIsAcaiProps {
  onOrder: () => void;
  onOpenDIY: () => void;
}

const BENEFITS = [
  { icon: ShieldCheck, title: 'Rich in Antioxidants' },
  { icon: Leaf, title: 'Vegan' },
  { icon: Ban, title: 'Free from Colorants' },
  { icon: Heart, title: 'Cholesterol Free' },
  { icon: Droplets, title: 'Free from Trans Fat' },
];

export const WhatIsAcai: React.FC<WhatIsAcaiProps> = ({ onOrder, onOpenDIY }) => {
  return (
    <main id="what-is-acai" className="bg-[#FAF7F2] pb-20 pt-28">
      <section className="mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#9B1E36]">What is açaí</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-[#1d1d1f] sm:text-5xl">
            Açaí, as authentic as it gets.
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#4A0E17]/80 sm:text-base">
            Açaí berries are small, dark purple fruits harvested from the Euterpe oleracea palm tree, native to the Amazon rainforest in South America.
          </p>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#4A0E17]/80 sm:text-base">
            AÇAI.IN uses 100% organic açaí, straight from the Amazon. Its antioxidants include the anthocyanins cyanidin-3-glucoside and cyanidin-3-rutinoside, and the flavonoids orientin and homoorientin.
          </p>
        </div>
        <div className="overflow-hidden rounded-3xl">
          <img
            src="/acai/bowl-fruit.jpg"
            alt="Açaí bowl with mango, berries, and coconut"
            style={{ objectPosition: 'center 72%' }}
            className="h-[360px] w-full object-cover sm:h-[440px]"
          />
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-7xl px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-3xl bg-white p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#9B1E36]">About</p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#1d1d1f]">Real nourishment, no shortcuts.</h2>
            <p className="mt-4 text-sm leading-relaxed text-[#4A0E17]/80">
              We are committed to integrity in the wellness space, creating food rooted in real nourishment without shortcuts or compromises. We continuously explore powerful superfoods with meaningful, everyday benefits — making premium wellness both accessible and affordable, without sacrificing quality.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-[#4A0E17]/80">
              Today, Açaí.in is available on Swiggy and Zomato, and offline in Kokapet and Worli, with full customisation so every bowl can be built exactly the way you like it.
            </p>
          </article>
          <article className="rounded-3xl bg-white p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#9B1E36]">How we make it</p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#1d1d1f]">100% pure açaí purée.</h2>
            <p className="mt-4 text-sm leading-relaxed text-[#4A0E17]/80">
              At Açaí.in, we use 100% pure açaí purée with zero refined sugar and no artificial sweeteners. Our menu is predominantly vegan, sugar-free, and gluten-free — staying true to a philosophy of simple, wholesome ingredients.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {['Zero refined sugar', 'No artificial sweeteners', 'Predominantly vegan', 'Sugar-free', 'Gluten-free'].map((item) => (
                <span key={item} className="rounded-full bg-[#FAF7F2] px-3 py-1.5 text-xs font-semibold text-[#4A0E17]">
                  {item}
                </span>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-7xl px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.22em] text-[#9B1E36]">Benefits</p>
        <h2 className="mt-2 text-center text-3xl font-bold tracking-tight text-[#1d1d1f]">Why açaí</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-sm leading-relaxed text-[#4A0E17]/80">
          The antioxidants in açaí are cyanidin-3-glucoside, cyanidin-3-rutinoside, orientin, and homoorientin.
        </p>
        <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-5">
          {BENEFITS.map((item) => (
            <div key={item.title} className="rounded-3xl bg-white px-4 py-6 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#4A0E17]/10 text-[#4A0E17]">
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-3 text-sm font-semibold text-[#1d1d1f]">{item.title}</h3>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <button
            onClick={onOrder}
            className="rounded-full bg-[#4A0E17] px-6 py-3 text-sm font-semibold text-white"
          >
            Order a bowl
          </button>
          <button
            onClick={onOpenDIY}
            className="rounded-full border border-[#4A0E17]/20 px-6 py-3 text-sm font-semibold text-[#4A0E17]"
          >
            Build your own
          </button>
        </div>
      </section>
    </main>
  );
};
