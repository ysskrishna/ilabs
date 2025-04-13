export interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  category: string;
  features: string[];
  url: string;
  productHuntId?: string;
  featured?: boolean;
} 