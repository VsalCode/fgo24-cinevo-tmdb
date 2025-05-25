import React from "react";
import { useState } from "react";
import { RiArrowDropDownLine, RiArrowDropUpLine} from "react-icons/ri";
import { Link } from "react-router-dom";

const OrderHistory = () => {
  const [showDetails, setShowDetails] = useState(false);

  function toogleDetails() {
    setShowDetails(!showDetails);
  }

  return (
    <>
      <section className="bg-secondary w-full rounded-xl grid grid-cols-2">
        <Link to="/account-settings" className="text-center py-5 cursor-pointer font-medium hover:opacity-70 transition-colors">
          Account Settings
        </Link>
        <Link to="/order-history" className="text-center py-5 cursor-pointerhover:text-third font-medium border-b-third border-b-4 hover:opacity-70 transition-colors">
          Order History
        </Link>
      </section>
      <section className="bg-secondary w-full rounded-xl h-fit px-5 py-7">
        <div className="flex-between border-b-2 border-b-third pb-5">
          <div className="flex flex-col gap-3">
            <p>Tuesday, 07 July 2020 - 04:30pm</p>
            <p>Spider-Man: Homecoming</p>
          </div>
          <p className="text-third font-bold text-xl">CineOne21</p>
        </div>
        <div className="flex-between mt-6">
          <div className="flex-1 flex gap-3">
            <button className="text-green bg-[#00BA8833] w-full py-1">Ticket in active</button>
            <button className="text-error bg-[#E82C2C33] w-full py-1">Not Paid</button>
          </div>
          <div className="flex-1 flex justify-end">
            <button onClick={toogleDetails} className="cursor-pointer flex-between">
              <span>Show Details</span> {showDetails === false ? <RiArrowDropUpLine className="text-3xl" /> : <RiArrowDropDownLine className="text-3xl" /> }  
            </button>
          </div>
        </div>
        {showDetails === true && (
          <div className="flex flex-col gap-5 mt-6">
            <p className="font-semibold text-xl text-third pb-3">Ticket Information</p>
            <div className="flex flex-col gap-3">
              <div className="flex-between">
                <span>No. Rekening Virtual : </span>
                <span>12321328913829724</span>
              </div>
              <div className="flex-between">
                <span>Total Payment : </span>
                <span className="text-green font-bold">$30</span>
              </div>
            </div>
            <p className="italic text-sm">
              Pay this payment bill before it is due, <span className="text-error">on June 23, 2023.</span> If the bill has not been paid by the specified time, it will be forfeited
            </p>
            <div className="flex justify-start">
              <button className="bg-third text-primary font-semibold rounded-sm px-5 py-2">Cek Pembayaran</button>
            </div>
          </div>
        )}
      </section>
      <section className="bg-secondary w-full rounded-xl h-fit px-5 py-7">
        <div className="flex-between border-b-2 border-b-third pb-5">
          <div className="flex flex-col gap-3">
            <p>Tuesday, 07 July 2020 - 04:30pm</p>
            <p>Spider-Man: Homecoming</p>
          </div>
          <p className="text-third font-bold text-xl">Hiflix</p>
        </div>
        <div className="flex-between mt-6">
          <div className="flex-1 flex gap-3">
            <button className="text-[#6E7191] bg-[#6E719133] w-full py-1">Ticket Used</button>
            <button className="text-green bg-[#00BA8833] w-full py-1">Paid</button>
          </div>
          <div className="flex-1 flex justify-end">
            <button onClick={toogleDetails} className="cursor-pointer flex-between">
              <span>Show Details</span> {showDetails === false ? <RiArrowDropUpLine className="text-3xl" /> : <RiArrowDropDownLine className="text-3xl" /> }  
            </button>
          </div>
        </div>
        {showDetails === true && (
          <div className="flex flex-col gap-5 mt-6">
            <p className="font-semibold text-xl text-third pb-3">Ticket Information</p>
            <div className="flex gap-5">
              <div className="bg-white">
                <img src="/src/assets/images/QR.svg" alt="" />
              </div>
              <div className="flex flex-col justify-center gap-2">
                <p>Movie : <span className="text-third font-bold" >Thunderbolts</span></p>
                <p>Category : <span className="text-third font-bold" >PG-13</span></p>
                <p>Date : <span className="text-third font-bold" >07 JULY</span></p>
                <p>Time : <span className="text-third font-bold" >2:00 pm</span></p>
                <p>Seat : <span className="text-third font-bold" >C4, C5</span></p>
              </div>
              <div className="flex items-center">
                <p className="font-bold text-xl">TOTAL : <span className="text-third font-bold" >$30</span></p>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default OrderHistory;
