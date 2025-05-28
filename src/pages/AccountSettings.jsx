import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { userLogin } from "../redux/reducer/auth";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { LuEye, LuEyeClosed } from "react-icons/lu";
import { useState } from "react";

const schema = yup
  .object({
    email: yup.string().email("Email Not Valid!"),
    newPassword: yup.string().min(6, "Password must be longer than 6 characters!"),
    phone: yup.number("Phone must be a number").required("Input your phone number"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("newPassword"), null], "Password must match")
      .required("You must confirm your password!"),
  })
  .required();

const AccountSettings = () => {
  const [showPassword, setShowPassword] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const currentUser = useSelector((state) => state.auth.currentUser);
  const dispatch = useDispatch();

  function handleChangeAcc(value) {
    console.log(value);

    const { fullname, email, newPassword, phone } = value;

    let newObj = {
      ...currentUser,
      fullname: fullname,
      email: email,
      password: newPassword,
      phone: phone,
    };
    // console.log(newObj);
    dispatch(userLogin(newObj));
  }

  return (
    <>
      <section className="bg-secondary w-full rounded-xl grid grid-cols-2">
        <Link to="/account-settings" className="text-center py-5 cursor-pointer font-medium border-b-third border-b-4 hover:opacity-70 transition-colors">
          Account Settings
        </Link>
        <Link to="/order-history" className="text-center py-5 cursor-pointerhover:text-third font-medium hover:opacity-70 transition-colors">
          Order History
        </Link>
      </section>
      <form className="flex flex-col gap-6" onSubmit={handleSubmit(handleChangeAcc)}>
        <section className="bg-secondary w-full rounded-xl h-fit px-5 py-7">
          <p className="mb-5 text-lg font-semibold text-third">Details Information</p>
          <div className="flex flex-col gap-5">
            <label htmlFor="fullname" className="font-semibold">
              Fullname
            </label>
            <input {...register("fullname")} type="text" id="fullname" placeholder="Enter your Fullname" className=" p-3 bg-[#283246] rounded-xl " />
            <div className="flex md:flex-row flex-col md:gap-5 gap-2">
              <div className="flex-1 flex flex-col gap-5">
                <label htmlFor="email" className="font-semibold">
                  Email
                </label>
                <input defaultValue={currentUser?.email} {...register("email")} type="email" id="email" placeholder="Enter your email" className=" p-3 bg-[#283246] rounded-xl " />
                {errors.email && <p className="text-error text-sm italic">{errors.email.message}</p>}
              </div>
              <div className="flex-1 flex flex-col gap-5">
                <label htmlFor="phone" className="font-semibold">
                  Phone Number
                </label>
                <input {...register("phone")} type="number" id="phone" placeholder="Enter phone number" className=" p-3 bg-[#283246] rounded-xl " />
                {errors.phone && <p className="text-error text-sm italic">{errors.phone.message}</p>}
              </div>
            </div>
          </div>
        </section>
        <section className="bg-secondary w-full rounded-xl h-fit px-5 py-7">
          <p className="mb-5 text-lg font-semibold text-third">Account and Privacy</p>
          <div className="flex sm:flex-row flex-col gap-5">
            <div className="flex-1 flex flex-col gap-3">
              <label htmlFor="newPassword" className="font-semibold">
                New Password
              </label>
              <span className="flex-between gap-4 p-3 bg-[#283246] rounded-xl ">
                <input className="flex-1 outline-none" {...register("newPassword")} type={showPassword === true ? "text" : "password"} id="newPassword" placeholder="Enter New Password" />
                <button type="button" className="cursor-pointer" onClick={() => { setShowPassword(!showPassword) }} >
                  {showPassword === true ? <LuEyeClosed className="text-xl" /> : <LuEye className="text-xl" /> }
                </button>
              </span>
              {errors.newPassword && <p className="text-error text-sm italic">{errors.newPassword.message}</p>}
            </div>
            <div className="flex-1 flex flex-col gap-3">
              <label htmlFor="confirmNewPassword" className="font-semibold">
                Confirm New Password
              </label>
              <span className="flex-between gap-4 p-3 bg-[#283246] rounded-xl ">
                <input className="flex-1 outline-none" {...register("confirmPassword")} type={showPassword === true ? "text" : "password"} id="confirmNewPassword" placeholder="Confirm your New Password" />
                <button type="button" className="cursor-pointer" onClick={() => { setShowPassword(!showPassword) }} >
                  {showPassword === true ? <LuEyeClosed className="text-xl" /> : <LuEye className="text-xl" /> }
                </button>
              </span>
              {errors.confirmPassword && <p className="text-error text-sm italic">{errors.confirmPassword.message}</p>}
            </div>
          </div>
        </section>
        <button type="submit" className=" bg-third py-3 px-15 hover: text-primary font-semibold cursor-pointer rounded-xl">
          Update Changes
        </button>
      </form>
    </>
  );
};

export default AccountSettings;
