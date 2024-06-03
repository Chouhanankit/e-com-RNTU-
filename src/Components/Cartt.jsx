import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increase, decrease, remove } from "../features/Cart/CartSlice";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const Cartt = () => {
  const { CartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const [promo, setPromo] = useState("");
  const [total, setTotal] = useState(0);
  const [discountedTotal, setDiscountedTotal] = useState(0);
  const [promoApplied, setPromoApplied] = useState(false);
  const [freeShipping, setFreeShipping] = useState(false);

  useEffect(() => {
    const newTotal = CartItems.reduce((acc, item) => acc + item.price * item.qty, 0);
    setTotal(newTotal);
    setDiscountedTotal(newTotal);
    setPromoApplied(false); // Reset promo applied status when cart items change
    setFreeShipping(false); // Reset free shipping status when cart items change
  }, [CartItems]);

  const handlePromo = (e) => {
    e.preventDefault();
    if (promoApplied) {
      toast.error("Promo code already applied!");
      return;
    }
    const formattedPromo = promo.trim().toUpperCase();
    if (formattedPromo !== "") {
      const discounted = total - (total * 10) / 100;
      setDiscountedTotal(discounted);
      setPromoApplied(true);
      setFreeShipping(true); // Apply free shipping
      toast.success("Promo Applied!! Free Shipping Applied!");
    } else {
      setDiscountedTotal(total);
      toast.error("Invalid Promo Code");
    }
  };

  const handleRemove = (id) => {
    dispatch(remove(id));
  };

  const handleIncrease = (id) => {
    dispatch(increase(id));
  };

  const handleDecrease = (id) => {
    dispatch(decrease(id));
  };

  if (CartItems.length === 0) {
    return (
      <div className="h-[60vh] w-full flex justify-center items-center">
        <iframe
          className="text-center w-full"
          src="https://lottie.host/embed/0727a714-0f9f-4185-b86d-2f50e44532e3/GXQf4v8beN.json"
        ></iframe>
      </div>
    );
  }

  return (
    <div className="container mx-auto mt-10">
      <div className="sm:flex shadow-md my-10">
        <div className="w-full sm:w-3/4 bg-white px-10 py-10">
          <div className="flex justify-between border-b pb-8">
            <h1 className="font-semibold text-2xl">Shopping Cart</h1>
            <h2 className="font-semibold text-2xl">
              {CartItems.length} {CartItems.length === 1 ? "Item" : "Items"}
            </h2>
          </div>
          {CartItems.map((item) => (
            <div
              key={item._id}
              className="md:flex items-stretch py-8 md:py-10 lg:py-8 border-t border-gray-50"
            >
              <div className="md:w-4/12 2xl:w-1/4 w-full">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full object-center object-cover md:block hidden"
                />
                <img
                  src={`http://localhost:5005/${item.image}`}
                  alt={item.name}
                  className="md:hidden w-full h-full object-center object-cover"
                />
              </div>
              <div className="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
                <p className="text-xs leading-3 text-gray-800 md:pt-0 pt-4">
                  {item._id}
                </p>
                <div className="flex items-center justify-between w-full">
                  <p className="text-base font-black leading-none text-gray-800">
                    {item.name}
                  </p>
                  <div className="flex items-center">
                    <button
                      onClick={() => handleDecrease(item._id)}
                      className="px-2 py-1 text-sm border border-gray-200"
                    >
                      -
                    </button>
                    <span className="px-3 py-1 border-t border-b border-gray-200">
                      {item.qty}
                    </span>
                    <button
                      onClick={() => handleIncrease(item._id)}
                      className="px-2 py-1 text-sm border border-gray-200"
                    >
                      +
                    </button>
                  </div>
                </div>
                <p className="text-xs leading-3 text-gray-600 pt-2">
                  Price: Rs. {item.price}
                </p>
                <div className="flex items-center justify-between pt-5">
                  <div className="flex items-center">
                    <p className="text-xs leading-3 underline text-gray-800 cursor-pointer">
                      Add to favorites
                    </p>
                    <p
                      onClick={() => handleRemove(item._id)}
                      className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer"
                    >
                      Remove
                    </p>
                  </div>
                  <p className="text-base font-black leading-none text-gray-800">
                    Rs. {item.price * item.qty}
                  </p>
                </div>
              </div>
            </div>
          ))}
          <Link
            to={"/products"}
            className="flex font-semibold text-indigo-600 text-sm mt-10"
          >
            <svg
              className="fill-current mr-2 text-indigo-600 w-4"
              viewBox="0 0 448 512"
            >
              <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
            </svg>
            Continue Shopping
          </Link>
        </div>
        <div id="summary" className="w-full sm:w-1/4 md:w-1/2 px-8 py-10">
          <h1 className="font-semibold text-2xl border-b pb-8">
            Order Summary
          </h1>
          <div className="flex justify-between mt-10 mb-5">
            <span className="font-semibold text-sm uppercase">
              Items {CartItems.length}
            </span>
            <span className="font-semibold text-sm">Rs. {total}</span>
          </div>
          <div>
            <label className="font-medium inline-block mb-3 text-sm uppercase">
              Shipping
            </label>
            <select className="block p-2 text-gray-600 w-full text-sm" disabled={freeShipping}>
              <option>Standard shipping - Rs. 100.00</option>
            </select>
          </div>
          <form className="py-10" onSubmit={handlePromo}>
            <label
              htmlFor="promo"
              className="font-semibold inline-block mb-3 text-sm uppercase"
            >
              Promo Code
            </label>
            <span className="flex">
              <input
                type="text"
                id="promo"
                value={promo}
                placeholder="Enter your code"
                className="p-2 text-sm w-full"
                onChange={(e) => setPromo(e.target.value)}
              />
              <button
                className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase"
                type="submit"
              >
                Apply
              </button>
            </span>
          </form>
          <div className="border-t mt-8">
            <div className="flex font-semibold justify-between py-6 text-sm uppercase">
              <span>Total cost</span>
              <span>Rs. {freeShipping ? discountedTotal : discountedTotal + 100}</span>
            </div>
            <Link to={"/checkout"}>
              <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
                Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cartt;
