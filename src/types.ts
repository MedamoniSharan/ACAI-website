export type Category =
  | 'all'
  | 'bowls'
  | 'smoothies'
  | 'coffee'
  | 'matcha-ube'
  | 'tiramisu'
  | 'cookies';

export interface ProductOption {
  name: string;
  choices: {
    label: string;
    priceDelta?: number;
  }[];
}

export interface Product {
  id: string;
  name: string;
  category: Category;
  categoryLabel: string;
  price: number;
  priceDisplay?: string; // e.g. "₹129 / ₹169"
  description: string;
  ingredients: string[];
  image: string;
  imagePosition?: string;
  secondaryImage?: string;
  calories?: string;
  prepTime?: string;
  tags?: ('Signature' | 'Bestseller' | 'Organic' | 'High Protein' | 'Vegan' | 'Gluten Free' | 'Antioxidant')[];
  options?: ProductOption[];
  rating: number;
  reviewCount: number;
  badge?: string;
  accentColor?: string;
}

export interface CartItem {
  cartId: string;
  product: Product;
  quantity: number;
  selectedOptions: Record<string, string>;
  unitPrice: number;
  totalPrice: number;
  notes?: string;
}

export interface DIYBowlState {
  base: {
    id: string;
    name: string;
    description: string;
    color: string;
    price: number;
    image: string;
  };
  fruits: string[];
  toppings: string[];
  drizzles: string[];
  sweetness: string;
  size: 'Standard (350ml)' | 'Grande (500ml)';
}
