import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

const CartContextProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cartItems"));
    if (items) {
      setCartItems(items);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const addItem = (item) => {
    setCartItems((prevCartItems) => [...prevCartItems, item]);
  };

  const removeItem = (id) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.id !== id)
    );
  };

  const cartValue = cartItems.reduce(
    (accumulator, item) => accumulator + item.price,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItem,
        removeItem,
        cartValue,
        search,
        handleSearch,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
