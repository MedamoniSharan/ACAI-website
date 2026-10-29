import React, { useState } from 'react';
import { Plus, Star, Sparkles, Flame, Eye, ArrowRight } from 'lucide-react';
import { Product, Category, CartItem } from '../types';
import { MENU_PRODUCTS, CATEGORIES } from '../data/menuData';

interface MenuSectionProps {
  selectedCategory: Category;
  setSelectedCategory: (cat: Category) => void;
  searchQuery: string;
  onOpenProductModal: (product: Product) => void;
  onAddToCart: (item: CartItem) => void;
  onOpenDIY: () => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  selectedCategory,
  setSelectedCategory,
  searchQuery,
  onOpenProductModal,
  onAddToCart,
  onOpenDIY,
}) => {
  const [activeTag, setActiveTag] = useState<string>('all');

  // Filter products by category, search query, and tags
  const filteredProducts = MENU_PRODUCTS.filter((product) => {
    // Category match
    const categoryMatch =
      selectedCategory === 'all' || product.category === selectedCategory;

    // Search query match
    const searchMatch =
      !searchQuery ||
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.ingredients.some((ing) =>
        ing.toLowerCase().includes(searchQuery.toLowerCase())
      );

    // Tag match
    const tagMatch =
      activeTag === 'all' ||
      product.tags?.some((t) => t.toLowerCase() === activeTag.toLowerCase());

    return categoryMatch && searchMatch && tagMatch;
  });

  const handleQuickAdd = (e: React.MouseEvent, product: Product) => {
    e.stopPropagation();
    // If the product has options, open modal so user can choose, otherwise add immediately
    if (product.options && product.options.length > 0) {
      onOpenProductModal(product);
    } else {
      onAddToCart({
        cartId: `cart-${product.id}-${Date.now()}`,
        product,
        quantity: 1,
        selectedOptions: {},
        unitPrice: product.price,
        totalPrice: product.price,
      });
    }
  };

  return (
    <section id="menu" className="py-14 sm:py-20 lg:py-28 relative bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 gap-5 sm:gap-6">
          <div className="space-y-2.5 sm:space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4A0E17]/5 border border-[#4A0E17]/10 text-xs font-semibold text-[#4A0E17] uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Artisanal Kitchen & Bar</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-[-0.03em] text-[#1d1d1f]">
              Curated Menu & Beverages
            </h2>
            <p className="text-xs sm:text-base text-[#4A0E17]/75 font-normal max-w-xl">
              From our wild-harvested Amazonian açaí bowls to 18-hour single origin cold brew, every recipe is hand-measured to perfection.
            </p>
          </div>

          {/* D.I.Y Bowl Callout Button */}
          <button
            onClick={onOpenDIY}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#4A0E17] to-[#7E1C2E] text-white text-xs sm:text-sm font-semibold tracking-wide shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <Sparkles className="w-4 h-4 text-[#D4AF37] animate-spin-slow" />
            <span>Build Custom D.I.Y Bowl</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1" />
          </button>
        </div>

        {/* Category Navigation Pills (Apple Tab Style) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 no-scrollbar">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 sm:px-5 py-2.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 flex items-center gap-2 ${
                  isSelected
                    ? 'bg-[#4A0E17] text-white shadow-md scale-[1.02]'
                    : 'bg-white/80 hover:bg-white text-[#4A0E17] border border-[#4A0E17]/10'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    isSelected
                      ? 'bg-white/20 text-white'
                      : 'bg-[#4A0E17]/10 text-[#4A0E17]'
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Tag Filters (Apple Chips) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-6 mb-8 text-xs font-medium text-[#4A0E17]/70 no-scrollbar">
          <span className="text-[11px] uppercase tracking-wider font-semibold text-[#4A0E17]/50 mr-1">
            Filter:
          </span>
          {[
            { id: 'all', label: 'All Items' },
            { id: 'bestseller', label: '★ Bestsellers' },
            { id: 'signature', label: 'Signature' },
            { id: 'high protein', label: '⚡ High Protein' },
            { id: 'organic', label: '🌱 Organic' },
            { id: 'vegan', label: '🍃 Vegan' },
          ].map((tag) => (
            <button
              key={tag.id}
              onClick={() => setActiveTag(tag.id)}
              className={`px-3 py-1.5 rounded-full border transition-all whitespace-nowrap ${
                activeTag === tag.id
                  ? 'border-[#9B1E36] bg-[#9B1E36]/10 text-[#9B1E36] font-semibold'
                  : 'border-[#4A0E17]/15 bg-transparent hover:border-[#4A0E17]/30 text-[#4A0E17]/75'
              }`}
            >
              {tag.label}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-white/50 rounded-3xl border border-dashed border-[#4A0E17]/20 p-8">
            <p className="text-base font-semibold text-[#4A0E17]">
              No items found matching your filters.
            </p>
            <p className="text-xs text-[#4A0E17]/60 mt-1">
              Try searching for something else or reset your filter tabs.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setActiveTag('all');
              }}
              className="mt-4 px-5 py-2 rounded-full bg-[#4A0E17] text-white text-xs font-medium"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                onClick={() => onOpenProductModal(product)}
                className="group relative bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl border border-[#4A0E17]/10 p-3.5 sm:p-5 flex flex-col justify-between hover:shadow-[0_20px_40px_-15px_rgba(74,14,23,0.12)] hover:-translate-y-1 sm:hover:-translate-y-1.5 transition-all duration-300 cursor-pointer"
              >
                {/* Image Wrap */}
                <div className="relative w-full h-44 sm:h-52 rounded-xl sm:rounded-2xl overflow-hidden bg-[#FAF7F2] mb-3.5 sm:mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-105"
                    loading="lazy"
                  />

                  {/* Subtle bottom shadow only */}
                  <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-black/35 to-transparent pointer-events-none" />

                  {/* Badge */}
                  {product.badge && (
                    <div className="absolute top-2.5 sm:top-3 left-2.5 sm:left-3 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-[#4A0E17]/90 backdrop-blur-md text-white text-[9px] sm:text-[10px] font-bold tracking-wider uppercase shadow-sm">
                      {product.badge}
                    </div>
                  )}

                  {/* Calories Pill */}
                  {product.calories && (
                    <div className="absolute bottom-2.5 sm:bottom-3 left-2.5 sm:left-3 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-white/90 backdrop-blur-md text-[#4A0E17] text-[9px] sm:text-[10px] font-semibold flex items-center gap-1 shadow-sm">
                      <Flame className="w-3 h-3 text-[#9B1E36]" />
                      <span>{product.calories}</span>
                    </div>
                  )}

                  {/* Quick View eye icon on hover */}
                  <div className="absolute top-2.5 sm:top-3 right-2.5 sm:right-3 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/80 backdrop-blur-md text-[#4A0E17] opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all shadow-md">
                    <Eye className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                </div>

                {/* Details */}
                <div className="flex-1 flex flex-col justify-between space-y-2">
                  <div>
                    <div className="flex items-center justify-between text-[11px] text-[#4A0E17]/60 mb-1">
                      <span className="uppercase tracking-wider font-semibold text-[#9B1E36]">
                        {product.categoryLabel}
                      </span>
                      <span className="flex items-center gap-0.5 font-medium text-[#D4AF37]">
                        <Star className="w-3 h-3 fill-current" />
                        {product.rating}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold tracking-tight text-[#1d1d1f] group-hover:text-[#9B1E36] transition-colors line-clamp-1">
                      {product.name}
                    </h3>

                    <p className="text-xs text-[#4A0E17]/70 line-clamp-2 mt-1 leading-relaxed font-normal">
                      {product.description}
                    </p>
                  </div>

                  {/* Bottom Price & Add to Bag CTA */}
                  <div className="pt-3 sm:pt-4 border-t border-[#4A0E17]/5 flex items-center justify-between">
                    <div>
                      <span className="text-base sm:text-xl font-bold tracking-tight text-[#4A0E17]">
                        ₹{product.price}
                      </span>
                      {product.priceDisplay && (
                        <span className="text-[10px] text-[#4A0E17]/60 ml-1.5 block">
                          {product.priceDisplay}
                        </span>
                      )}
                    </div>

                    <button
                      onClick={(e) => handleQuickAdd(e, product)}
                      className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#FAF7F2] hover:bg-[#4A0E17] text-[#4A0E17] hover:text-white border border-[#4A0E17]/15 flex items-center justify-center transition-all shadow-xs group-hover:bg-[#4A0E17] group-hover:text-white active:scale-95"
                      title="Add to Bag"
                      aria-label="Add to Bag"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
