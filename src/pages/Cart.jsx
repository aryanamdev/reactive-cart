import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cartItems, removeItem } = useContext(CartContext);

  return (
    <div className="pt-28 w-full px-8 lg:px-24">
      <div className="mx-auto">
        <h1 className="mx-auto text-center bg-slate-200 w-fit text-4xl uppercase font-bold text-accent font-sans p-4 rounded-md">
          My Cart 🛒
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row w-full gap-8 mt-7">
        <div className="flex lg:w-1/2 flex-col gap-11 ">
          <h1 className="text-2xl tracking-wider mt-3 uppercase font-bold">
            Cart Items
          </h1>
          {cartItems.map((val) => (
            <div className="p-6 justify-around cart-card flex gap-8 shadow-xl hover:shadow-2xl cursor-pointer rounded-lg">
              <div className="h-36">
                <img src={val.image} className="h-full object-cover" alt="" />
              </div>
              <div className="content w-2/3 flex flex-col gap-4">
                <h1 className="text-xl w-fit">{val.title}</h1>
                <h1 className="text-2xl font-semibold font-mono">
                  $ {val.price}
                </h1>
                <button
                  onClick={() => {
                    removeItem(val.id);
                  }}
                  className="p-2 bg-red-500 text-white font-medium rounded hover:bg-red-800 w-fit active:scale-95"
                >
                  Remove from Cart
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="w-1/2">
          <h1 className="text-2xl tracking-wider mt-3 uppercase font-bold">
            Total
          </h1>
          <div>
            <h1>Total</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
