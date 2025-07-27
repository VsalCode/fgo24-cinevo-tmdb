import Button from "../../components/Button";
import React, { useEffect, useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { IoSearch } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";
import { bookTicketActions } from "../../redux/reducer/ticket";
import { nanoid } from "@reduxjs/toolkit";
import fallback from "../assets/images/fallback.png";
import fallbackBackdrop from "../assets/images/fallback_backdrop.png";

const MovieDetailPage = () => {
  const nav = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState({});
  const { register, handleSubmit } = useForm({
    defaultValues: {
      date: new Date().toISOString().substring(0, 10),
    },
  });
  const dispatch = useDispatch();
  const [currentUser, setCurrentUser] = useState(null);
  const userLogin = useSelector((state) => state.auth.currentUser);
  const checkDataUsers = useSelector((state) => state.users.users);
  const listMovie = useSelector((state) => state.admin.listMovie);

  useEffect(() => {
    if (userLogin !== null) {
      const filtered = checkDataUsers.filter((e) => e.id === userLogin.id && userLogin.email === e.email)[0];
      setCurrentUser(filtered);
    } else {
      setCurrentUser(null);
    }
  }, [userLogin, checkDataUsers]);

  function handleBookTicket(value) {
    const { cinema, date, time, location } = value;

    if (currentUser === null) {
      toast.error("You must Login or Register!");
    } else if (cinema === null) {
      toast.error("You must choose one cinema!");
    } else if (time === "") {
      toast.error("You must choose time!");
    } else {
      const idTransaction = String(nanoid());

      const bookTicket = {
        userId: currentUser.id,
        idTransaction: idTransaction,
        title: data.title,
        genres: data.genres,
        cinema: cinema,
        date: date,
        time: time,
        poster: data?.poster,
        location: location,
      };

      dispatch(bookTicketActions(bookTicket));
      nav(`/order/${idTransaction}`, { replace: true });
    }
  }

  useEffect(() => {
    const listMovieAdmin = listMovie.find((e) => e.id === id);
    if (listMovieAdmin) {
      setData({
        ...listMovieAdmin,
        genres: listMovieAdmin.genre.split(", ").map((name, index) => ({
          id: `custom-${index}`,
          name: name.trim(),
        })),
        credits: {
          cast: listMovieAdmin.cast.split(", ").map((name) => ({ name: name.trim() })),
          crew: [{ job: "Director", name: listMovieAdmin.director }],
        },
      });
    } else {
      const fetchDetails = async () => {
        try {
          const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}?append_to_response=credits&api_key=${import.meta.env.VITE_TMDB_API_KEY}`);
          const tmdbMovie = res.data;

          const updateTmdbMovieDetail = {
            ...tmdbMovie,
            backdrop: `https://image.tmdb.org/t/p/w1280${tmdbMovie.backdrop_path}`,
            poster: `https://image.tmdb.org/t/p/w500${tmdbMovie?.poster_path}`,
          };

          setData(updateTmdbMovieDetail);
        } catch (error) {
          console.error(error);
        }
      };
      fetchDetails();
    }
  }, []);

  const director = data.credits?.crew?.find((e) => e.job === "Director");

  return (
    <>
      <section className="flex flex-col justify-end mb-15 pt-25">
        <Toaster />
        <div className="flex justify-center relative">
          <div className="bg-[linear-gradient(180deg,_rgba(15,16,13,0)_0%,_rgba(15,16,13,0.8)_65.1%)] h-full w-full rounded-[40px] absolute z-40"></div>
          <img
            className="h-[520px] object-cover w-full rounded-[40px] relative"
            src={data.backdrop}
            onError={(e) => {
              e.currentTarget.src = fallbackBackdrop;
            }}
            alt="backdrop_path"
          />
        </div>

        <div className="flex lg:flex-row lg:justify-between flex-col items-center sm:gap-15 px-20 mt-[-220px] z-50">
          <div className="flex-center lg:w-[25vw]">
            <img
              className="rounded-2xl h-100 w-250 object-contain"
              src={data.poster}
              alt="Poster_Movie"
              onError={(e) => {
                e.currentTarget.src = fallback;
              }}
            />
          </div>
          <div className="flex flex-col gap-15 py-2 h-fit text-white w-[75vw]">
            <div id="movie-overview" className="flex flex-col items-start justify-center gap-3">
              <p className="font-bold md:text-3xl text-2xl bg-third text-primary rounded-sm px-5 py-1">{data.title}</p>
              <p className="text-base font-medium">{data.overview}</p>
              <div id="movie-information" className="flex sm:flex-row flex-col gap-3">
                {data.genres &&
                  data.genres?.map((genre) => (
                    <div key={genre.id} className="text-third border-2 font-medium px-3 py-1 rounded-full sm:text-base text-sm">
                      {genre.name}
                    </div>
                  ))}
              </div>
            </div>

            <div className="text-white text-base flex flex-col gap-4">
              <div className="grid sm:grid-cols-3 ">
                <div className="flex flex-col justify-end sm:pb-0 pb-5">
                  <p className="text-third">Release Date</p>
                  <p className="font-bold">{data.release_date}</p>
                </div>
                <div className=" flex flex-col justify-end sm:pb-0 pb-5">
                  <p className="text-third">Duration</p>
                  <p className="font-bold">{data.runtime} minute</p>
                </div>
                <div className=" flex flex-col justify-end sm:pb-0 pb-5">
                  <p className="text-third">Directed By</p>
                  <p className="font-bold">{director?.name || data.director}</p>
                </div>
              </div>
              <div>
                <div>
                  <p className="text-third">Cast</p>
                  <p className=" text-sm">{data.credits?.cast ? data.credits?.cast?.map((cast) => cast.name).join(" , ") : data.cast}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <form onSubmit={handleSubmit(handleBookTicket)} className="bg-sixth sm:p-20 p-10 h-fit flex flex-col">
        <div className="flex md:flex-row md:justify-between flex-col pb-15">
          <h3 className="font-semibold md:mb-0 mb-5">Book Tickets</h3>
          <Button type="submit" style="bg-third text-secondary font-extrabold md:py-0 py-2">
            BOOK NOW
          </Button>
        </div>
        <div className="flex lg:flex-row flex-col gap-10">
          <div className="w-full">
            <h5 className="font-semibold pb-5">Choose Date</h5>
            <SelectOptions {...register("date")} type="date" id="date" name="date" />
          </div>
          <div className="w-full">
            <h5 className="font-semibold pb-5">Choose Time</h5>
            <SelectOptions {...register("time")} type="time" id="time" name="time" />
          </div>
          <div className="w-full">
            <h5 className="font-semibold pb-5">Choose Location</h5>
            <SelectOptions {...register("location")} type="location" />
          </div>
        </div>
        <div>
          <h5 className="font-semibold pb-10 pt-15">Choose Cinema</h5>
          <div className="flex lg:flex-row flex-col gap-5">
            <SponsorCheckbox cinema="ebv.id" {...register("cinema")} />
            <SponsorCheckbox cinema="hiflix" {...register("cinema")} />
            <SponsorCheckbox cinema="CineOne21" {...register("cinema")} />
            <SponsorCheckbox cinema="idlix" {...register("cinema")} />
          </div>
        </div>
      </form>
    </>
  );
};

export default MovieDetailPage;

function SponsorCheckbox({ cinema, ...props }) {
  return (
    <label className={`sm:w-[269px] w-full h-[153px] px-5 flex flex-col justify-center  gap-7 rounded-xl cursor-pointer border text-fourth has-checked:bg-third has-checked:text-secondary relative`}>
      <div className="flex justify-end">
        <input type="radio" name="cinema" value={`${cinema}`} {...props} />
      </div>
      <h2 className="font-semibold sm:text-4xl text-3xl">{cinema}</h2>
    </label>
  );
}

export const SelectOptions = ({ id, type, name, ...props }) => {
  if (type === "location") {
    return (
      <label htmlFor={type} className="bg-white text-primary font-semibold flex-between gap-5 rounded-full border py-3 px-5 w-full">
        <IoSearch className="text-xl" />
        <select id={type} name={type} {...props} className="grow outline-none">
          <option value="Jakarta">Jakarta</option>
          <option value="Bandung">Bandung</option>
          <option value="Bekasi" selected>
            Bekasi
          </option>
          <option value="Depok">Depok</option>
        </select>
      </label>
    );
  }
  return (
    <label for={id} className="bg-white text-primary font-semibold flex-between gap-5 rounded-full border py-3 px-3">
      <IoSearch className="text-xl" />
      <input className="grow outline-none" type={type} id={id} name={name} {...props} />
    </label>
  );
};
