import { useState } from "react";
import { MdOutlineMail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";
import { LuEye, LuEyeClosed } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../redux/reducer/users";
import toast, { Toaster } from "react-hot-toast";
import { nanoid } from "@reduxjs/toolkit";

const schema = yup
  .object({
    email: yup.string().email("Email Not Valid!").required("Email is required!"),
    password: yup.string().min(6, "Password must be longer than 6 characters!").required("Password is required!"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Password must match")
      .required("You must confirm your password!"),
    agreeToTerms: yup.boolean().oneOf([true], "You must accept the terms and conditions!"),
  })
  .required();

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      agreeToTerms: false,
    },
  });
  let dataRegistUsers = useSelector((state) => state.users.users);
  const dispatch = useDispatch();
  const nav = useNavigate();

  // console.log("agreeToTerms:", watch("agreeToTerms"));

  function handleShowPassword(e) {
    e.preventDefault();
    setShowPassword(!showPassword);
  }

  function handleRegister(dataRegister) {
    const { email } = dataRegister;

    const checkAccAvailable = dataRegistUsers.find((e) => e.email === email);

    if (checkAccAvailable) {
      toast.error("email was registered!");
    } else {
      const formatAddUser = {
        id: nanoid(),
        email: dataRegister.email,
        password: window.btoa(dataRegister.password),
        role: "user",
      };
      // console.log(formatAddUser);
      dispatch(addUser(formatAddUser));
      toast.success("Register Success!");
      setTimeout(() => {
        nav("/login");
      }, 2000);
    }
  }

  return (
    <main className="sm:bg-sixth sm:bg-primary bg-white h-fit py-5 flex-center flex-col font-sans">
      <Toaster />
      <section className="max-w-[500px] h-fit w-full bg-white sm:px-10 p-7 rounded-2xl sm:shadow-2xl">
        <form onSubmit={handleSubmit(handleRegister)}>
          <div className="pb-5">
            <p className="font-semibold pb-3 sm:text-4xl text-2xl">Sign Up</p>
            <p className="sm:text-xl text-base text-primary font-medium italic">Join for free now!</p>
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="email">Email</label>
            <span className="flex items-center gap-4 border sm:px-5 px-2 py-3 rounded-lg">
              <MdOutlineMail className="sm:text-xl text-base" />
              <input {...register("email")} className="border-0 outline-none grow sm:text-base text-sm" type="email" placeholder="Enter your email" id="email" />
            </span>
            {errors.email && <p className="text-error text-sm italic">{errors.email.message}</p>}
            <label htmlFor="password">Password</label>
            <span className="flex items-center gap-4 border sm:px-5 px-2 py-3 rounded-lg w-full">
              <TbLockPassword className="sm:text-xl text-base" />
              <input {...register("password")} type={showPassword ? "text" : "password"} className="border-0 outline-none grow Knopftext-base text-sm" name="password" placeholder="Enter your password" id="password" />
              <button className="cursor-pointer text-xl" onClick={handleShowPassword}>
                {showPassword ? <LuEyeClosed className="sm:text-xl text-base" /> : <LuEye className="sm:text-xl text-base" />}
              </button>
            </span>
            {errors.password && <p className="text-error text-sm italic">{errors.password.message}</p>}
            <label htmlFor="confirmPassword">Confirm Password</label>
            <span className="flex items-center gap-4 border sm:px-5 px-2 py-3 rounded-lg w-full">
              <TbLockPassword className="sm:text-xl text-base" />
              <input
                {...register("confirmPassword")}
                type={showPassword ? "text" : "password"}
                className="border-0 outline-none grow sm:text-base text-sm"
                name="confirmPassword"
                placeholder="Confirm your password"
                maxLength="8"
                id="confirmPassword"
              />
              <button className="cursor-pointer text-xl" onClick={handleShowPassword}>
                {showPassword ? <LuEyeClosed className="sm:text-xl text-base" /> : <LuEye className="sm:text-xl text-base" />}
              </button>
            </span>
            {errors.confirmPassword && <p className="text-error text-sm italic">{errors.confirmPassword.message}</p>}
          </div>
          <div className="flex items-center gap-3 pt-3">
            <input {...register("agreeToTerms")} type="checkbox" name="agreeToTerms" id="terms" />
            <label htmlFor="terms">I agree to terms & conditions</label>
          </div>
          {errors.agreeToTerms && <p className="text-error text-sm italic pt-1">{errors.agreeToTerms.message}</p>}
          <div className="text-center font-medium sm:text-base text-sm pt-3">
            <button type="submit" className="bg-third font-bold w-full text-secondary py-3 rounded-lg mb-5 cursor-pointer hover:bg-secondary hover:text-white transition-colors">
              JOIN
            </button>
            <p>
              Already Have an Account? <Link to="/login" className="text-blue-600">Login</Link>
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

export default RegisterPage;
