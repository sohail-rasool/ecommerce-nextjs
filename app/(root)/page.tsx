import ProductList from "@/components/shared/product/productList";
import { getLatestProducts } from "@/lib/actions/product.actions";

const page = async() => {
  const products = await getLatestProducts();
  return (
    <div>
      <ProductList
        title="Newest Arrivals"
        data={products}
      />
    </div>
  );
};

export default page;
