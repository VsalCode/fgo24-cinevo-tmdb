import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    email: yup.string().email("Email Not Valid!").required("Email is required!"),
  })
  .required();


const Subscribe = () => {
  const {register, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(schema)
  })

  const handleSubscribe = () => {

    toast.success(`Subscribe Success, please check your email!`)
  }

  return (
    <section className="lg:mx-15 md:mx-10 mx-5 h-fit py-20">
      <Toaster/>
      <form onSubmit={handleSubmit(handleSubscribe)} className="bg-third rounded-4xl flex-center flex-col md:p-15 px-5">
        <div className="max-w-[795px] w-full flex flex-col items-center gap-10 py-10">
          <div>
            <p className="lg:text-6xl md:text-5xl text-2xl font-semibold text-center text-secondary">Subscribe to Our Newsletter</p>
          </div>
          <div className=" flex md:flex-row md:justify-between flex-col w-full gap-5">
            <input {...register('name')} type="text" className="input-subscribe text-primary " placeholder="Your First Name" />
            <input {...register('email')} type="email" className="input-subscribe text-primary" placeholder="Your Email Address" />
          </div>
          <button className="cursor-pointer w-full bg-primary text-white font-semibold rounded-full py-3">subscribe now</button>
        </div>
            {errors.email && <p className="text-error">{errors.email.message}</p> }
      </form>
    </section>
  );
};

export default Subscribe;
