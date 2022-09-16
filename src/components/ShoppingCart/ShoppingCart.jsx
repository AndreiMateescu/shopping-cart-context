import { useContext } from "react";
import CartContext from "../../context/CartContext";
import RemoveCircleOutlineSharpIcon from '@mui/icons-material/RemoveCircleOutlineSharp';
import IconButton from "@mui/material/IconButton";
import './ShoppingCart.css';

function ShoppingCart(props) {
  const { count, shoppingCartProducts, updateCountAndQuantityForProduct, decrement } = useContext(CartContext);

  const decreaseQuantity = (item) => {
    updateCountAndQuantityForProduct(item);
    decrement();
  }

  return <div>
    {props.children}
    {count}
    <br/>
    {shoppingCartProducts.map((item) =>
    <div className="shopping-cart-item">
      <li key={item.id}>
        {item.name} - {item.count} bucati - {item.price} lei
      </li>
      <IconButton onClick={() => decreaseQuantity(item)}>
        <RemoveCircleOutlineSharpIcon></RemoveCircleOutlineSharpIcon>
      </IconButton>
      </div> )}
  </div>;
}

export default ShoppingCart;
