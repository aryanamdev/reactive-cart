import React, { useContext } from "react";
import { Link, Routes, Route } from "react-router-dom";
import { Home, Cart, Product } from "../pages/index.js";
import { CartContext } from "../context/CartContext.jsx";

const Header = () => {
  const { cartItems, search, handleSearch } = useContext(CartContext);

  return (
    <>
      <div className="z-100 px-6 lg:px-8 flex w-full justify-center bg-accent h-20 shadow-lg text-white fixed mb-20">
        <ul className="flex gap-6 text-sm lg:gap-10 w-full items-center justify-center lg:text-xl h-20">
          <li className=" text-lg lg:text-2xl text-emerald-200 font-bold">
            ReactiveCart 🛒
          </li>
          <li className="text-gray-300">
            <Link to="/">Home</Link>
          </li>
          <li className="p-3 text-gray-300 bg-slate-500 rounded-md">
            <Link to="/cart" className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
              <p>{cartItems.length}</p>
            </Link>
          </li>
        </ul>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/productPage" element={<Product />} />
      </Routes>
    </>
  );
};

export default Header;
