export interface TestRes {}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  rating: number;
  ratingCount: number;
  availableVariants: string[];
  images: string[];
  thumbnail: string;
  isOnSale: boolean;
  stock: number;
}
