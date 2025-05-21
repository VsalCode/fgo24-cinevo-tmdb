import React from "react";
import { GiTicket } from "react-icons/gi";

const TicketResult = () => {
  return (
    <section className="bg-primary text-white h-fit flex flex-col items-center py-35 gap-7 ">
      <div className="w-[50svw] flex flex-col items-center gap-7">
        <p className="text-3xl font-semibold text-third">Thankyou For Purchasing</p>
        <div className="bg-white shadow-2xl h-fit flex flex-col gap-7 px-5 py-7">
          <div className="flex flex-col items-center gap-2   text-primary text-center py-3 font-bold">
            <p className="flex items-center gap-2">
              {" "}
              <GiTicket className="text-xl" />
              Tickys.id
            </p>
            <img src="/src/assets/images/QR.svg" alt="" />
            <p>
              Total : <span className="bg-third text-secondary font-bold rounded-xl px-2 py-1">$30.00</span>
            </p>
          </div>
          <div className=" grid grid-cols-3 gap-7 text-primary  ">
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-3 border-b-1">
                <p className="font-bold">Movie</p>
                <p className=" italic border-none outline-none pb-5 ">Spider-Man: ..</p>
              </div>
              <div className="flex flex-col gap-3 border-b-1">
                <p className="font-bold">Category</p>
                <p className=" italic border-none outline-none pb-5 ">PG-13</p>
              </div>
            </div>
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-3 border-b-1">
                <p className="font-bold">Date</p>
                <p className=" italic border-none outline-none pb-5 ">07 Jul</p>
              </div>
              <div className="flex flex-col gap-3 border-b-1">
                <p className="font-bold">Time</p>
                <p className=" italic border-none outline-none pb-5 ">2:00pm</p>
              </div>
            </div>
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-3 border-b-1">
                <p className="font-bold">Count</p>
                <p className=" italic border-none outline-none pb-5 ">3 pcs</p>
              </div>
              <div className="flex flex-col gap-3 border-b-1">
                <p className="font-bold">Seats</p>
                <p className=" italic border-none outline-none pb-5 ">C4, C5, C6</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <button className="bg-third text-primary md:text-base text-sm font-bold px-10 py-3 rounded-md cursor-pointer">Donwload Your Ticket</button>
        </div>
      </div>
    </section>
  );
};

export default TicketResult;
