import React, { useState, useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { useNavigate, useLocation } from "react-router";
import Button from "@mui/material/Button";
import { auth } from "../../service/firebase";
import "./NavBar.css";
import CartContext from "../../context/CartContext";

function NavBar() {
  let navigate = useNavigate();
  const location = useLocation();

  const { count } = useContext(CartContext);
  console.log(count);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className="navBarMenu">
          <div>
            <Button
              color={
                location.pathname.toLowerCase() === "/home"
                  ? "success"
                  : "inherit"
              }
              onClick={() => {
                navigate("/Home");
              }}
            >
              Home
            </Button>
            <Button
              color={
                location.pathname.toLowerCase() === "/employees"
                  ? "success"
                  : "inherit"
              }
              onClick={() => {
                navigate("/Employees");
              }}
            >
              Employees
            </Button>
            <Button
              selected
              color={
                location.pathname.toLowerCase() === "/products"
                  ? "success"
                  : "inherit"
              }
              onClick={() => {
                navigate("/Products");
              }}
            >
              New Products
            </Button>
            <Button
              color={
                location.pathname.toLowerCase() === "/shoppingcart"
                  ? "success"
                  : "inherit"
              }
              onClick={() => {
                navigate("/ShoppingCart");
              }}
            >
              Shopping Cart {count}
            </Button>
          </div>
          <Button id="signOutBtn" onClick={() => auth.signOut()}>
            Sign Out
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;
