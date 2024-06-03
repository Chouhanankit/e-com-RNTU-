import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../Api";
import { PulseLoader } from "react-spinners";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const data = await getProduct(id);
      setProduct(data);
    };
    fetchProduct();
  }, [id]);

  if (!product)
    return (
      <h1 className="h-[80vh] loading flex justify-center py-10">
        <PulseLoader
          loading={true}
          color="gray"
          style={{ paddingBlock: "20px" }}
          className="flex justify-center items-center"
        />
      </h1>
    );

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="backdrop-blur-lg bg-white bg-opacity-30 rounded-lg shadow-lg p-6 max-w-3xl mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <img
            src={product?.image}
            alt={product.name}
            className="w-full md:w-1/2 h-48 object-cover rounded-lg mb-4 md:mb-0 md:mr-6"
          />
          <div className="text-center md:text-left">
            <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
            <p className="text-gray-700 mb-4">{product.description}</p>
            <p className="text-yellow-600">Rs. {product.price}</p>
            <img
              className="h-6 mt-2"
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcKyiO9JWKA5mSBNrySqL-B-RzGdq5wAK2Dw&s"
              }
              alt="veg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
