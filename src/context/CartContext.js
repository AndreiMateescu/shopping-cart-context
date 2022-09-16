import { createContext, useState } from "react";

const CartContext = createContext();

const standardProducts = [
  {
    name: "Coca Cola",
    id: 1,
    price: 3.5,
    quantity: 3,
  },
  {
    name: "Pampers",
    id: 2,
    price: 5,
    quantity: 10,
  },
  {
    name: "Milka",
    id: 3,
    price: 3,
    quantity: 20,
  },
];

export const CartProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [shoppingCartProducts, setShoppingCartProducts] = useState([]);
  const [products, setProducts] = useState(standardProducts);

  const increment = () => {
    let newCount = count + 1;
    setCount(newCount);
  };

  const decrement = () => {
    const newCount = count - 1;
    setCount(newCount);
  };

  const addProductInCart = (product) => {
    const foundProduct = shoppingCartProducts.find(
      (item) => item.id === product.id
    );

    if (foundProduct) {
      for (const item of shoppingCartProducts) {
        if (item.id === foundProduct.id) {
          item.count = item.count + 1;
        }
      }
      setShoppingCartProducts(shoppingCartProducts);
    } else {
      product.count = 1;
      setShoppingCartProducts([...shoppingCartProducts, product]);
    }
  };

  const updateCountAndQuantityForProduct = (product) => {
    const shoppingCartProductsCopy = [...shoppingCartProducts];
    const productsCopy = [...products];

    let productToRemove = null;
    for (const item of shoppingCartProductsCopy) {
      if (item.id === product.id) {
        item.count--;
        if (item.count === 0) {
          productToRemove = item;
        }
        item.quantity++;
      }
    }

    if (productToRemove) {
      const newProducts = shoppingCartProductsCopy.filter(
        (p) => p.id !== productToRemove.id
      );
      setShoppingCartProducts(newProducts);
    } else {
      setShoppingCartProducts(shoppingCartProductsCopy);
    }

    setProducts(productsCopy);
  };

  return (
    <CartContext.Provider
      value={{
        count,
        increment,
        decrement,
        addProductInCart,
        shoppingCartProducts,
        products,
        setProducts,
        updateCountAndQuantityForProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
