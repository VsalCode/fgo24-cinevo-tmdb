import axios from "../utils/axios";
import requests from "../utils/Requests";
import { useEffect, useState } from "react";
import Button from "./Button";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const UpcomingMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const UpcomingMovies = await axios.get(requests.fetchUpcomingMovies);
      const dataMovies = UpcomingMovies.data.results;

      // console.log(dataMovies);

      const data = dataMovies.slice(16);
      console.log(data);

      setMovies(data);
    }
    fetchData();
  }, []);

  return (
    <section className="max-h-[1440px] h-fit bg-sixth px-15 py-20">
      <div className="flex">
        <div className="grid grid-cols-4 justify-items-center pb  -15 flex-3">
          {movies.map((item) => (
            <div key={item.id} className="flex items-center justify-between  flex-col">
              <div className="relative ">
                <img className="rounded-xl" src={`https://image.tmdb.org/t/p/w185${item.poster_path}`} alt="" />
              </div>
              <div className="flex-center flex-col text-center py-4">
                <div className="flex-center text-center">
                  <p className="text-lg text-center font-semibold">{item.title || item.name}</p>
                </div>
              </div>
              <div>
                <div className="flex-center gap-2">
                  <div className="flex-center gap-2">
                    <div className="chip">{item.release_date}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex-1 gap-7 mx-10 flex-center">
          <div className="flex flex-col items-start gap-6">
            <div className="chip">UPCOMING MOVIES</div>
            <h2 className="text-[42px] font-bold">Exciting Movie Coming Soon</h2>
          </div>
        </div>
      </div>

      <div className="flex-between pt-10">
        <div className="flex gap-3">
          <Button style="bg-primary text-white">ACTION</Button>
          <Button style="border">ADVENTURE</Button>
          <Button style="border">COMEDY</Button>
          <Button style="border">SCI-FI</Button>
        </div>
        <div className="flex-between gap-5">
          <button className="button-icon">
            <FaArrowLeft />
          </button>
          <button className="button-icon">
            <FaArrowRight />
          </button>
          <Link to="/movies" className="flex items-center bg-primary text-white rounded-full px-4 py-2">
            <span>VIEW ALL</span>
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default UpcomingMovies;
