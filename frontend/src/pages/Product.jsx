import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProduct from "../components/RelatedProduct";
function Product() {
  const { productId } = useParams();
  const { products, currency,addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [size, setSize] = useState();
  const [image, setImage] = useState("");

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };
  useEffect(() => {
    fetchProductData();
  }, [productId, products]);
  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* product data */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* product Image */}
        <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={index}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img className="w-full h-auto" src={image} alt="" />
          </div>
        </div>

        {/* product info */}
        <div className="flex flex-col">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex item-center h-4 w-6 gap-1 mt-2">
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_dull_icon} alt="" className="w-3 5" />
            <p className="px-2">(122)</p>
          </div>
          <p className="mt-3 font-medium text-3xl">
            {currency}
            {productData.price}
          </p>
          <p className="text-gray-600 mt-3 md:w-4/5">
            {productData.description}
          </p>
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div>
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  className={`mx-2 px-3 bg-gray-200 p-2 ${
                    item === size ? "border-orange-500 bg-orange-400" : ""
                  }`}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button onClick={()=>addToCart(productData._id,size)} className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700 w-[180px]">
            ADD TO CART
          </button>
          <hr className="mt-8 sm:w-4/5"/>
          <div className="pt-4">
            <p>100% Original Product</p>
            <p>Cash on delivery available on this product</p>
            <p>Easy return policy within 7 days</p>
          </div>
        </div>
      </div>
      {/* description and review */}
      <div className="mt-20">
        <div className="flex">
          <p className="border py-2 px-5">Description</p>
          <p className="border py-2 px-5">Review(122)</p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-gray-700">
          <p>"Your one-stop shop for the latest trends, best deals, and fast delivery – all in one place."</p>
        </div>
      </div>
      {/* related products */}
      <RelatedProduct category={productData.category} subCategory={productData.subCategory}/>
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
}

export default Product;
