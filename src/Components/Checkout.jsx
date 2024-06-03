import React, { useState } from "react";

const Checkout = () => {
  const [orderSubmitted, setOrderSubmitted] = useState(false);
  const [shippingInfo, setShippingInfo] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  });
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: "",
    expDate: "",
    cvv: "",
  });

  const handleChangeShipping = (e) => {
    const { name, value } = e.target;
    setShippingInfo({ ...shippingInfo, [name]: value });
  };

  const handleChangePayment = (e) => {
    const { name, value } = e.target;
    setPaymentInfo({ ...paymentInfo, [name]: value });
  };

  const handleSubmitOrder = () => {
    // Check if all shipping details are filled
    for (const key in shippingInfo) {
      if (shippingInfo[key] === "") {
        alert("Please fill in all shipping details.");
        return;
      }
    }

    // Check if all payment details are filled
    for (const key in paymentInfo) {
      if (paymentInfo[key] === "") {
        alert("Please fill in all payment details.");
        return;
      }
    }

    setOrderSubmitted(true);
  };

  const handleClosePopup = () => {
    setOrderSubmitted(false);
  };

  return (
    <div className="bg-gray-100">
      <div className="w-full max-w-3xl mx-auto p-8">
        <div className="bg-gray-800 p-8 rounded-lg shadow-md border dark:border-gray-700">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
            Checkout
          </h1>

          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-700 dark:text-white mb-2">
              Shipping Address
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="first_name"
                  className="block text-gray-700 dark:text-white mb-1"
                >
                  First Name
                </label>
                <input
                  required
                  type="text"
                  id="first_name"
                  name="firstName"
                  value={shippingInfo.firstName}
                  onChange={handleChangeShipping}
                  className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                />
              </div>
              <div>
                <label
                  htmlFor="last_name"
                  className="block text-gray-700 dark:text-white mb-1"
                >
                  Last Name
                </label>
                <input
                  required
                  type="text"
                  id="last_name"
                  name="lastName"
                  value={shippingInfo.lastName}
                  onChange={handleChangeShipping}
                  className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                />
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-700 dark:text-white mb-2">
              Payment Information
            </h2>
            <div className="mt-4">
              <label
                htmlFor="card_number"
                className="block text-gray-700 dark:text-white mb-1"
              >
                Card Number
              </label>
              <input
                required
                type="text"
                id="card_number"
                name="cardNumber"
                value={paymentInfo.cardNumber}
                onChange={handleChangePayment}
                className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
              />
            </div>
          </div>

          <div className="mt-8 flex justify-end">
            <button
              onClick={handleSubmitOrder}
              className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-700 dark:bg-teal-600 dark:text-white dark:hover:bg-teal-900"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>

      {orderSubmitted && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-md border dark:border-gray-700">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Order Submitted
            </h2>
            <p className="text-gray-700">
              Your order has been submitted successfully!
            </p>
            <button
              onClick={handleClosePopup}
              className="bg-teal-500 text-white px-4 py-2 rounded-lg mt-4 hover:bg-teal-700 dark:bg-teal-600 dark:text-white dark:hover:bg-teal-900"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
