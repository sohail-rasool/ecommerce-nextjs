-- CreateTable
CREATE TABLE "public"."Product" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "images" TEXT[],
    "price" DECIMAL(10,2) NOT NULL,
    "brand" TEXT NOT NULL,
    "rating" DECIMAL(2,1) NOT NULL,
    "numReviews" INTEGER NOT NULL,
    "stock" INTEGER NOT NULL,
    "isFeatured" BOOLEAN NOT NULL DEFAULT false,
    "banner" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Product_slug_key" ON "public"."Product"("slug");
