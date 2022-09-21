// import React from "react";
import { useState, useEffect } from "react";
import CEmployees from "./components/Employees/CEmployees";
import Employees from "./components/Employees/Employees";
import NewProducts from "./components/NewProducts/NewProducts";
import SignInGoogle from "./components/SignIn/SignInGoogle";
import firebase from "./service/firebase";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import NoPage from "./components/NoPage/NoPage";
import NavBar from "./components/NavBar/NavBar";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              user ? (
                <Home user={user}></Home>
              ) : (
                <SignInGoogle>
                  <NavBar />
                </SignInGoogle>
              )
            }
          />
          <Route
            path="Home"
            element={user ? <Home user={user} /> : <SignInGoogle />}
          />
          <Route
            path="/SignIn"
            element={
              user ? (
                <Navigate to={{ pathname: "/Home", state: { user: user } }} />
              ) : (
                <SignInGoogle>
                  <NavBar />
                </SignInGoogle>
              )
            }
          />
          <Route
            path="Employees"
            element={
              user ? (
                <Employees>
                  <NavBar />
                </Employees>
              ) : (
                <SignInGoogle />
              )
            }
          />
          <Route
            path="Products"
            element={
              user ? (
                <NewProducts>
                  <NavBar />
                </NewProducts>
              ) : (
                <SignInGoogle />
              )
            }
          />
          <Route
            path="ShoppingCart"
            element={
              user ? (
                <ShoppingCart>
                  <NavBar />
                </ShoppingCart>
              ) : (
                <SignInGoogle />
              )
            }
          />
          <Route
            path="*"
            element={
              <NoPage>
                <NavBar />
              </NoPage>
            }
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
