import { useEffect, useState } from "react";
import axios from "../utils/axios";
import requests from "../utils/Requests";
import "swiper/css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const NowShowingMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const requestMovies = await axios.get(requests.fetchTrending);
      const dataMovies = requestMovies.data.results;
      const requestGenres = await axios.get(requests.fetchMovieGenres);
      const movieGenres = requestGenres.data.genres;

      // console.log(dataMovies);
      // console.log(genres);

      const updatedMovies = dataMovies.map((movie) => {
        const genreNames = movie.genre_ids.map((id) => movieGenres.find((e) => e.id === id)).filter(Boolean);

        return {
          ...movie,
          genre_ids: genreNames,
        };
      });

      // console.log(updatedMovies);
      const data = updatedMovies.slice(16);
      setMovies(data);
    }
    fetchData();
  }, []);

  return (
    <div className="w-full my-20">
      <div className="flex justify-between items-center">
        <button className="button-icon">
          <FaArrowLeft />
        </button>
        <h3 className="font-semibold">Now Showing in Cinemas</h3>
        <button className="button-icon">
          <FaArrowRight />
        </button>
      </div>
      <div className="grid grid-cols-4 gap-5 justify-items-center py-15">
        {movies.map((item) => (
          <div key={item.id} className="flex flex-col justify-between">
            <div className="relative ">
              {item.vote_average > 7 && <div className="absolute text-primary bg-third px-2 py-1 rounded-b-lg ">Recommended</div> }
              <img className="rounded-xl" src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt="" />
            </div>
            <div className="flex flex-col pt-5 gap-2">
              <div className="flex justify-center items-center text-center">
                <h6 className="font-semibold">{item.title || item.name}</h6>
              </div>
              <div className="flex justify-center items-center gap-2 ">
                <div className="flex-center gap-2 pt-4">
                  {item.genre_ids.map((genre) => (
                    <div key={genre?.id} className="text-sm bg-sixth text-fifth font-medium px-2 py-1 rounded-full">
                      {genre.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex-center">
        <Link to="/movies" className="flex items-center bg-primary text-white rounded-full px-4 py-2">
          <span>VIEW ALL</span>
          <FaArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default NowShowingMovies;
