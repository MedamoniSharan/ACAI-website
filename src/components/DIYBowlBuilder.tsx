import React, { useState } from 'react';
import { X, Check, Sparkles, ShoppingBag } from 'lucide-react';
import { Product, CartItem } from '../types';

interface DIYBowlBuilderProps {
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (item: CartItem) => void;
}

const BASES = [
  {
    id: 'pure-acai',
    name: 'Wild Amazonian Açaí',
    desc: 'Pure frozen organic açaí pulp, zero additives, thick velvet texture',
    color: '#4A0E17',
    calories: 140,
  },
  {
    id: 'acai-matcha',
    name: 'Açaí & Kyoto Matcha Swirl',
    desc: 'Ceremonial Japanese matcha layered with dark açaí',
    color: '#3F6131',
    calories: 155,
  },
  {
    id: 'tropical-acai',
    name: 'Alphonso Mango & Açaí Blend',
    desc: 'Sweet mango puree with turmeric & açaí base',
    color: '#D4881A',
    calories: 160,
  },
  {
    id: 'protein-acai',
    name: 'High-Protein Açaí (+20g Whey)',
    desc: 'Infused with clean vanilla whey isolate or plant protein',
    color: '#653E2A',
    calories: 220,
  },
];

const FRUITS = [
  { id: 'strawberries', name: 'Fresh Strawberries', icon: '🍓', cal: 25 },
  { id: 'banana', name: 'Caramelized Bananas', icon: '🍌', cal: 45 },
  { id: 'blueberries', name: 'Wild Blueberries', icon: '🫐', cal: 30 },
  { id: 'mango', name: 'Alphonso Mango Cubes', icon: '🥭', cal: 35 },
  { id: 'kiwi', name: 'Sun-Gold Kiwi Slices', icon: '🥝', cal: 25 },
  { id: 'pomegranate', name: 'Pomegranate Jewels', icon: '🔴', cal: 30 },
];

const CRUNCHES = [
  { id: 'granola', name: 'Roasted Almond Granola', icon: '🥣', cal: 60 },
  { id: 'chia', name: 'Organic Chia & Flaxseeds', icon: '🌱', cal: 35 },
  { id: 'cacao', name: 'Raw Cacao Nibs', icon: '🍫', cal: 40 },
  { id: 'coconut', name: 'Toasted Coconut Flakes', icon: '🥥', cal: 45 },
  { id: 'pistachios', name: 'Crushed Pistachios', icon: '🥜', cal: 50 },
  { id: 'biscoff', name: 'Lotus Biscoff Crumbs', icon: '🍪', cal: 70 },
];

const DRIZZLES = [
  { id: 'peanut-butter', name: 'Creamy Roasted Peanut Butter', icon: '🥜', cal: 80 },
  { id: 'honey', name: 'Raw Wildflower Honey', icon: '🍯', cal: 50 },
  { id: 'caramel', name: 'Sea Salt Caramel Drizzle', icon: '✨', cal: 70 },
  { id: 'dark-choco', name: 'Belgian Dark Chocolate Ganache', icon: '🍫', cal: 75 },
  { id: 'maple', name: 'Pure Quebec Maple Syrup', icon: '🍁', cal: 50 },
  { id: 'none', name: 'No Drizzle (Clean & Lean)', icon: '🚫', cal: 0 },
];

export const DIYBowlBuilder: React.FC<DIYBowlBuilderProps> = ({
  isOpen,
  onClose,
  onAddToCart,
}) => {
  const [step, setStep] = useState<number>(1);
  const [selectedBase, setSelectedBase] = useState(BASES[0]);
  const [selectedFruits, setSelectedFruits] = useState<string[]>(['strawberries', 'banana']);
  const [selectedCrunches, setSelectedCrunches] = useState<string[]>(['granola', 'chia']);
  const [selectedDrizzle, setSelectedDrizzle] = useState(DRIZZLES[0]);
  const [bowlSize, setBowlSize] = useState<'Standard (350ml)' | 'Grande (500ml)'>('Standard (350ml)');
  const [sweetness, setSweetness] = useState<string>('Natural (No Added Sugar)');

  if (!isOpen) return null;

  const basePrice = bowlSize === 'Standard (350ml)' ? 349 : 429;
  const extraProtein = selectedBase.id === 'protein-acai' ? 40 : 0;
  const totalPrice = basePrice + extraProtein;

  const totalCalories =
    selectedBase.calories +
    selectedFruits.reduce((sum, f) => sum + (FRUITS.find((x) => x.id === f)?.cal || 0), 0) +
    selectedCrunches.reduce((sum, c) => sum + (CRUNCHES.find((x) => x.id === c)?.cal || 0), 0) +
    selectedDrizzle.cal +
    (bowlSize === 'Grande (500ml)' ? 80 : 0);

  const toggleFruit = (id: string) => {
    if (selectedFruits.includes(id)) {
      if (selectedFruits.length > 1) {
        setSelectedFruits(selectedFruits.filter((f) => f !== id));
      }
    } else {
      if (selectedFruits.length < 3) {
        setSelectedFruits([...selectedFruits, id]);
      }
    }
  };

  const toggleCrunch = (id: string) => {
    if (selectedCrunches.includes(id)) {
      if (selectedCrunches.length > 1) {
        setSelectedCrunches(selectedCrunches.filter((c) => c !== id));
      }
    } else {
      if (selectedCrunches.length < 2) {
        setSelectedCrunches([...selectedCrunches, id]);
      }
    }
  };

  const handleFinishCustomBowl = () => {
    const diyProduct: Product = {
      id: `diy-bowl-${Date.now()}`,
      name: `Custom D.I.Y Açaí Bowl (${bowlSize.split(' ')[0]})`,
      category: 'smoothies',
      categoryLabel: 'Custom Creations',
      price: totalPrice,
      description: `Crafted with ${selectedBase.name}, fresh ${selectedFruits.join(', ')}, crunch of ${selectedCrunches.join(', ')}, drizzled with ${selectedDrizzle.name}.`,
      ingredients: [
        selectedBase.name,
        ...selectedFruits.map((f) => FRUITS.find((x) => x.id === f)?.name || f),
        ...selectedCrunches.map((c) => CRUNCHES.find((x) => x.id === c)?.name || c),
        selectedDrizzle.name,
      ],
      image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=800&q=80',
      calories: `${totalCalories} kcal`,
      prepTime: '5 mins',
      rating: 5.0,
      reviewCount: 1,
    };

    onAddToCart({
      cartId: `cart-diy-${Date.now()}`,
      product: diyProduct,
      quantity: 1,
      selectedOptions: {
        'Bowl Size': bowlSize,
        Base: selectedBase.name,
        Fruits: selectedFruits.join(', '),
        Crunch: selectedCrunches.join(', '),
        Drizzle: selectedDrizzle.name,
        Sweetness: sweetness,
      },
      unitPrice: totalPrice,
      totalPrice: totalPrice,
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-[#FAF7F2] rounded-[1.75rem] sm:rounded-3xl shadow-2xl border border-white/60 overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="p-4 sm:p-6 sm:px-8 border-b border-[#4A0E17]/10 flex items-center justify-between bg-white/70 backdrop-blur-md">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl overflow-hidden shadow-sm border border-[#4A0E17]/20 flex-shrink-0">
              <img
                src="/logos/acai-in-badge.png"
                alt="AÇAI.IN"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-base sm:text-2xl font-bold tracking-tight text-[#1d1d1f]">
                Build Your Custom Açaí Bowl
              </h3>
              <p className="text-[11px] sm:text-xs text-[#4A0E17]/70">
                Crafted fresh to order • Step {step} of 4
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 sm:p-2 rounded-full hover:bg-[#4A0E17]/10 text-[#4A0E17] transition-colors"
            aria-label="Close customizer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step indicator pills */}
        <div className="px-3.5 sm:px-6 py-2.5 sm:py-3 bg-[#FAF7F2] border-b border-[#4A0E17]/5 flex items-center justify-between text-[11px] sm:text-xs font-semibold overflow-x-auto no-scrollbar gap-1.5">
          {[
            { num: 1, label: '1. Select Base' },
            { num: 2, label: '2. Fresh Fruits (Max 3)' },
            { num: 3, label: '3. Super Crunches (Max 2)' },
            { num: 4, label: '4. Drizzle & Size' },
          ].map((item) => (
            <button
              key={item.num}
              onClick={() => setStep(item.num)}
              className={`px-3 py-1.5 rounded-full transition-all whitespace-nowrap flex-shrink-0 ${
                step === item.num
                  ? 'bg-[#4A0E17] text-white shadow-sm'
                  : 'text-[#4A0E17]/60 hover:text-[#4A0E17]'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 space-y-5 sm:space-y-6">
          {/* STEP 1: BASE */}
          {step === 1 && (
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-bold tracking-tight text-[#1d1d1f]">
                  Step 1: Choose Your Signature Base
                </h4>
                <p className="text-xs text-[#4A0E17]/70">
                  Select the foundation of your smoothie bowl.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {BASES.map((base) => {
                  const isSelected = selectedBase.id === base.id;
                  return (
                    <div
                      key={base.id}
                      onClick={() => setSelectedBase(base)}
                      className={`p-5 rounded-2xl border-2 cursor-pointer transition-all ${
                        isSelected
                          ? 'border-[#4A0E17] bg-white shadow-md'
                          : 'border-transparent bg-white/60 hover:bg-white/90'
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-2.5">
                          <span
                            className="w-4 h-4 rounded-full"
                            style={{ backgroundColor: base.color }}
                          />
                          <span className="font-semibold text-sm text-[#221B19]">
                            {base.name}
                          </span>
                        </div>
                        {isSelected && (
                          <div className="w-5 h-5 rounded-full bg-[#4A0E17] text-white flex items-center justify-center">
                            <Check className="w-3 h-3" />
                          </div>
                        )}
                      </div>
                      <p className="text-xs text-[#4A0E17]/70 mt-2 leading-relaxed">
                        {base.desc}
                      </p>
                      <div className="flex items-center gap-3 mt-3 text-[11px] text-[#4A0E17]/60">
                        <span>{base.calories} kcal base</span>
                        {base.id === 'protein-acai' && (
                          <span className="font-bold text-[#9B1E36]">+₹40</span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 2: FRUITS */}
          {step === 2 && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-lg font-bold tracking-tight text-[#1d1d1f]">
                    Step 2: Pick Up to 3 Fresh Fruits
                  </h4>
                  <p className="text-xs text-[#4A0E17]/70">
                    Selected: {selectedFruits.length}/3
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {FRUITS.map((fruit) => {
                  const isSelected = selectedFruits.includes(fruit.id);
                  return (
                    <div
                      key={fruit.id}
                      onClick={() => toggleFruit(fruit.id)}
                      className={`p-4 rounded-2xl border-2 cursor-pointer transition-all flex flex-col items-center text-center ${
                        isSelected
                          ? 'border-[#4A0E17] bg-white shadow-md'
                          : 'border-transparent bg-white/60 hover:bg-white/90'
                      }`}
                    >
                      <span className="text-3xl mb-2">{fruit.icon}</span>
                      <span className="font-semibold text-xs text-[#221B19]">
                        {fruit.name}
                      </span>
                      <span className="text-[10px] text-[#4A0E17]/60 mt-1">
                        +{fruit.cal} kcal
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 3: CRUNCHES */}
          {step === 3 && (
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-bold tracking-tight text-[#1d1d1f]">
                  Step 3: Pick Up to 2 Super Crunches
                </h4>
                <p className="text-xs text-[#4A0E17]/70">
                  Selected: {selectedCrunches.length}/2
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {CRUNCHES.map((crunch) => {
                  const isSelected = selectedCrunches.includes(crunch.id);
                  return (
                    <div
                      key={crunch.id}
                      onClick={() => toggleCrunch(crunch.id)}
                      className={`p-4 rounded-2xl border-2 cursor-pointer transition-all flex flex-col items-center text-center ${
                        isSelected
                          ? 'border-[#4A0E17] bg-white shadow-md'
                          : 'border-transparent bg-white/60 hover:bg-white/90'
                      }`}
                    >
                      <span className="text-3xl mb-2">{crunch.icon}</span>
                      <span className="font-semibold text-xs text-[#221B19]">
                        {crunch.name}
                      </span>
                      <span className="text-[10px] text-[#4A0E17]/60 mt-1">
                        +{crunch.cal} kcal
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 4: DRIZZLE, SIZE & SWEETNESS */}
          {step === 4 && (
            <div className="space-y-6">
              {/* Bowl Size */}
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-[#4A0E17]">
                  Bowl Size
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {(['Standard (350ml)', 'Grande (500ml)'] as const).map((sz) => (
                    <button
                      key={sz}
                      onClick={() => setBowlSize(sz)}
                      className={`py-3 px-4 rounded-xl border text-xs font-semibold transition-all ${
                        bowlSize === sz
                          ? 'border-[#4A0E17] bg-[#4A0E17] text-white shadow'
                          : 'border-[#4A0E17]/20 bg-white text-[#4A0E17]'
                      }`}
                    >
                      {sz} {sz.includes('Grande') ? '(+₹80)' : '(₹349)'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Drizzle Selection */}
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-[#4A0E17]">
                  Artisanal Drizzle (Choose 1)
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {DRIZZLES.map((drizzle) => {
                    const isSelected = selectedDrizzle.id === drizzle.id;
                    return (
                      <div
                        key={drizzle.id}
                        onClick={() => setSelectedDrizzle(drizzle)}
                        className={`p-3 rounded-xl border cursor-pointer text-center transition-all ${
                          isSelected
                            ? 'border-[#4A0E17] bg-white shadow'
                            : 'border-transparent bg-white/60 hover:bg-white'
                        }`}
                      >
                        <span className="text-xl">{drizzle.icon}</span>
                        <div className="text-[11px] font-semibold text-[#221B19] mt-1">
                          {drizzle.name}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Sweetness */}
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-[#4A0E17]">
                  Sweetness Level
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    'Natural (No Sugar)',
                    'Touch of Wild Honey',
                    'Organic Maple Glaze',
                  ].map((lvl) => (
                    <button
                      key={lvl}
                      onClick={() => setSweetness(lvl)}
                      className={`py-2 px-3 rounded-lg border text-[11px] font-medium transition-all ${
                        sweetness === lvl
                          ? 'border-[#4A0E17] bg-[#4A0E17] text-white'
                          : 'border-[#4A0E17]/15 bg-white text-[#4A0E17]'
                      }`}
                    >
                      {lvl}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer Summary & Action (Mobile friendly stacked action) */}
        <div className="p-4 sm:p-6 bg-white border-t border-[#4A0E17]/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4">
          <div className="flex items-center justify-between sm:justify-start gap-4">
            <div>
              <div className="text-[11px] sm:text-xs text-[#4A0E17]/70">Total Price</div>
              <div className="text-xl sm:text-2xl font-bold tracking-tight text-[#4A0E17]">
                ₹{totalPrice}
              </div>
            </div>
            <div className="h-7 sm:h-8 w-px bg-[#4A0E17]/10" />
            <div>
              <div className="text-[11px] sm:text-xs text-[#4A0E17]/70">Nutrition</div>
              <div className="text-xs sm:text-sm font-semibold text-[#221B19]">
                {totalCalories} kcal
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2.5 sm:gap-3 w-full sm:w-auto">
            {step > 1 && (
              <button
                onClick={() => setStep(step - 1)}
                className="px-4 sm:px-5 py-2.5 sm:py-3 rounded-full border border-[#4A0E17]/20 text-[#4A0E17] text-xs font-semibold hover:bg-[#4A0E17]/5 transition-colors"
              >
                Back
              </button>
            )}

            {step < 4 ? (
              <button
                onClick={() => setStep(step + 1)}
                className="flex-1 sm:flex-initial px-6 py-2.5 sm:py-3 rounded-full bg-[#4A0E17] hover:bg-[#32070e] text-white text-xs font-semibold tracking-wide transition-all shadow-md text-center justify-center"
              >
                Next Step →
              </button>
            ) : (
              <button
                onClick={handleFinishCustomBowl}
                className="flex-1 sm:flex-initial px-6 sm:px-7 py-3 rounded-full bg-[#9B1E36] hover:bg-[#7e1c2e] text-white text-xs font-semibold tracking-wide transition-all shadow-lg flex items-center justify-center gap-2 text-center"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Add Bowl to Bag (₹{totalPrice})</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
