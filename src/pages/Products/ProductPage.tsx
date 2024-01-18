import { useEffect, useState } from "react";
import DetailedCard from "../../components/common/DetailedCard/DetailedCard";
import Filter from "../../components/common/Filter/Filter";
import ProductCard from "../../components/common/ProductCard/ProductCard";
import $firebaseService from "../../service/FirebaseService";

const ProductPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsData = await $firebaseService.getProducts();
        console.log(productsData);
        // setProducts(productsData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex w-full gap-4">
      <Filter />
      {/* <div className="flex w-full flex-wrap gap-4">
        {products.map((item, index) => (
          <ProductCard key={index} {...item} />
        ))}
        <DetailedCard />
      </div> */}
    </div>
  );
};

export default ProductPage;
