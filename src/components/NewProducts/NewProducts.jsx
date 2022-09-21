import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import ProductCard from "./ProductCard";
import "./NewProducts.css";
import { connect, useDispatch } from 'react-redux';

function NewProducts(props) {
  const [price, setPrice] = useState();
  const [quantity, setQuantity] = useState();
  const [text, setText] = useState("");

  const increment = () => {
    let newCount = props.count + 1;
    dispatch({ type: "SET_COUNT", content: newCount });
  };

  const addProductInCart = (product) => {
    const foundProduct = props.shoppingCartProducts.find(
      (item) => item.id === product.id
    );

    const shoppingCartProductsCopy = [...props.shoppingCartProducts];  

    if (foundProduct) {
      for (const item of shoppingCartProductsCopy) {
        if (item.id === foundProduct.id) {
          item.count = item.count + 1;
        }
      }
      dispatch({type: "SET_SHOPPING_CART_PRODUCTS", content: shoppingCartProductsCopy});
    } else {
      product.count = 1;
      dispatch({type: "SET_SHOPPING_CART_PRODUCTS", content: [...props.shoppingCartProducts, product]});
    }
  };
  
  let [newId, setNewId] = useState(props.products.length + 1);
  

  const dispatch = useDispatch();

  const addProduct = () => {
    const newProducts = [...props.products];
    newProducts.push({
      name: text,
      id: newId,
      price: price,
      quantity: quantity,
    });

    dispatch({ type: "SET_PRODUCTS", content: newProducts });

    setText("");
    setQuantity("");
    setPrice("");
    setNewId(newId + 1);
  };
  const changeText = (event) => {
    setText(event.target.value);
  };
  const clearProduct = (id) => {
    const newList = props.products.filter((item) => item.id !== id);
    dispatch({ type: "SET_PRODUCTS", content: newList });
  };
  const addProductToCart = (id) => {
    const foundProduct = props.products.find((element) => element.id === id);

    const productsCopy = [...props.products];

    for (const product of productsCopy) {
      if (product.id === id) {
        product.quantity--;
      }
    }

    increment();
    addProductInCart(foundProduct);
  };

  const changePrice = (event) => {
    setPrice(+event.target.value);
  };

  const changeQuantity = (event) => {
    setQuantity(+event.target.value);
  };
  const isButtonDisable = () => {
    return !(price && quantity && text);
  };
  const hasInputValue = (value) => {
    return !value;
  };

  return (
    <div>
      {props.children}
      <br />
      <br />
      <div className="container">
        <div className="field">
          <TextField
            sx={{ margin: "5px" }}
            error={hasInputValue(text)}
            label="Type your product"
            color="primary"
            focused
            value={text}
            onChange={changeText}
          />
          {!text ? <p className="pcolor-red">*Product is required</p> : null}
        </div>
        <div className="field">
          <TextField
            sx={{ margin: "5px" }}
            error={hasInputValue(price)}
            label="Price"
            color="primary"
            focused
            value={price}
            type="number"
            onChange={changePrice}
          />
          {!price ? <p className="pcolor-red">*Price is required</p> : null}
        </div>
        <div className="field">
          <TextField
            sx={{ margin: "5px" }}
            error={hasInputValue(quantity)}
            label="Quantity"
            color="primary"
            focused
            value={quantity}
            type="number"
            onChange={changeQuantity}
          />
          {!quantity && <p className="pcolor-red">*Quantity is required</p>}
        </div>
        <Button
          variant="outlined"
          disabled={isButtonDisable()}
          size="large"
          sx={{ marginLeft: "20px", margin: "5px", height: "50%" }}
          onClick={addProduct}
        >
          Add product
        </Button>
      </div>

      <br />
      <ul>
        {props.products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            product={product.name}
            price={product.price}
            quantity={product.quantity}
            clearProduct={clearProduct}
            addProductToCart={addProductToCart}
          />
        ))}
        {/* parent-child communication */}
      </ul>
    </div>
  );
}

const mapStateToProps = function(store) {
  return {
    count: store.count,
    shoppingCartProducts: store.shoppingCartProducts,
    products: store.products
  }
}

export default connect(mapStateToProps)(NewProducts);
