// src/Components/ProductForm.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [showModal, setShowModal] = useState(false); // State to control modal visibility

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("image", image);

    try {
      const response = await fetch("https://best-deal-backend.onrender.com/api/products", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setShowModal(true); // Show the modal on successful submission
      } else {
        const errorData = await response.json();
        console.error("Error:", errorData.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleModalClose = () => {
    setShowModal(false);
    navigate("/products"); // Navigate to products page after closing the modal
  };

  return (
    <div className="w-full flex flex-col items-center justify-center my-10 px-4 md:px-10">
      <h1 className="text-lg font-semibold mb-4">Enter Product Details</h1>
      <form onSubmit={handleSubmit} className="w-full lg:w-1/3 px-10 py-10 items-center bg-slate-200">
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            maxLength={35}
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Image:</label>
          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            required
          />
        </div>
        <button type="submit" className="bg-gray-500 rounded-sm p-1 px-4 hover:bg-green-600 text-white">Create Product</button>
      </form>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-5 rounded shadow-lg">
            <h2 className="text-lg font-bold mb-2">Product Created Successfully!</h2>
            <p>Your product has been added to the database.</p>
            <button
              className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleModalClose}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductForm;
