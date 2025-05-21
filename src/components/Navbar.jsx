import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [showHamburger, setShowHamburger] = useState(false);

  function HandleHamburger() {
    if (showHamburger === true) {
      setShowHamburger(false);
    } else if (showHamburger === false) {
      setShowHamburger(true);
    }
  }

  return (
    <nav className="bg-secondary text-white z-100 fixed left-0 right-0 top-0 md:shadow shadow-xl  h-100px md:px-15 sm:px-10 px-7 py-4">
      <div className="flex-between">
        <div>
          <img className="md:w-30 w-25" src="/src/assets/icon/logo.png" alt="logo" />
        </div>
        <div className="lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 md:flex md:gap-7 md:font-sans md:font-semibold md:text-lg hidden">
          <Link to="/">HOME</Link>
          <Link to="/movies">MOVIE</Link>
          <Link to="/buyTicket">BUY TICKET</Link>
        </div>
        <button className="md:hidden text-2xl" onClick={HandleHamburger}>
          {showHamburger === false ? <GiHamburgerMenu /> : <IoClose />}
        </button>
        <div className="md:flex md:gap-3 hidden">
          <Link to="/login" className="universal-button border">
            LOGIN
          </Link>
          <Link to="/signup" className="universal-button bg-third text-primary">
            SIGN UP
          </Link>
        </div>
      </div>
      {showHamburger === true && (
        <div className="flex flex-col h-fit rounded-b-xl text-center text-base font-bold py-7 gap-5">
          <Link to="/">HOME</Link>
          <Link to="/movies">MOVIE</Link>
          <Link to="/buyTicket">BUY TICKET</Link>
          <div className="flex-between gap-3">
            <Link to="/login" className="grow universal-button border text-base">
              LOGIN
            </Link>
            <Link to="/signup" className="grow universal-button bg-third text-base">
              SIGN UP
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
