import { ProductTypes } from "@/types";
import ProductCard from "./productCard";

type ProductListProps = {
  title: string;
  data: Array<ProductTypes>;
};

const ProductList = ({ title, data }: ProductListProps) => {
  return (
    <div>
      <h1 className="h2-bold mb-4">{title}</h1>
      {data?.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      ) : (
        <h1 className="h2-bold">No Products Found</h1>
      )}
    </div>
  );
};

export default ProductList;
