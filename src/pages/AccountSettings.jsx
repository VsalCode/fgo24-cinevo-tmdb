import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LuEye, LuEyeClosed } from "react-icons/lu";
import { useState } from "react";
import { updateUser } from "../redux/reducer/users";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import toast, { Toaster } from "react-hot-toast";

const schema = yup.object().shape({
  fullname: yup.string().optional(),
  email: yup.string().email("Invalid email format").optional(),
  phone: yup.string().matches(/^\d+$/, "Phone number must contain only digits").optional(),
  newPassword: yup.string().optional(),
  confirmPassword: yup.string().when("newPassword", {
    is: (newPassword) => newPassword && newPassword.length > 0,
    then: () =>
      yup
        .string()
        .required("Please confirm your password")
        .oneOf([yup.ref("newPassword")], "Passwords must match"),
    otherwise: () => yup.string().optional(),
  }),
});

const AccountSettings = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.auth.currentUser);
  const checkDataUsers = useSelector((state) => state.users.users);
  const currentUser = checkDataUsers.find((e) => e.id === userLogin.id && e.email === userLogin.email);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      fullname: currentUser?.fullname || "",
      email: currentUser?.email || "",
      phone: currentUser?.phone || "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  function handleChangeAcc(value) {
    const { fullname, email, newPassword, phone } = value;

    const newObj = {
      ...currentUser,
      fullname: fullname || currentUser.fullname,
      email: email || currentUser.email,
      password: newPassword ? window.btoa(newPassword) : currentUser.password,
      phone: phone || currentUser.phone,
    };

    dispatch(updateUser(newObj));
    toast.success("Account Settings Updated!")
  }

  return (
    <>
      <section className="bg-secondary w-full rounded-xl grid grid-cols-2">
        <Toaster/>
        <Link to="/account-settings" className="text-center py-5 cursor-pointer font-medium border-b-third border-b-4 hover:opacity-70 transition-colors">
          Account Settings
        </Link>
        <Link to="/order-history" className="text-center py-5 cursor-pointer hover:text-third font-medium hover:opacity-70 transition-colors">
          Order History
        </Link>
      </section>
      <form className="flex flex-col gap-6" onSubmit={handleSubmit(handleChangeAcc)}>
        <section className="bg-secondary w-full rounded-xl h-fit px-5 py-7">
          <p className="mb-5 text-lg font-semibold text-third">Details Information</p>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="fullname" className="font-semibold">
                Fullname
              </label>
              <input {...register("fullname")} type="text" id="fullname" placeholder="Enter your Fullname" className="p-3 bg-[#283246] rounded-xl" />
              {errors.fullname && <p className="text-red-500 text-sm">{errors.fullname.message}</p>}
            </div>
            <div className="flex md:flex-row flex-col md:gap-5 gap-2">
              <div className="flex-1 flex flex-col gap-2">
                <label htmlFor="email" className="font-semibold">
                  Email
                </label>
                <input {...register("email")} type="email" id="email" placeholder="Enter your email" className="p-3 bg-[#283246] rounded-xl" />
                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
              </div>
              <div className="flex-1 flex flex-col gap-2">
                <label htmlFor="phone" className="font-semibold">
                  Phone Number
                </label>
                <input {...register("phone")} type="text" id="phone" placeholder="Enter phone number" className="p-3 bg-[#283246] rounded-xl" />
                {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
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
              <span className="flex-between gap-4 p-3 bg-[#283246] rounded-xl">
                <input className="flex-1 outline-none" {...register("newPassword")} type={showPassword ? "text" : "password"} id="newPassword" placeholder="Enter New Password" />
                <button type="button" className="cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <LuEyeClosed className="text-xl" /> : <LuEye className="text-xl" />}
                </button>
              </span>
              {errors.newPassword && <p className="text-red-500 text-sm">{errors.newPassword.message}</p>}
            </div>
            <div className="flex-1 flex flex-col gap-3">
              <label htmlFor="confirmNewPassword" className="font-semibold">
                Confirm New Password
              </label>
              <span className="flex-between gap-4 p-3 bg-[#283246] rounded-xl">
                <input className="flex-1 outline-none" {...register("confirmPassword")} type={showPassword ? "text" : "password"} id="confirmNewPassword" placeholder="Confirm your New Password" />
                <button type="button" className="cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <LuEyeClosed className="text-xl" /> : <LuEye className="text-xl" />}
                </button>
              </span>
              {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>}
            </div>
          </div>
        </section>
        <button type="submit" className="bg-third py-3 px-15 hover:text-primary font-semibold cursor-pointer rounded-xl">
          Update Changes
        </button>
      </form>
    </>
  );
};

export default AccountSettings;
