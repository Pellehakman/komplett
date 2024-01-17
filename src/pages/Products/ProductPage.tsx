import DetailedCard from "../../components/common/DetailedCard/DetailedCard";
import Filter from "../../components/common/Filter/Filter";
import ProductCard from "../../components/common/ProductCard/ProductCard";

import $firebaseService from "@/helpers/FirebaseService.jsx";

import data from "../../db/db.json";

const ProductPage = async () => {
  const data = await $firebaseService.getProducts();

  return (
    <div className="flex w-full gap-4">
      <Filter />
      <div className="flex w-full flex-wrap gap-4">
        {data.graphics_cards.map((item, index) => (
          <ProductCard key={index} {...item} />
        ))}
        <DetailedCard />
      </div>
    </div>
  );
};

export default ProductPage;
