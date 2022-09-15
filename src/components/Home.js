import React from "react";
import NavBar from "./NavBar/NavBar";
// import '../App.css';

const Home = ({ user }) => {
  console.log(user);
  return (
    <div>
      <NavBar />

      <h1>
        Hello, <span></span>
        {user.displayName}
      </h1>
      <img src={user.photoURL} />
    </div>
  );
};

export default Home;
