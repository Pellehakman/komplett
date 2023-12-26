import Filter from "../../components/common/Filter/Filter";
import ProductCard from "../../components/common/ProductCard/ProductCard";

const ProductPage = () => {
  return (
    <div className="flex w-full gap-4">
      <Filter />
      <div className="flex w-full flex-wrap gap-4">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default ProductPage;
