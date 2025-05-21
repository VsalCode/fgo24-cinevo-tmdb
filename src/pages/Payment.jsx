import { FaCheck } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Payment = () => {
  const nav = useNavigate();
  const [showModal, setShowModal] = useState(false);

  function handlePayment(e) {
    e.preventDefault()

    setShowModal(true);
  }

  return (
    <>
      { showModal === true && <section className="z-100 position fixed w-full h-full TOP-0 bg-[#00000099] flex-center">
        <div className="bg-white h-fit lg:w-[40%] sm:w-[70%] w-[90%] sm:text-sm text-[10px] rounded-4xl text-primary flex flex-col p-7">
          <p className="sm:text-2xl text-sm text-center font-semibold mb-5">Payment Info</p>
          <div className="text-lg grid grid-cols-2 mb-8  sm:text-sm text-[12px]">
            <span className="text-start text-[#8692A6]">No. Rekening Virtual:</span>
            <span className="text-end font-semibold">12321328913829724</span>
          </div>
          <div className="text-lg grid grid-cols-2 mb-8 sm:text-sm text-[12px]">
            <span className="text-start text-[#8692A6]">Total Payment: </span>
            <span className="text-end font-bold">$30</span>
          </div>
          <p>
            Pay this payment bill before it is due, <span className="text-[#a51414] font-bold">on June 23, 2023</span>. If the bill has not been paid by the specified time, it will be forfeited
          </p>
          <button onClick={() => { nav('/ticket') }} type="submit" className="bg-third text-secondary font-bold w-full py-4 rounded-md cursor-pointer mt-5">
            Pay Your Order
          </button>
          <button className="text-secondary font-bold mt-5 cursor-pointer" onClick={() => setShowModal(false)} >Pay Later</button>
        </div>
      </section> }

      <section className="bg-primary text-white flex flex-col items-center gap-10 py-30">
        <div className="flex items-center ">
          <div className="flex-col flex-center gap-3">
            <div className="bg-green-700 text-white font-semibold rounded-full md:text-md text-sm sm:size-9 size-7 flex-center">
              <FaCheck />
            </div>
            <p>Dates & Time</p>
          </div>
          <div className="flex md:before:content-['------------'] md:after:content-['------------'] before:content-['----'] after:content-['----']">
            <div className="flex flex-col flex-center gap-3 px-5">
              <div className="bg-green-700 text-white font-semibold rounded-full md:text-md text-sm sm:size-9 size-7 flex-center">
                <FaCheck />
              </div>
              <p>Seat</p>
            </div>
          </div>
          <div className="flex flex-col flex-center gap-3">
            <div className="bg-third text-primary font-bold rounded-full md:text-md text-sm sm:size-9 size-7 flex-center">3</div>
            <p>Payment</p>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col gap-5 mx-7">
          <form onSubmit={handlePayment} className="w-full md:min-w-[732px] sm:min-w-[500px] h-fit bg-secondary rounded-2xl shadow-xl px-10 py-7">
            <p className="text-4xl font-semibold text-third">Payment Information</p>
            <DetailInfo label="DATE & TIME" value="Tuesday, 07 July 2020 at 02:00pm" />
            <DetailInfo label="MOVIE TITLE" value="Spider-Man: Homecoming" />
            <DetailInfo label="CINEMA NAME" value="CineOne21 Cinema" />
            <DetailInfo label="NUMBER OF TICKETS" value="3 pieces" />
            <DetailInfo label="TOTAL PAYMENT" value="$30,00" variant="text-third font-bold" />
            <p className="text-4xl font-semibold text-star text-third">People Information</p>
            <InputPayment label="Fullname" type="text" defaultValue="Jonas El Rodriguez" />
            <InputPayment label="Email" type="email" defaultValue="jonasrodri123@gmail.com" />
            <InputPayment label="Phone Number" type="number" defaultValue="081445687121" />
            <p className="text-4xl font-semibold text-star text-third">Payment Method</p>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5 mt-10 relative">
              <PaymentKey srcImage="/src/assets/images/dana.svg" />
              <PaymentKey srcImage="/src/assets/images/googlePay.svg" />
              <PaymentKey srcImage="/src/assets/images/bca.svg" />
              <PaymentKey srcImage="/src/assets/images/ovo.svg" />
              <PaymentKey srcImage="/src/assets/images/paypal.svg" />
              <PaymentKey srcImage="/src/assets/images/gopay.svg" />
              <PaymentKey srcImage="/src/assets/images/visa.svg" />
              <PaymentKey srcImage="/src/assets/images/bri.svg" />
            </div>
            <button type="submit" className="bg-third text-primary font-bold w-full py-4 rounded-md cursor-pointer mt-10">
              Pay Your Order
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Payment;

export const DetailInfo = ({ label, value, variant }) => {
  return (
    <div className="flex flex-col gap-3 my-10">
      <p className="font-bold">{label}</p>
      <input className={`${variant} italic border-none outline-none`} value={value} />
      <hr />
    </div>
  );
};

export const InputPayment = ({ label, type, ...props }) => {
  return (
    <div className=" flex flex-col gap-3 my-10 cursor-pointer">
      <label>{label}</label>
      <input className="border p-3 rounded-lg" type={`${type}`} {...props} />
    </div>
  );
};

export const PaymentKey = ({ srcImage }) => {
  return (
    <label className="bg-white border border-third border-2 opacity-30 rounded-xl py-2 flex justify-center items-center cursor-pointer has-checked:opacity-80">
      <input type="radio" name="payment" className="peer hidden" id="payment-method" />
      <img className="object-scale-down" src={`${srcImage}`} alt="payment_method" />
    </label>
  );
};
