import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import salesChart from "../assets/images/sales-chart.png"

const DashboardAdmin = () => {
  return (
    <>
      <section className="bg-secondary text-white flex flex-col gap-6 rounded-4xl md:max-w-[70svw] w-full h-fit p-8">
        <p className="text-3xl font-medium">Sales Chart</p>
        <div className="flex sm:flex-row flex-col sm:items-center items-start gap-3 text-primary">
          <button className="cursor-pointer bg-[#EFF0F6] flex items-center gap-3 py-1 px-4 rounded-lg">
            <span>Movies Name</span> <RiArrowDropDownLine className="text-3xl" />
          </button>
          <button className="cursor-pointer bg-[#EFF0F6] flex items-center gap-3 py-1 px-4 rounded-lg">
            <span>Weekly</span> <RiArrowDropDownLine className="text-3xl" />
          </button>
          <button className="cursor-pointer bg-third font-semibold  gap-3 py-2 px-4 rounded-lg">
            <span>Filter</span> 
          </button>
        </div>
        <p className="text-xl">Avengers: End Game</p>
        <img className="rounded-2xl" src={salesChart} alt="sales-chart" />
      </section>
      <section className="bg-secondary text-white flex flex-col gap-6 rounded-4xl md:max-w-[70svw] w-full h-fit p-8">
        <p className="text-3xl font-medium">Ticket Sales</p>
        <div className="flex sm:flex-row flex-col sm:items-center items-start gap-3 text-primary">
          <button className="cursor-pointer bg-[#EFF0F6] flex items-center gap-3 py-1 px-4 rounded-lg">
            <span>Category</span> <RiArrowDropDownLine className="text-3xl" />
          </button>
          <button className="cursor-pointer bg-[#EFF0F6] flex items-center gap-3 py-1 px-4 rounded-lg">
            <span>Location</span> <RiArrowDropDownLine className="text-3xl" />
          </button>
          <button className="cursor-pointer bg-third font-semibold  gap-3 py-2 px-4 rounded-lg">
            <span>Filter</span> 
          </button>
        </div>
        <p className="text-xl">Adventure, Purwokerto</p>
        <img className="rounded-2xl" src={salesChart} alt="sales-chart" />
      </section>
    </>
  );
};

export default DashboardAdmin;
