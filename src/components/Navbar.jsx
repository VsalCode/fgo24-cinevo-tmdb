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
      <div className="flex gap-3">
        <Link to="/login" className="universal-button border">LOGIN</Link>
        <Link to="/signup" className="universal-button bg-primary text-white">SIGN UP</Link>
      </div>
    </nav>
  );
};

export default Navbar;
