import React, { useState } from "react";

function UserForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    }
    if (!formData.age.trim()) {
      newErrors.age = "Age is required";
    }
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      // Form submission logic goes here
      console.log("Form submitted:", formData);
    }
    console.log("hello")
  };

  return (
    <section className="bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 md:h-screen lg:h-[90.6vh] lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md md:max-w-xl xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-white text-xl font-semibold">Data Entry Foam</h1>
            <form
              onSubmit={handleSubmit}
              className="bg-gray-500 shadow-md rounded px-8 pt-6 pb-8 mb-4"
            >
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlhtmlhtmlFor="name"
                >
                  Name
                </label>
                <input
                  className={`appearance-none border ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                  id="name"
                  type="text"
                  placeholder="Your name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs italic">{errors.name}</p>
                )}
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlhtmlhtmlFor="email"
                >
                  Email
                </label>
                <input
                  className={`appearance-none border ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                  id="email"
                  type="email"
                  placeholder="Your email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs italic">{errors.email}</p>
                )}
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlhtmlhtmlFor="age"
                >
                  Age
                </label>
                <input
                  className={`appearance-none border ${
                    errors.age ? "border-red-500" : "border-gray-300"
                  } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                  id="age"
                  type="number"
                  placeholder="Your age"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                />
                {errors.age && (
                  <p className="text-red-500 text-xs italic">{errors.age}</p>
                )}
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UserForm;
