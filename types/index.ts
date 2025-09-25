export type ProductTypes = {
  name: string;
  slug: string;
  category: string;
  description: string;
  images: Array<string>;
  price: number;
  brand: string;
  rating: number;
  numReviews: number;
  stock: number;
  isFeatured: boolean;
  banner: string | null;
};