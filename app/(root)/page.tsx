import ProductList from "@/components/shared/product/productList";
import sampleData from "@/db/sample-data";

const page = () => {
  return (
    <div>
      <ProductList
        title="Newest Arrivals"
        data={sampleData?.products}
        limit={4}
      />
    </div>
  );
};

export default page;
