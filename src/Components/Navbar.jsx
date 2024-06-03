import React, { useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { IoLogOutOutline } from "react-icons/io5";
import { GiShoppingBag } from "react-icons/gi";
import { FaUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { usersLogOut } from "../features/auth/authSlice";
import { PiShoppingCartLight } from "react-icons/pi";
import { IoPersonOutline } from "react-icons/io5";

const Navbar = () => {
  const { users } = useSelector((state) => state.auth);
  const { CartItems } = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate()

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleLogOut = () => {
    dispatch(usersLogOut());
    navigate("/login");
  };

  return (
    <nav className=" bg-gray-900 sticky w-full z-20 top-0 start-0 shadow-sm shadow-slate-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {users ? (
          <>
            <Link
              to={"/"}
              className="flex justify-center items-center p-2 font-bold md:text-[24px] text-white"
            >
              <GiShoppingBag className="mr-2 text-4xl text-red-400" />{" "}
              <span className="text-red-600">B</span>est
              <span className="text-green-500">D</span> eals
              {/* <h1>{users.name.toUpperCase()}</h1> */}
            </Link>
          </>
        ) : (
          <>
            <Link
              to={"/login"}
              className="flex justify-center items-center p-2 font-bold text-[24px] text-white"
            >
              <GiShoppingBag className="mr-2 text-4xl" /> E-commerce
            </Link>
          </>
        )}

        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse gap-2">
          {users && users.isAdmin ? (
            <>
              <Link
                to={"/dashboard"}
                type="button"
                className="flex invisible md:visible items-center gap-2 text-white bg-blue-700 hover:bg-blue-800 md:font-medium rounded-lg text-xs md:text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-600"
              >
                <IoPersonOutline />
                Admin
              </Link>
            </>
          ) : (
            <></>
          )}
          {users ? (
            <>
              <span className="flex items-center hidden md:block">
                <button
                  onClick={handleLogOut}
                  className="flex justify-center items-center bg-red-400 text-gray-900 hover:text-white border font-small rounded-lg text-sm px-5 py-2 text-center dark:border-gray-600 dark:text-white dark:bg-red-600 hover:bg-red-400"
                >
                  Logout <IoLogOutOutline className="ml-2 text-xl" />
                </button>
              </span>
            </>
          ) : (
            <>
              <Link to={"/Register"} className="flex items-center text-white">
                <FaUserCircle className="mr-2 text-4xl" />
              </Link>
            </>
          )}
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
            onClick={handleMobileMenuToggle}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          {users ? (
            <>
              <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:border-gray-700">
                <li>
                  <Link
                    to={"/"}
                    className={`block py-2 px-3 text-white md:bg-transparent md:p-0 ${
                      location.pathname === "/"
                        ? "bg-blue-700 md:text-blue-700"
                        : ""
                    }`}
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/products"}
                    className={`block py-2 px-3 text-white md:bg-transparent md:p-0 ${
                      location.pathname === "/products"
                        ? "bg-blue-700 md:text-blue-700"
                        : ""
                    }`}
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/about"}
                    className={`block py-2 px-3 text-white md:bg-transparent md:p-0 ${
                      location.pathname === "/about"
                        ? "bg-blue-700 md:text-blue-700"
                        : ""
                    }`}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/contact"}
                    className={`block py-2 px-3 text-white md:bg-transparent md:p-0 ${
                      location.pathname === "/contact"
                        ? "bg-blue-700 md:text-blue-700"
                        : ""
                    }`}
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/cart"}
                    className={`block py-2 px-3 text-2xl text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700${
                      location.pathname === "/cart"
                        ? "bg-blue-700 md:text-blue-700"
                        : ""
                    }`}
                  >
                    <div className="relative flex items-center">
                      < PiShoppingCartLight className="text-white" />
                      <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full">
                        {CartItems.length}
                      </span>
                    </div>
                  </Link>
                </li>
              </ul>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
      {mobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-gray-800 bg-opacity-50 z-10"
            onClick={handleMobileMenuToggle}
          ></div>
          <div className="fixed top-0 right-0 w-2/3 h-full bg-gray-900 p-4 z-20">
            <div className="flex justify-end">
              <button className="text-white" onClick={handleMobileMenuToggle}>
                &times;
              </button>
            </div>
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className={`block text-white py-2 px-2 ${
                  location.pathname === "/" ? "bg-blue-700" : ""
                }`}
                onClick={handleMobileMenuToggle}
              >
                Home
              </Link>
              <Link
                to="/products"
                className={`block text-white py-2 px-2 ${
                  location.pathname === "/products" ? "bg-blue-700" : ""
                }`}
                onClick={handleMobileMenuToggle}
              >
                Products
              </Link>
              <Link
                to="/cart"
                className={`block text-white py-2 px-2 ${
                  location.pathname === "/cart" ? "bg-blue-700" : ""
                }`}
                onClick={handleMobileMenuToggle}
              >
                Cart({CartItems.length})
              </Link>
              <Link
                to="/about"
                className={`block text-white py-2 px-2 ${
                  location.pathname === "/about" ? "bg-blue-700" : ""
                }`}
                onClick={handleMobileMenuToggle}
              >
                About
              </Link>
              <Link
                to="/contact"
                className={`block text-white py-2 px-2 ${
                  location.pathname === "/contact" ? "bg-blue-700" : ""
                }`}
                onClick={handleMobileMenuToggle}
              >
                Contact
              </Link>
              {users && (
                <div className="flex flex-col space-y-4">
                  <Link
                    to={"/Login"}
                    type="button"
                    onClick={handleLogOut}
                    className="flex justify-center items-center text-gray-900 hover:text-white border font-small rounded-lg text-sm px-5 py-2 text-center dark:border-gray-600 dark:text-white dark:bg-red-600 hover:bg-red-400"
                  >
                    Logout <IoLogOutOutline className="ml-2 text-xl" />
                  </Link>
                  {users.isAdmin && (
                    <Link
                      to={"/dashboard"}
                      onClick={handleMobileMenuToggle}
                      type="button"
                      className="flex items-center gap-2 text-white bg-blue-700 hover:bg-blue-800 md:font-medium rounded-lg text-xs md:text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-600"
                    >
                      <IoPersonOutline />
                      Admin
                    </Link>
                  )}
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
