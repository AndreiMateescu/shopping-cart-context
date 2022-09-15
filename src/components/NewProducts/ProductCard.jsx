import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const ProductCard = ({
  id,
  product,
  price,
  quantity,
  clearProduct,
  addProductToCart,
}) => {
  return (
    <>
      <Card sx={{ height: 200, width: 200, border: 1, boxShadow: 0 }}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {product}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {price}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {quantity}
            </Typography>
          </CardContent>
        </CardActionArea>
        <IconButton onClick={() => clearProduct(id)}>
          <ClearIcon></ClearIcon>
        </IconButton>
        <IconButton onClick={() => addProductToCart(id)}>
          <AddShoppingCartIcon />
        </IconButton>
      </Card>
      {/* child-parent communication */}
    </>
  );
};

export default ProductCard;
