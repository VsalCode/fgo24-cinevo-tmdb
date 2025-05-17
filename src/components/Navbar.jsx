import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="bg-white z-100 fixed left-0 right-0 top-0 shadow flex-between h-100px px-15 py-4">
      <div>
        <img className="w-30" src="/src/assets/icon/logo.png" alt="logo" />
      </div>
      <div className="absolute left-1/2 transform -translate-x-1/2 flex gap-7 font-sans font-semibold text-lg">
        <Link to="/">HOME</Link>
        <Link to="/movies">MOVIE</Link>
        <Link to="/buyTicket">BUY TICKET</Link>
      </div>
      <div>
        <Button style="border">LOGIN</Button>
        <Button style="bg-primary text-white ms-3">SIGN UP</Button>
      </div>
    </nav>
  );
};

export default Navbar;
