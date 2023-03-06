import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext.jsx";
import SkeletonCard from "./skeletons/SkeletonCard.jsx";


export default function ProductCard() {
  const { addItem, search } = useContext(CartContext);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = () => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const filteredProducts = products.filter((val) => {
    return val.title.toLowerCase().includes(search.toLowerCase());
  });

  if (loading) {
    return (
      <>
        {[...Array(20)].map((val) => (
          <SkeletonCard />
        ))}
      </>
    );
  }

  return (
    <>
      {filteredProducts.map((val) => (
        <div
          key={val.id}
          id={val.id}
          className="flex flex-col w-80 shadow-xl hover:shadow-2xl cursor-pointer rounded-lg"
        >
          <div className="flex justify-center">
            <img src={val.image} className="object-cover h-60" alt="" />
          </div>
          <div className="p-8 flex flex-col gap-4">
            <h1 className="text-xl">{val.title}</h1>
            <div className="flex justify-between items-center">
              <p className="text-2xl font-semibold font-mono">$ {val.price}</p>
              <button
                onClick={() => addItem(val)}
                className="p-2 bg-accent text-white font-medium rounded hover:bg-slate-500 active:bg-slate-500 active:scale-95"
              >
                Add to Cart
              </button>
            </div>
            <p className=" h-16 overflow-y-scroll text-gray-600 text-sm">
              {val.description}
            </p>
          </div>
        </div>
      ))}
    </>
  );
}
