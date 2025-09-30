import { PrismaClient } from "@prisma/client";
import { LATEST_PRODUCTS_LIMIT } from "../constants";

const prisma = new PrismaClient();

export const getLatestProducts = async () => {
  // Implementation to fetch the latest products
  const products = await prisma.product.findMany({
    orderBy: {
      createdAt: "desc",
    },
    take: LATEST_PRODUCTS_LIMIT,
  });
  return products;
};

export const getProductBySlug = async (slug: string) => {
  // Implementation to fetch a product by its slug
  const product = await prisma.product.findFirst({
    where: { slug },
  });
  return product;
}
