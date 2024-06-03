import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProducts, deleteProduct } from "../Api";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../features/Cart/CartSlice";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch()
  const { users } = useSelector((state) => state.auth);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    await deleteProduct(id);
    setProducts(products.filter((product) => product._id !== id));
  };

  const handleAdd = (product) => {
    dispatch(add(product));
  };

  if(products.length == 0){
    return <h1 className="text-center py-36 text-4xl text-gray-600 font-bold ">No Products</h1>
  }

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div
            key={product._id}
            className="card bg-white shadow-lg rounded-lg p-4"
          >
            <Link to={`/products/${product._id}`}>
              <div className="h-48 w-full overflow-hidden rounded-t-lg">
                <img
                  src={product?.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{product.name}</h2>
                <p className="text-gray-700 mb-2">{product.description}</p>
                <p className="text-gray-900 font-semibold mb-4">
                  Rs. {product.price}
                </p>
              </div>
            </Link>
            {users.isAdmin ? (
              <>
                <button
                  onClick={() => handleDelete(product._id)}
                  className="w-full text-white bg-red-600 hover:bg-red-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Delete
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => handleAdd(product)}
                  className="w-full text-white bg-red-600 hover:bg-red-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Add to cart
                </button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
