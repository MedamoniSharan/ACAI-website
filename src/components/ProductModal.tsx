import React, { useState, useEffect } from 'react';
import { X, Star, Clock, Flame, Plus, Minus, ShoppingBag } from 'lucide-react';
import { Product, CartItem } from '../types';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (item: CartItem) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onAddToCart,
}) => {
  const [quantity, setQuantity] = useState<number>(1);
  const [selectedOptions, setSelectedOptions] = useState<Record<string, { label: string; priceDelta: number }>>({});
  const [notes, setNotes] = useState<string>('');

  useEffect(() => {
    if (product) {
      setQuantity(1);
      setNotes('');
      const defaultOpts: Record<string, { label: string; priceDelta: number }> = {};
      if (product.options) {
        product.options.forEach((opt) => {
          if (opt.choices.length > 0) {
            defaultOpts[opt.name] = {
              label: opt.choices[0].label,
              priceDelta: opt.choices[0].priceDelta || 0,
            };
          }
        });
      }
      setSelectedOptions(defaultOpts);
    }
  }, [product]);

  if (!product) return null;

  const extraOptionsPrice = Object.values(selectedOptions).reduce(
    (sum, opt) => sum + opt.priceDelta,
    0
  );
  const unitPrice = product.price + extraOptionsPrice;
  const totalPrice = unitPrice * quantity;

  const handleAdd = () => {
    const formattedOptions: Record<string, string> = {};
    Object.entries(selectedOptions).forEach(([key, val]) => {
      formattedOptions[key] = val.label + (val.priceDelta ? ` (+₹${val.priceDelta})` : '');
    });

    onAddToCart({
      cartId: `cart-${product.id}-${Date.now()}`,
      product,
      quantity,
      selectedOptions: formattedOptions,
      unitPrice,
      totalPrice,
      notes: notes.trim() || undefined,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#FAF7F2] rounded-[1.75rem] sm:rounded-3xl shadow-2xl border border-white/60 overflow-hidden flex flex-col max-h-[92vh]">
        {/* Close Button Floating */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/35 hover:bg-black/60 text-white flex items-center justify-center backdrop-blur-md transition-colors"
          aria-label="Close modal"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* Modal Image Header */}
        <div className="relative h-52 sm:h-72 w-full overflow-hidden bg-[#2D060C] flex-shrink-0">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAF7F2] via-transparent to-black/40" />

          {/* Floating Badges */}
          <div className="absolute bottom-3 left-4 sm:bottom-4 sm:left-6 flex flex-wrap items-center gap-1.5 sm:gap-2">
            {product.badge && (
              <span className="px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-[#4A0E17] text-white text-[10px] sm:text-xs font-semibold shadow-md">
                {product.badge}
              </span>
            )}
            {product.tags?.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded-full bg-white/90 backdrop-blur-md text-[#4A0E17] text-[10px] sm:text-[11px] font-medium shadow-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Body Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 space-y-4 sm:space-y-6">
          {/* Title & Price */}
          <div className="flex items-start justify-between gap-3">
            <div>
              <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#9B1E36] font-semibold">
                {product.categoryLabel}
              </span>
              <h3 className="text-xl sm:text-3xl font-bold tracking-tight text-[#1d1d1f] mt-0.5">
                {product.name}
              </h3>
            </div>
            <div className="text-right flex-shrink-0">
              <div className="text-xl sm:text-3xl font-bold tracking-tight text-[#4A0E17]">
                ₹{unitPrice}
              </div>
              {product.priceDisplay && (
                <div className="text-[10px] sm:text-[11px] text-[#4A0E17]/60">
                  {product.priceDisplay}
                </div>
              )}
            </div>
          </div>

          {/* Ratings & Meta */}
          <div className="flex items-center gap-3 sm:gap-4 text-xs text-[#4A0E17]/80 pb-2 border-b border-[#4A0E17]/10 flex-wrap">
            <span className="flex items-center gap-1 font-semibold text-[#D4AF37]">
              <Star className="w-3.5 h-3.5 fill-current" />
              {product.rating} ({product.reviewCount} reviews)
            </span>
            {product.calories && (
              <span className="flex items-center gap-1">
                <Flame className="w-3.5 h-3.5 text-[#9B1E36]" />
                {product.calories}
              </span>
            )}
            {product.prepTime && (
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#4A0E17]/70" />
                {product.prepTime}
              </span>
            )}
          </div>

          {/* Description */}
          <p className="text-xs sm:text-sm text-[#4A0E17]/80 leading-relaxed font-normal">
            {product.description}
          </p>

          {/* Real Ingredients */}
          <div>
            <h4 className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[#4A0E17] mb-2">
              Natural Ingredients
            </h4>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {product.ingredients.map((ing, i) => (
                <span
                  key={i}
                  className="px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-white border border-[#4A0E17]/15 text-[11px] sm:text-xs text-[#221B19] font-medium"
                >
                  {ing}
                </span>
              ))}
            </div>
          </div>

          {/* Customization Options */}
          {product.options && product.options.length > 0 && (
            <div className="space-y-3.5 pt-2 border-t border-[#4A0E17]/10">
              {product.options.map((option) => (
                <div key={option.name} className="space-y-1.5 sm:space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold uppercase tracking-wider text-[#4A0E17]">
                      {option.name}
                    </span>
                    <span className="text-[#4A0E17]/60 text-[11px]">Choose one</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {option.choices.map((choice) => {
                      const isSelected =
                        selectedOptions[option.name]?.label === choice.label;
                      return (
                        <button
                          key={choice.label}
                          type="button"
                          onClick={() =>
                            setSelectedOptions({
                              ...selectedOptions,
                              [option.name]: {
                                label: choice.label,
                                priceDelta: choice.priceDelta || 0,
                              },
                            })
                          }
                          className={`p-2.5 rounded-xl border text-left text-xs font-medium transition-all flex items-center justify-between ${
                            isSelected
                              ? 'border-[#4A0E17] bg-[#4A0E17] text-white shadow-sm'
                              : 'border-[#4A0E17]/15 bg-white text-[#221B19] hover:bg-[#FAF7F2]'
                          }`}
                        >
                          <span className="truncate">{choice.label}</span>
                          {choice.priceDelta ? (
                            <span
                              className={`text-[10px] ml-1 font-semibold ${
                                isSelected ? 'text-white/90' : 'text-[#9B1E36]'
                              }`}
                            >
                              +₹{choice.priceDelta}
                            </span>
                          ) : null}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Barista Notes */}
          <div className="space-y-1.5 pt-2 border-t border-[#4A0E17]/10">
            <label className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[#4A0E17]">
              Special Requests for Barista
            </label>
            <input
              type="text"
              placeholder="e.g. Extra hot, light ice, oat milk on side..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-white border border-[#4A0E17]/15 text-xs text-[#221B19] placeholder-[#4A0E17]/40 outline-none focus:border-[#4A0E17]"
            />
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-3.5 sm:p-6 bg-white border-t border-[#4A0E17]/10 flex items-center justify-between gap-3">
          {/* Quantity stepper */}
          <div className="flex items-center gap-2 sm:gap-3 p-1 rounded-full bg-[#FAF7F2] border border-[#4A0E17]/15 flex-shrink-0">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white hover:bg-[#4A0E17]/10 text-[#4A0E17] flex items-center justify-center transition-colors shadow-xs"
              aria-label="Decrease quantity"
            >
              <Minus className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </button>
            <span className="font-semibold text-xs sm:text-sm text-[#221B19] w-4 sm:w-5 text-center">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white hover:bg-[#4A0E17]/10 text-[#4A0E17] flex items-center justify-center transition-colors shadow-xs"
              aria-label="Increase quantity"
            >
              <Plus className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </button>
          </div>

          {/* Add to Bag CTA */}
          <button
            onClick={handleAdd}
            className="flex-1 px-4 sm:px-6 py-3 sm:py-3.5 rounded-full bg-[#4A0E17] hover:bg-[#32070e] text-white font-medium text-xs sm:text-sm tracking-wide flex items-center justify-center gap-1.5 sm:gap-2 shadow-lg hover:shadow-xl transition-all"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Add to Bag • ₹{totalPrice}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
