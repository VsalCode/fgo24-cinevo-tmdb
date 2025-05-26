import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdCalendarToday } from "react-icons/md";
import { FaEye } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import { HiOutlineTrash } from "react-icons/hi";
import { Link } from "react-router-dom";

const MovieAdmin = () => {
  return (
    <>
      <section className="bg-secondary text-white flex flex-col gap-6 rounded-4xl md:max-w-[75svw] w-full h-fit p-8">
        <div className="flex justify-between">
          <p className="text-3xl font-medium">List Movie</p>
          <div className="flex gap-4 text-primary" >
            <button className="cursor-pointer bg-[#EFF0F6] flex items-center gap-4 py-1 px-4 rounded-lg">
              <MdCalendarToday/> <span>November 2025</span> <RiArrowDropDownLine className="text-3xl" />
            </button>
            <Link to="/add-movie" className="cursor-pointer bg-third font-semibold  gap-3 py-2 px-4 rounded-lg">
              <span>Add Movies</span>
            </Link>
          </div>
        </div>
        <table className="mt-5">
          <thead className="text-third" >
            <th>No</th>
            <th>Thumbnail</th>
            <th>Movie Name</th>
            <th>Category</th>
            <th>Released Date</th>
            <th>Duration</th>
            <th>Action</th>
          </thead>
          <tbody  >
            <tr className="text-center" >
              <td>1.</td>
              <td className="flex-center py-4">
                <img className="size-13" src="/src/assets/images/thumbnail_movie_admin.png" alt="" />
              </td>
              <td><p>Spiderman HomeComing</p></td>
              <td><p>Action, Adventure</p></td>
              <td><p>07/05/2023</p></td>
              <td><p>2 Hours 15 Minute</p></td>
              <td >
                <button className="me-3" > <FaEye className="text-2xl" /> </button>
                <button className="me-3" > <FaRegEdit className="text-2xl" /> </button>
                <button className="bg-error text-white p-1 rounded-sm cursor-pointer" > <HiOutlineTrash className="text-2xl" /> </button>
              </td>
            </tr>
            <tr className="text-center" >
              <td>2.</td>
              <td className="flex-center py-4">
                <img className="size-13" src="/src/assets/images/thumbnail_movie_admin.png" alt="" />
              </td>
              <td><p>Spiderman Not Coming</p></td>
              <td><p>Action, Adventure</p></td>
              <td><p>07/05/2023</p></td>
              <td><p>2 Hours 15 Minute</p></td>
              <td >
                <button className="me-3" > <FaEye className="text-2xl" /> </button>
                <button className="me-3" > <FaRegEdit className="text-2xl" /> </button>
                <button className="bg-error text-white p-1 rounded-sm cursor-pointer" > <HiOutlineTrash className="text-2xl" /> </button>
              </td>
            </tr>
            <tr className="text-center" >
              <td>3.</td>
              <td className="flex-center py-4">
                <img className="size-13" src="/src/assets/images/thumbnail_movie_admin.png" alt="" />
              </td>
              <td><p>Spiderman On The Way</p></td>
              <td><p>Action, Adventure</p></td>
              <td><p>07/05/2023</p></td>
              <td><p>2 Hours 15 Minute</p></td>
              <td >
                <button className="me-3" > <FaEye className="text-2xl" /> </button>
                <button className="me-3" > <FaRegEdit className="text-2xl" /> </button>
                <button className="bg-error text-white p-1 rounded-sm cursor-pointer" > <HiOutlineTrash className="text-2xl" /> </button>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="flex justify-center gap-3" >
          <div className="bg-third text-primary size-10 flex-center text-xl font-bold rounded-lg" >1</div>
          <div className="bg-[#EFF0F6] text-primary size-10 flex-center text-xl font-bold rounded-lg" >2</div>
          <div className="bg-[#EFF0F6] text-primary size-10 flex-center text-xl font-bold rounded-lg" >3</div>
        </div>
      </section>
    </>
  );
};

export default MovieAdmin;
