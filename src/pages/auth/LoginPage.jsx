import { useState } from "react";
import { MdOutlineMail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";
import { LuEye, LuEyeClosed } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { userLogin, adminLogin } from "../../redux/reducer/auth";

const schema = yup
  .object({
    email: yup.string().email("Email Not Valid!").required("Email is required!"),
    password: yup.string().min(6, "Password must be longer than 6 characters!").required("Password is required!"),
  })
  .required();

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const dataUsers = useSelector((state) => state.users.users);
  const dispatch = useDispatch();
  const nav = useNavigate();

  function handleLogin(dataLogin) {
    const { email, password } = dataLogin;

    let currentUser = dataUsers.filter((users) => users.id !== null && users.email === email && window.atob(users.password) === password && users.role === "user")[0]
    
    let admin = dataUsers.find((users) => users.email === email && window.atob(users.password) === password && users.role === "admin");

    if (admin) {
      toast("Halo Admin!", { icon: "🖐", });
      dispatch(adminLogin(admin))
      setTimeout(() => {
        nav("/dashboard-admin");
      }, 2000);
    } else if (currentUser) {
      // console.log(currentUser);
      dispatch(userLogin({ id: currentUser.id, email: currentUser.email, password: currentUser.password }));

      toast.success("Login Succes!");
      setTimeout(() => {
        nav("/",{replace: true });
      }, 2000);
    } else if (!currentUser) {
      toast.error("Your account is not found!");
    } else {
      toast.error("Failed to Login!");
    }
  }

  return (
    <main className="sm:bg-sixth sm:bg-primary bg-white h-fit py-10 flex-center flex-col font-sans">
      <Toaster />
      <section className="max-w-[500px] w-full h-fit bg-white sm:p-10 p-7 rounded-2xl sm:shadow-2xl">
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="pb-5">
            <p className="font-semibold pb-3 sm:text-4xl text-2xl">Welcome Back</p>
            <p className="sm:text-xl text-base">Sign in with your data that you entered during your registration</p>
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="email">Email</label>
            <span className="flex items-center gap-4 border sm:px-5 px-2 py-3 rounded-lg">
              <MdOutlineMail className="sm:text-xl text-base" />
              <input {...register("email")} className="border-0 outline-none grow sm:text-base text-sm" type="email" placeholder="Enter your email" />
            </span>
            {errors.email && <p className="text-error text-sm italic">{errors.email.message}</p>}
            <label htmlFor="password">Password</label>
            <span className="flex items-center gap-4 border sm:px-5 px-2 py-3 rounded-lg w-full">
              <TbLockPassword className="sm:text-xl text-base" />
              <input {...register("password")} type={showPassword === false ? "password" : "text"} className="border-0 outline-none grow sm:text-base text-sm" name="password" placeholder="Enter your password"/>
              <button type="button" className="cursor-pointer text-xl" onClick={() => { setShowPassword(!showPassword) }}>
                {showPassword === false ? <LuEye className="sm:text-xl text-base" /> : <LuEyeClosed className="sm:text-xl text-base" />}
              </button>
            </span>
            {errors.password && <p className="text-error text-sm italic">{errors.password.message}</p>}
          </div>
          <div className="text-blue-600 font-medium py-4 flex justify-end sm:text-base text-sm">
            <Link>Forgot Your Password?</Link>
          </div>
          <div className="text-center font-medium sm:text-base text-sm">
            <button type="submit" className="cursor-pointer bg-third w-full text-primary font-bold  py-3 rounded-lg mb-5 hover:bg-secondary hover:text-white transition-colors">
              LOGIN
            </button>
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

export default LoginPage;
