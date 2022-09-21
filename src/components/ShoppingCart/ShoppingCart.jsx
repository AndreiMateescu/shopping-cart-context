import RemoveCircleOutlineSharpIcon from '@mui/icons-material/RemoveCircleOutlineSharp';
import IconButton from "@mui/material/IconButton";
import './ShoppingCart.css';
import { connect, useDispatch } from 'react-redux';

function ShoppingCart(props) {
  const decreaseQuantity = (item) => {
    updateCountAndQuantityForProduct(item);
    decrement();
  }

  const dispatch = useDispatch();

  const decrement = () => {
    const newCount = props.count - 1;
    dispatch({ type: "SET_COUNT", content: newCount });
  };

  const updateCountAndQuantityForProduct = (product) => {
    const shoppingCartProductsCopy = [...props.shoppingCartProducts];
    const productsCopy = [...props.products];

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
      dispatch({type: "SET_SHOPPING_CART_PRODUCTS", content: newProducts});
    } else {
      dispatch({type: "SET_SHOPPING_CART_PRODUCTS", content: shoppingCartProductsCopy});
    }

    dispatch({type: "SET_PRODUCTS", content: productsCopy});
  };

  return <div>
    {props.children}
    {props.count}
    <br/>
    {props.shoppingCartProducts.map((item) =>
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

const mapStateToProps = function(store) {
  return {
    count: store.count,
    shoppingCartProducts: store.shoppingCartProducts,
    products: store.products
  }
}

export default connect(mapStateToProps)(ShoppingCart);
