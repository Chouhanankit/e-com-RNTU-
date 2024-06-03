import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { usersRegister } from "../features/auth/authSlice";
import toast from "react-hot-toast";
import { PulseLoader } from "react-spinners";

const Register = () => {
  const { users, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });
  const [phoneError, setPhoneError] = useState("");

  const { name, email, password, phone } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      const phonePattern = /^[6-9]\d{9}$/;
      if (!phonePattern.test(value)) {
        setPhoneError("Invalid phone number. It should start with 6-9 and be 10 digits long.");
      } else {
        setPhoneError("");
      }
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (phoneError) {
      toast.error("Please fix the phone number error.");
      return;
    }
    dispatch(usersRegister(formData));
  };

  useEffect(() => {
    if (users && isSuccess) {
      navigate("/");
      toast.success("Registered successfully");
    }
    if (isError) {
      if (message === "User already registered") {
        toast.error("User already registered. Please log in.");
        navigate("/login");
      } else {
        toast.error(message);
      }
    }
  }, [isSuccess, isError, message, users, navigate]);

  if (isLoading) {
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
  }

  return (
    <section className="bg-gray-900">
      <div className="flex flex-col items-center justify-center px-0 h-[90.5vh] lg:py-0 mx-auto">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md lg:max-w-2xl xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <span className="flex items-center justify-center pt-10">
              <Link
                to={"/login"}
                className="w-1/3 pb-4 font-medium text-center text-gray-500 capitalize border-b focus:border-blue-400"
              >
                Login
              </Link>
              <Link
                to={"/register"}
                className="w-1/3 pb-4 font-medium text-center text-gray-800 capitalize border-b dark:text-white focus:border-blue-400"
              >
                Register
              </Link>
            </span>
            <form
              onSubmit={handleRegister}
              className="space-y-4 md:space-y-6"
              action="#"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  name="name"
                  value={name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your Email
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your Number
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="text"
                  placeholder="Enter your number"
                  name="phone"
                  value={phone}
                  onChange={handleChange}
                />
                {phoneError && <p className="text-red-500 text-sm">{phoneError}</p>}
              </div>
              <span className="flex">
                <div className="w-1/2">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    type="password"
                    placeholder="Enter your password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                  />
                </div>
                <div className="w-1/2 ml-2">
                  <label
                    htmlFor="confirm-password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name="confirm-password"
                    id="confirm-password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>
              </span>

              <button
                type="submit"
                className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Create an Account
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
