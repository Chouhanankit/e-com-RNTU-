import React from "react";
import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <section className="bg-gray-900 text-white">
      <div className="flex flex-col items-center justify-center px-6 h-[90.6vh] lg:py-0">
        <h1 className="text-white text-3xl font-semibold my-4">Admin Panel</h1>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md md:max-w-xl xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="flex flex-col p-6 space-y-4 md:space-y-6 sm:p-8">
            <Link 
              to={"/Createproduct"}
              type="button"
              className="text-gray-900 flex justify-center items-center w-full h-20 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
            >
              Create New Product
            </Link>
            <Link
              type="button"
              className="text-gray-900 flex justify-center items-center w-full h-20 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
            >
              View All Product
            </Link>
            <Link
              type="button"
              className="text-gray-900 flex justify-center items-center w-full h-20 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
            >
              View All Users
            </Link>
            <Link
              type="button"
              className="text-gray-900 flex justify-center items-center w-full h-20 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
            >
              Manage Products
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admin;
