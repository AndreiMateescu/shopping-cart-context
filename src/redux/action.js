export const setCount = (value) => {
  return {
    type: "SET_COUNT",
    value,
  };
};

export const setShoppingCartProducts = (products) => {
  return {
    type: "SET_SHOPPING_CART_PRODUCTS",
    products,
  };
};

export const setProducts = (products) => {
  console.log(products);
  return {
    type: "SET_PRODUCTS",
    products,
  };
};
