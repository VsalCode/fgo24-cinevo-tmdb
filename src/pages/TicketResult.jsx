import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { GiTicket } from "react-icons/gi";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import qr from "../assets/images/QR.svg"

const TicketResult = () => {
  const { queryId } = useParams();
  const dataHistoryPayment = useSelector((state) => state.ticket.historyPayment);
  const filtered = dataHistoryPayment?.filter((e) => e?.idTransaction === queryId )[0];

  return (
    <section className="bg-primary text-white h-fit flex flex-col items-center py-35 gap-7 ">
      <div className="w-fit sm:mx-5 mx-0 flex flex-col items-center gap-7">
      <Toaster/>
        <p className="text-3xl font-semibold text-third text-center">Thankyou For Purchasing</p>
        <div className="bg-white shadow-2xl h-fit flex flex-col gap-7 px-5 py-7">
          <div className="flex flex-col items-center gap-2   text-primary text-center py-3 font-bold">
            <p className="flex items-center gap-2">
              <GiTicket className="text-xl" />
              CINEVO.id
            </p>
            <img src={qr} alt="" />
            <p>
              Total : <span className="bg-third text-secondary font-bold rounded-xl px-2 py-1">$ {filtered.total}</span>
            </p>
          </div>
          <div className=" grid sm:grid-cols-3  gap-7 text-primary  ">
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-3 border-b-1">
                <p className="font-bold">Movie</p>
                <p className=" italic border-none outline-none pb-5 ">Spider-Man: ..</p>
              </div>
              <div className="flex flex-col gap-3 border-b-1">
                <p className="font-bold">Category</p>
                <p className=" italic border-none outline-none pb-5 flex-wrap">{filtered.genres.map((e) => e.name).join(', ')}</p>
              </div>
            </div>
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-3 border-b-1">
                <p className="font-bold">Date</p>
                <p className=" italic border-none outline-none pb-5 ">{filtered.date}</p>
              </div>
              <div className="flex flex-col gap-3 border-b-1">
                <p className="font-bold">Time</p>
                <p className=" italic border-none outline-none pb-5 ">{filtered.time}</p>
              </div>
            </div>
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-3 border-b-1">
                <p className="font-bold">Count</p>
                <p className=" italic border-none outline-none pb-5 ">{filtered.seat.split(",").length}</p>
              </div>
              <div className="flex flex-col gap-3 border-b-1">
                <p className="font-bold">Seats</p>
                <p className=" italic border-none outline-none pb-5 ">{filtered.seat}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <button onClick={() => { toast.success("Ticket Donwloaded!") }} className="bg-third text-primary md:text-base text-sm font-bold px-10 py-3 rounded-md cursor-pointer"  >Donwload Your Ticket</button>
          <Link to="/" className="bg-secondary text-center text-white md:text-base text-sm font-bold px-10 py-3 rounded-md cursor-pointer">Back To Homepage</Link>
        </div>
      </div>
    </section>
  );
};

export default TicketResult;
