import React, { useState, useContext } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import ProductCard from "./ProductCard";
import "./NewProducts.css";
import CartContext from "../../context/CartContext";

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

function NewProducts(props) {
  const { increment } = useContext(CartContext);

  const [price, setPrice] = useState();
  const [quantity, setQuantity] = useState();
  const [products, setProducts] = useState(standardProducts);
  const [text, setText] = useState("");
  let [newId, setNewId] = useState(standardProducts.length + 1);
  const addProduct = () => {
    const newProducts = [...products];
    newProducts.push({
      name: text,
      id: newId,
      price: price,
      quantity: quantity,
    });
    setQuantity("");
    setPrice("");
    setProducts(newProducts);
    setText("");
    setNewId(newId + 1);
    console.log(newId);
  };
  const changeText = (event) => {
    setText(event.target.value);
  };
  const clearProduct = (id) => {
    const newList = products.filter((item) => item.id !== id);
    setProducts(newList);
  };
  const addProductToCart = (id) => {
    const foundProduct = products.find((element) => element.id === id);
    increment();
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
