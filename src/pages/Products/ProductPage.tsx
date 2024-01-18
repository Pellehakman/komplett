// ProductPage.tsx
import { useEffect, useState } from "react";
import DetailedCard from "../../components/common/DetailedCard/DetailedCard";
import Filter from "../../components/common/Filter/Filter";
import ProductCard from "../../components/common/ProductCard/ProductCard";
import $firebaseService from "../../service/FirebaseService";
import { DocumentData } from "firebase/firestore";
import { Product } from "../../models/models"; // Import the Product type from types.ts

const ProductPage = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsData: DocumentData[] =
          await $firebaseService.getProducts();

        // Explicitly cast DocumentData[] to Product[]
        const castedProductsData: Product[] = productsData.map((docData) => ({
          id: docData.id,
          name: docData.name,
          type: docData.type,
          description: docData.description,
          memory: docData.memory,
          stock: docData.stock,
          price: docData.price,
          image_urls: docData.image_urls,
          brand: docData.brand,
          manufacturer: docData.manufacturer,
          model: docData.model,
          brand_warranty_months: docData.brand_warranty_months,
          EAN: docData.EAN,
        }));

        console.log(castedProductsData);
        setProducts(castedProductsData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex w-full gap-4">
      <Filter />
      <div className="flex w-full flex-wrap gap-4">
        {products.map((item, index) => (
          <ProductCard key={index} {...item} />
        ))}
        {/* <DetailedCard /> */}
      </div>
    </div>
  );
};

export default ProductPage;
