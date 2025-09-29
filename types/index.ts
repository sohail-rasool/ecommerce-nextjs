import { Decimal } from "@prisma/client/runtime/library";

export type ProductTypes = {
  name: string;
  slug: string;
  category: string;
  description: string;
  images: Array<string>;
  price: Decimal;
  brand: string;
  rating: Decimal;
  numReviews: number;
  stock: number;
  isFeatured: boolean;
  banner: string | null;
};