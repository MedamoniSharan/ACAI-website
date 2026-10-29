import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroClean } from './components/HeroClean';
import { ParallaxShowcase } from './components/ParallaxShowcase';
import { MenuSection } from './components/MenuSection';
import { DIYBowlBuilder } from './components/DIYBowlBuilder';
import { ProductModal } from './components/ProductModal';
import { CartDrawer } from './components/CartDrawer';
import { StoryAmbience } from './components/StoryAmbience';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationFooter } from './components/LocationFooter';
import { Category, Product, CartItem } from './types';
import { ShoppingBag } from 'lucide-react';

export const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isDIYOpen, setIsDIYOpen] = useState<boolean>(false);

  // Cart state
  const [cart, setCart] = useState<CartItem[]>([
    // Initial sample item for delightful first impression
    {
      cartId: 'init-1',
      product: {
        id: 'classic-acai-cream',
        name: 'Classic Açaí Cream',
        category: 'smoothies',
        categoryLabel: 'Açaí & Smoothies',
        price: 329,
        description: 'Wild-harvested organic Amazonian açaí blended with sweet strawberries and oat milk.',
        ingredients: ['Pure Amazonian Açaí', 'Strawberries', 'Oat Milk', 'Banana'],
        image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=800&q=80',
        calories: '280 kcal',
        rating: 4.9,
        reviewCount: 142,
      },
      quantity: 1,
      selectedOptions: { 'Milk Base': 'Oat Milk (Barista Edition)' },
      unitPrice: 329,
      totalPrice: 329,
    },
  ]);

  const handleAddToCart = (newItem: CartItem) => {
    setCart((prev) => {
      // Check if duplicate with same options
      const existingIdx = prev.findIndex(
        (item) =>
          item.product.id === newItem.product.id &&
          JSON.stringify(item.selectedOptions) === JSON.stringify(newItem.selectedOptions) &&
          item.notes === newItem.notes
      );

      if (existingIdx > -1) {
        const updated = [...prev];
        updated[existingIdx].quantity += newItem.quantity;
        updated[existingIdx].totalPrice =
          updated[existingIdx].quantity * updated[existingIdx].unitPrice;
        return updated;
      } else {
        return [newItem, ...prev];
      }
    });

    // Open cart drawer so user sees item added
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (cartId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.cartId === cartId) {
            const newQty = item.quantity + delta;
            return {
              ...item,
              quantity: newQty,
              totalPrice: newQty * item.unitPrice,
            };
          }
          return item;
        })
        .filter((item) => item.quantity > 0)
    );
  };

  const handleRemoveItem = (cartId: string) => {
    setCart((prev) => prev.filter((item) => item.cartId !== cartId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const handleScrollToMenu = (category?: Category) => {
    if (category) {
      setSelectedCategory(category);
    }
    const menuEl = document.getElementById('menu');
    if (menuEl) {
      menuEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#221B19] font-sans">
      {/* Top Navigation */}
      <Navbar
        cart={cart}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenDIY={() => setIsDIYOpen(true)}
        onSelectCategory={handleScrollToMenu}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* Clean Apple-Style Hero Showcase */}
      <div id="hero">
        <HeroClean
          onExploreMenu={() => handleScrollToMenu('all')}
          onOpenDIY={() => setIsDIYOpen(true)}
          onAddToCart={handleAddToCart}
        />
      </div>

      {/* Apple-Style Bento Parallax Showcase */}
      <ParallaxShowcase onSelectCategory={handleScrollToMenu} />

      {/* Full Menu Section with Categories & Filters */}
      <MenuSection
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        searchQuery={searchQuery}
        onOpenProductModal={(product) => setSelectedProduct(product)}
        onAddToCart={handleAddToCart}
        onOpenDIY={() => setIsDIYOpen(true)}
      />

      {/* Story & Cafe Ambience (inspired by user uploaded Beanona / Aromé references) */}
      <StoryAmbience />

      {/* Reviews & Social Proof */}
      <ReviewsSection />

      {/* Locations & Footer */}
      <LocationFooter />

      {/* D.I.Y Bowl Interactive Builder Modal */}
      <DIYBowlBuilder
        isOpen={isDIYOpen}
        onClose={() => setIsDIYOpen(false)}
        onAddToCart={handleAddToCart}
      />

      {/* Detailed Product Customization Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Slide-out Cart & Checkout Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Floating Mobile Bottom Pill for Quick Bag View */}
      {totalCartCount > 0 && !isCartOpen && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 sm:hidden">
          <button
            onClick={() => setIsCartOpen(true)}
            className="flex items-center gap-3 px-6 py-3.5 rounded-full bg-[#4A0E17] text-white shadow-2xl border border-white/20 backdrop-blur-lg animate-bounce"
          >
            <ShoppingBag className="w-4 h-4 text-[#D4AF37]" />
            <span className="text-xs font-semibold">
              View Bag ({totalCartCount}) • ₹
              {cart.reduce((s, i) => s + i.totalPrice, 0)}
            </span>
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
