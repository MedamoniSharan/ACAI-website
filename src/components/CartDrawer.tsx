import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, CheckCircle2, Coffee } from 'lucide-react';
import { CartItem } from '../types';
import confetti from 'canvas-confetti';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (cartId: string, delta: number) => void;
  onRemoveItem: (cartId: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [orderType, setOrderType] = useState<'dine-in' | 'pickup' | 'delivery'>('dine-in');
  const [tableNumber, setTableNumber] = useState<string>('Table 04');
  const [promoCode, setPromoCode] = useState<string>('');
  const [appliedDiscount, setAppliedDiscount] = useState<number>(0);
  const [isCheckingOut, setIsCheckingOut] = useState<boolean>(false);
  const [orderComplete, setOrderComplete] = useState<boolean>(false);

  if (!isOpen) return null;

  const subtotal = cart.reduce((sum, item) => sum + item.totalPrice, 0);
  const discountAmount = Math.round(subtotal * (appliedDiscount / 100));
  const taxes = Math.round((subtotal - discountAmount) * 0.05); // 5% GST
  const packagingFee = orderType === 'delivery' ? 30 : 0;
  const finalTotal = subtotal - discountAmount + taxes + packagingFee;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'SUPER20') {
      setAppliedDiscount(20);
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 },
      });
    } else {
      alert('Invalid code. Try "SUPER20" for 20% off!');
    }
  };

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setOrderComplete(true);
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.5 },
      });
    }, 1200);
  };

  const handleReset = () => {
    onClearCart();
    setOrderComplete(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-sm animate-fadeIn">
      <div className="w-full max-w-md bg-[#FAF7F2] h-full shadow-2xl flex flex-col justify-between border-l border-[#4A0E17]/15">
        {/* Header */}
        <div className="p-6 border-b border-[#4A0E17]/10 flex items-center justify-between bg-white/70 backdrop-blur-md">
          <div className="flex items-center gap-2.5">
            <ShoppingBag className="w-5 h-5 text-[#4A0E17]" />
            <h3 className="text-xl font-bold tracking-tight text-[#1d1d1f]">
              Your Bag ({cart.reduce((s, i) => s + i.quantity, 0)})
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-[#4A0E17]/10 text-[#4A0E17] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {orderComplete ? (
          <div className="flex-1 p-8 flex flex-col items-center justify-center text-center space-y-4">
            <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-2xl border border-[#4A0E17]/20 animate-bounce">
              <img
                src="/logos/acai-in-badge.png"
                alt="AÇAI.IN"
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="text-2xl font-bold tracking-tight text-[#1d1d1f]">
              Order Placed Successfully!
            </h4>
            <p className="text-xs text-[#4A0E17]/70 max-w-xs">
              Your barista has received your order. We are carefully preparing your handcrafted bowl & drinks fresh!
            </p>
            <div className="p-4 rounded-2xl bg-white border border-[#4A0E17]/10 text-xs w-full text-left space-y-1.5 shadow-sm">
              <div className="flex justify-between font-semibold">
                <span>Order ID:</span>
                <span className="font-mono text-[#9B1E36]">#ACAI-{Math.floor(1000 + Math.random() * 9000)}</span>
              </div>
              <div className="flex justify-between text-[#4A0E17]/80">
                <span>Service:</span>
                <span className="capitalize">{orderType} ({tableNumber})</span>
              </div>
              <div className="flex justify-between text-[#4A0E17]/80">
                <span>Estimated Time:</span>
                <span>8 - 12 mins</span>
              </div>
              <div className="flex justify-between font-bold border-t border-[#4A0E17]/10 pt-1.5">
                <span>Total Paid:</span>
                <span className="text-[#4A0E17]">₹{finalTotal}</span>
              </div>
            </div>
            <button
              onClick={handleReset}
              className="mt-4 px-8 py-3 rounded-full bg-[#4A0E17] text-white text-xs font-semibold tracking-wide hover:bg-[#32070e] transition-colors"
            >
              Back to Cafe
            </button>
          </div>
        ) : cart.length === 0 ? (
          <div className="flex-1 p-8 flex flex-col items-center justify-center text-center space-y-3">
            <div className="w-14 h-14 rounded-full bg-[#4A0E17]/5 flex items-center justify-center text-[#4A0E17]/40">
              <ShoppingBag className="w-7 h-7" />
            </div>
            <h4 className="text-lg font-bold tracking-tight text-[#1d1d1f]">
              Your Bag is Empty
            </h4>
            <p className="text-xs text-[#4A0E17]/60 max-w-xs">
              Explore our fresh organic açaí bowls, artisan cookies, and cold brew coffees.
            </p>
            <button
              onClick={onClose}
              className="mt-2 px-6 py-2.5 rounded-full bg-[#4A0E17] text-white text-xs font-medium"
            >
              Start Exploring
            </button>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {/* Dining / Pickup Options */}
            <div className="p-1 rounded-2xl bg-white border border-[#4A0E17]/10 grid grid-cols-3 gap-1 text-center text-xs font-semibold">
              {(['dine-in', 'pickup', 'delivery'] as const).map((type) => (
                <button
                  key={type}
                  onClick={() => setOrderType(type)}
                  className={`py-2 rounded-xl transition-all capitalize ${
                    orderType === type
                      ? 'bg-[#4A0E17] text-white shadow-sm'
                      : 'text-[#4A0E17]/70 hover:text-[#4A0E17]'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>

            {/* Table Number or Pickup Note */}
            {orderType === 'dine-in' && (
              <div className="flex items-center justify-between p-3 rounded-xl bg-white/80 border border-[#4A0E17]/10 text-xs">
                <span className="text-[#4A0E17]/70 flex items-center gap-1.5">
                  <Coffee className="w-4 h-4 text-[#9B1E36]" />
                  Seating Table:
                </span>
                <input
                  type="text"
                  value={tableNumber}
                  onChange={(e) => setTableNumber(e.target.value)}
                  className="w-24 px-2 py-1 rounded bg-[#FAF7F2] border text-center font-bold text-[#4A0E17] outline-none"
                />
              </div>
            )}

            {/* Cart Items List */}
            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={item.cartId}
                  className="p-3.5 rounded-2xl bg-white border border-[#4A0E17]/10 flex gap-3 shadow-xs"
                >
                  {item.product.image ? (
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-16 h-16 rounded-xl object-cover"
                    />
                  ) : (
                    <div className="w-16 h-16 rounded-xl bg-[#FAF7F2] border border-[#4A0E17]/10 shrink-0" />
                  )}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between">
                        <h5 className="font-bold text-sm text-[#1d1d1f] line-clamp-1">
                          {item.product.name}
                        </h5>
                        <button
                          onClick={() => onRemoveItem(item.cartId)}
                          className="text-[#4A0E17]/40 hover:text-[#9B1E36] transition-colors p-1"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Selected options */}
                      {Object.entries(item.selectedOptions).length > 0 && (
                        <div className="text-[11px] text-[#4A0E17]/70 mt-0.5 line-clamp-2">
                          {Object.entries(item.selectedOptions)
                            .map(([k, v]) => `${k}: ${v}`)
                            .join(' • ')}
                        </div>
                      )}

                      {item.notes && (
                        <div className="text-[10px] text-[#9B1E36] italic mt-0.5">
                          Note: "{item.notes}"
                        </div>
                      )}
                    </div>

                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-[#4A0E17]/5">
                      <div className="flex items-center gap-2 bg-[#FAF7F2] rounded-full p-0.5 border border-[#4A0E17]/10">
                        <button
                          onClick={() => onUpdateQuantity(item.cartId, -1)}
                          className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-xs text-[#4A0E17]"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-semibold text-[#221B19] w-4 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.cartId, 1)}
                          className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-xs text-[#4A0E17]"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <span className="font-bold text-sm text-[#4A0E17]">
                        ₹{item.totalPrice}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Promo Code Input */}
            <form onSubmit={handleApplyPromo} className="flex gap-2">
              <input
                type="text"
                placeholder="Promo Code (SUPER20)"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                className="flex-1 px-4 py-2 rounded-xl bg-white border border-[#4A0E17]/15 text-xs text-[#221B19] outline-none uppercase font-mono"
              />
              <button
                type="submit"
                className="px-4 py-2 rounded-xl bg-[#4A0E17] text-white text-xs font-semibold"
              >
                Apply
              </button>
            </form>
          </div>
        )}

        {/* Footer Billing Details */}
        {!orderComplete && cart.length > 0 && (
          <div className="p-6 bg-white border-t border-[#4A0E17]/10 space-y-4">
            <div className="space-y-1.5 text-xs text-[#4A0E17]/80">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{subtotal}</span>
              </div>
              {appliedDiscount > 0 && (
                <div className="flex justify-between text-[#9B1E36] font-medium">
                  <span>Discount ({appliedDiscount}%)</span>
                  <span>-₹{discountAmount}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Taxes (5% GST)</span>
                <span>₹{taxes}</span>
              </div>
              {orderType === 'delivery' && (
                <div className="flex justify-between">
                  <span>Delivery fee</span>
                  <span>₹{packagingFee}</span>
                </div>
              )}
              <div className="flex justify-between text-base font-bold text-[#1d1d1f] pt-2 border-t border-[#4A0E17]/10">
                <span>Final Total</span>
                <span className="text-[#4A0E17]">₹{finalTotal}</span>
              </div>
            </div>

            <button
              onClick={handleCheckout}
              disabled={isCheckingOut}
              className="w-full py-4 rounded-full bg-[#4A0E17] hover:bg-[#32070e] text-white text-xs sm:text-sm font-semibold tracking-wide flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all"
            >
              {isCheckingOut ? (
                <span>Confirming Order...</span>
              ) : (
                <>
                  <span>Pay & Place Order • ₹{finalTotal}</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
