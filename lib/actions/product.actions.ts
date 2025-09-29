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
