import React, { useState } from "react";
import { MdOutlineMail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";
import { LuEye, LuEyeClosed } from "react-icons/lu";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  function handleShowPassword(e) {
    e.preventDefault();

    if (showPassword === false) {
      setShowPassword(true);
    } else if (showPassword === true) {
      setShowPassword(false);
    }
  }

  return (
    <main className="sm:bg-sixth bg-primary h-fit py-10 flex-center flex-col font-sans">
      <img className="sm:w-50 w-40 mb-5" src="/src/assets/icon/logo.png" alt="" />
      <section className="max-w-[500px] w-full bg-white sm:p-10 p-7 rounded-2xl sm:shadow-2xl">
        <form>
          <div className="pb-5">
            <p className="font-semibold pb-3 sm:text-4xl text-2xl">Welcome Back</p>
            <p className="sm:text-xl text-base">Sign in with your data that you entered during your registration</p>
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <span className="flex items-center gap-4 border sm:px-5 px-2 py-3  mt-3 mb-5   rounded-lg">
              <MdOutlineMail className="sm:text-xl text-base" />
              <input className="border-0 outline-none grow sm:text-base text-sm" type="email" placeholder="Enter your email" />
            </span>
            <label htmlFor="password">Password</label>
            <span className="flex items-center gap-4 border sm:px-5 px-2 py-3 mt-3 rounded-lg w-full">
              <TbLockPassword className="sm:text-xl text-base" />
              <input type={showPassword === false ? "password" : "text"} className="border-0 outline-none grow sm:text-base text-sm" name="password" placeholder="Enter your password" maxLength="8" />
              <button className="cursor-pointer text-xl" onClick={handleShowPassword}>
                {showPassword === false ? <LuEye className="sm:text-xl text-base" /> : <LuEyeClosed className="sm:text-xl text-base" />}
              </button>
            </span>
          </div>
          <div className="text-blue-600 font-medium py-4 flex justify-end sm:text-base text-sm">
            <Link>Forgot Your Password?</Link>
          </div>
          <div className="text-center font-medium sm:text-base text-sm">
            <button type="submit" className="bg-third w-full text-primary font-bold  py-3 rounded-lg mb-5">LOGIN</button>
            <p>
              Do Not Have an Account?{" "}
              <Link to="/signup" className="text-blue-600">
                Sign Up
              </Link>
            </p>
          </div>
          <div className="flex sm:flex-row flex-col gap-3 mt-5">
            <Link to="https://www.google.com/" className="universal-button flex-center gap-3 w-full border border-primary">
              <FcGoogle className="sm:text-2xl text-base" />
              <span className="font-medium">Google</span>
            </Link>
            <Link to="https://www.facebook.com/" className="universal-button flex-center gap-3 w-full border border-primary">
              <FaFacebook className="sm:text-2xl text-base text-blue-800" />
              <span className="font-medium">Facebook</span>
            </Link>
          </div>
        </form>
      </section>
    </main>
  );
};

export default Login;
