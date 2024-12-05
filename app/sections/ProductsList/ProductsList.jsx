import ProductCard from "../../components/ProductCard/ProductCard";
import {ProductsData} from "../../data/ProductsData";


const ProductsList = () => {
  return (
    <div className="mt-12">
      <div className="flex flex-wrap justify-center gap-8 mt-8">
        {ProductsData.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
