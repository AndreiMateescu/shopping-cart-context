import { createContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    let newCount = count + 1;
    setCount(newCount);
  };

  return (
    <CartContext.Provider value={{ count, increment }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
