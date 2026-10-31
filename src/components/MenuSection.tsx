import React, { useState } from 'react';
import { Plus, Star, Flame, Eye } from 'lucide-react';
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

  const openProduct = (product: Product) => {
    if (product.id === 'diy-bowl') {
      onOpenDIY();
      return;
    }
    onOpenProductModal(product);
  };

  const handleQuickAdd = (e: React.MouseEvent, product: Product) => {
    e.stopPropagation();
    if (product.id === 'diy-bowl') {
      onOpenDIY();
      return;
    }
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
        <div className="mb-8 text-center sm:mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#9B1E36]">Everyday Ritual</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#1d1d1f] sm:text-4xl">
            Menu
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-xs font-semibold uppercase tracking-[0.14em] text-[#4A0E17]/70">
            All prices are in INR. Taxes applicable as extra.
          </p>
          <p className="mx-auto mt-2 max-w-xl text-xs text-[#4A0E17]/70">
            Açaí bowls: extra toppings ₹39 or ₹49. Bowls are Regular / Large. Smoothies are 12oz / 16oz.
          </p>
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
                onClick={() => openProduct(product)}
                className="group relative bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl border border-[#4A0E17]/10 p-3.5 sm:p-5 flex flex-col justify-between hover:shadow-[0_20px_40px_-15px_rgba(74,14,23,0.12)] hover:-translate-y-1 sm:hover:-translate-y-1.5 transition-all duration-300 cursor-pointer"
              >
                {/* Image Wrap */}
                <div className="relative w-full h-44 sm:h-52 rounded-xl sm:rounded-2xl overflow-hidden bg-[#FAF7F2] mb-3.5 sm:mb-4">
                  {product.image ? (
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-105"
                      style={product.imagePosition ? { objectPosition: product.imagePosition } : undefined}
                      loading="lazy"
                    />
                  ) : null}

                  {product.image ? (
                    <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-black/35 to-transparent pointer-events-none" />
                  ) : null}

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
                      {product.reviewCount > 0 && (
                        <span className="flex items-center gap-0.5 font-medium text-[#D4AF37]">
                          <Star className="w-3 h-3 fill-current" />
                          {product.rating}
                        </span>
                      )}
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
                        {product.priceDisplay || `₹${product.price}`}
                      </span>
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
