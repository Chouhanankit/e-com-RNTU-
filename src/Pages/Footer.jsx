import React from 'react'

const Footer = () => {
  return (
    <footer className="p-4 bg-[#4f4a4b] md:p-8 lg:p-10 dark:bg-gray-800">
  <div className="mx-auto max-w-screen-xl text-center">
      <p className="my-6 text-[white] ">We deliver the best Quality products.Take product at your home by your choice fearlessly. </p>
      <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white gap-0 md:gap-4">
          <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
          </li>
          <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">Premium</a>
          </li>
          <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">Blog</a>
          </li>
          <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">FAQs</a>
          </li>
          <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">Contact</a>
          </li>
      </ul>
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023-2024 <a href="#" className="hover:underline">Ankit Chouhan</a>. All Rights Reserved.</span>
  </div>
</footer>
  )
}

export default Footer
