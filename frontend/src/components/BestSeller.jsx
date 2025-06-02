import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import ProductItem from "./ProductItem";
function BestSeller() {
  
    const { products } = useContext(ShopContext);
  // console.log(products);
  const [BestSeller, setBestSeller] = useState([]);
  useEffect(() => {
    const bestproduct=products.filter((items)=>(items.bestseller));
    setBestSeller(bestproduct.slice(0,5));
  }, [products]);
  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={"BEST"} text2={"SELLER"} />
        <p className="w-3/4 m-auto text-xs sm:text:base text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          quidem sapiente necessitatibus quia, soluta non adipisci enim
          
        </p>
      </div>
      {/* rendering products */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-5 gap-x-2">
        {BestSeller.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  )

}

export default BestSeller;
