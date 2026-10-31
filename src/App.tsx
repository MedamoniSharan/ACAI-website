import React, { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroClean } from './components/HeroClean';
import { WhatIsAcai } from './components/WhatIsAcai';
import { SimpleHome } from './components/SimpleHome';
import { MenuSection } from './components/MenuSection';
import { DIYBowlBuilder } from './components/DIYBowlBuilder';
import { ProductModal } from './components/ProductModal';
import { CartDrawer } from './components/CartDrawer';
import { StoryAmbience } from './components/StoryAmbience';
import { LocationFooter } from './components/LocationFooter';
import { Category, Product, CartItem } from './types';
import { ShoppingBag } from 'lucide-react';

export const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isDIYOpen, setIsDIYOpen] = useState<boolean>(false);
  const [view, setView] = useState<'home' | 'acai'>('home');
  const [pendingScroll, setPendingScroll] = useState<string | null>(null);

  // Cart state
  const [cart, setCart] = useState<CartItem[]>([]);

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
    setView('home');
    setPendingScroll('menu');
  };

  const openDIY = () => {
    setIsDIYOpen(true);
  };

  const openAcaiPage = () => {
    setView('acai');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateHome = (target: 'home' | 'menu' | 'gallery' | 'contact') => {
    if (target === 'menu') setSelectedCategory('all');
    const id = target === 'home' ? 'hero' : target === 'menu' ? 'menu' : target === 'gallery' ? 'ambience' : 'locations';
    setView('home');
    setPendingScroll(id);
  };

  useEffect(() => {
    if (view !== 'home' || !pendingScroll) return;
    const id = pendingScroll;
    const timer = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      setPendingScroll(null);
    }, 60);
    return () => window.clearTimeout(timer);
  }, [view, pendingScroll]);

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#221B19] font-sans">
      {/* Top Navigation */}
      <Navbar
        cart={cart}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenDIY={openDIY}
        onOpenAcai={openAcaiPage}
        onNavigate={navigateHome}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {view === 'acai' ? (
        <WhatIsAcai onOrder={() => handleScrollToMenu('bowls')} onOpenDIY={openDIY} />
      ) : (
        <>
      <HeroClean
        onExploreMenu={() => handleScrollToMenu('all')}
        onOpenDIY={openDIY}
        onOpenAcai={openAcaiPage}
        onAddToCart={handleAddToCart}
      />

      <SimpleHome onSelectCategory={handleScrollToMenu} />

      {/* Full Menu Section with Categories & Filters */}
      <MenuSection
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        searchQuery={searchQuery}
        onOpenProductModal={(product) => setSelectedProduct(product)}
        onAddToCart={handleAddToCart}
        onOpenDIY={openDIY}
      />

      {/* Story & Cafe Ambience (inspired by user uploaded Beanona / Aromé references) */}
      <StoryAmbience />
        </>
      )}

      {/* Locations & Footer */}
      <LocationFooter onOpenAcai={openAcaiPage} onNavigate={navigateHome} />

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
