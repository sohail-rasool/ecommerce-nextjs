import { insertProductSchema } from "@/lib/validators";
import { z } from 'zod';


export type ProductTypes = z.infer<typeof insertProductSchema> & {
  id: string;
  rating: number;
  numReviews: number;
  createdAt: Date;
};