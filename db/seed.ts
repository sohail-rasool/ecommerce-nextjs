import { PrismaClient } from "@prisma/client";
import sampleData from "./sample-data";

const prisma = new PrismaClient();

async function main() {
  // 🧹 Delete all existing products
  await prisma.product.deleteMany();

  // 🌱 Insert new seed data
  await prisma.product.createMany({
    data: sampleData.products,
  });

  console.log("✅ Products seeded");
}

main()
  .catch((e) => {
    console.error("❌ Seed failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
