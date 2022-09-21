const INITIAL_STATE = {
  count: 0,
  shoppingCartProducts: [],
  products: [
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
  ],
};

const reducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case "SET_COUNT":
      return {
        ...state,
        count: action.content,
      };
    case "SET_SHOPPING_CART_PRODUCTS":
      return {
        ...state,
        shoppingCartProducts: action.content,
      };
    case "SET_PRODUCTS":
      return {
        ...state,
        products: action.content,
      };
    default:
      return state;
  }
};

export default reducer;
