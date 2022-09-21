import React, { useState, useContext } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import ProductCard from "./ProductCard";
import "./NewProducts.css";
import CartContext from "../../context/CartContext";
import { useEffect } from "react";

function NewProducts(props) {
  const { increment, addProductInCart, products, setProducts } = useContext(CartContext); //destructuring

  const [price, setPrice] = useState();
  const [quantity, setQuantity] = useState();
  const [text, setText] = useState("");
  
  const addProduct = () => {

    fetch("https://localhost:7278/Products", {
      method: "POST",
      body: JSON.stringify({
        name: text,
        price: price,
        quantity: quantity,
      }),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
      },
    })
    .then((response) => response.json())
    .then((newProducts) => setProducts(newProducts));

    setQuantity("");
    setPrice("");
    setText("");
  };

  useEffect(() => {

    async function fetchData() {
      const response = await fetch("https://localhost:7278/Products");
      const data = await response.json();
      setProducts(data);
    }

    fetchData();
  }, []);

  const changeText = (event) => {
    setText(event.target.value);
  };
  const clearProduct = (id) => {
    fetch(`https://localhost:7278/Products/${id}`, {
      method: "DELETE"
    })
    .then((response) => response.json())
    .then((newProducts) => setProducts(newProducts));
  };
  const addProductToCart = (id) => {
    const foundProduct = products.find((element) => element.id === id);

    for (const product of products) {
      if (product.id === id) {
        product.quantity--;
      }
    }
    setProducts(products);

    increment();
    addProductInCart(foundProduct);
  };

  const changePrice = (event) => {
    setPrice(event.target.value);
  };

  const changeQuantity = (event) => {
    setQuantity(event.target.value);
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
        {products.map((product) => (
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
export default NewProducts;
