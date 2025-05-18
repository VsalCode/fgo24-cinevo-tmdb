import axios from "../utils/axios";
import requests from "../utils/Requests";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Subscribe from "../components/Subscribe";
import Button from "../components/Button";
import { RiArrowDropDownLine } from "react-icons/ri";
import SearchBar from "../components/SearchBar";
import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Dropdown from "../components/Dropdown";

const Movies = () => {
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

      console.log(updatedMovies);
      setMovies(updatedMovies);
    }
    fetchData();
  }, []);

  return (
    <>
      <header>
        <Navbar />
      </header>
      <section className="mt-35 flex justify-center">
        <div className="flex-center w-300  relative">
          <div className="bg-[linear-gradient(180deg,_rgba(15,16,13,0)_0%,_rgba(15,16,13,0.8)_65.1%)] absolute z-10 rounded-4xl  w-full h-full flex flex-col items-start gap-5 justify-end p-12">
            <div className="chip">LIST MOVIE OF THE WEEK</div>
            <h3 className="text-white font-semibold">
              Experience the Magic of Cinema: <span className="text-primary">Book Your Tickets Today</span>
            </h3>
            <p className="text-white font-medium">Sign up and get the ticket with a lot of discount</p>
          </div>
          <img className="w-300 rounded-4xl relative" src="/src/assets/images/banner-movie.png" alt="" />
        </div>
      </section>
      <section className="m-20">
        <div className="flex-between mb-10">
          <h2 className="font-bold">Now Showing in Cinemas</h2>
          <Dropdown />
        </div>
        <div className="flex gap-7">
          <div>
            <h6 className="font-bold pb-5">Find movie</h6>
            <SearchBar placeholder="Search Your Movies..." />
          </div>
          <div>
            <h6 className="font-bold pb-5">Filters</h6>
            <div className="flex gap-4">
              <Button style="border">ACTION</Button>
              <Button style="border">ADVENTURE</Button>
              <Button style="border">COMEDY</Button>
              <Button style="border">SCI-FI</Button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-7 justify-items-center pt-15">
          {movies.map((item) => (
            <Link to="/movieDetail" key={item.id} className="flex flex-col my-5">
              <div>
                {item.vote_average > 7 && <div className="absolute font-semibold text-primary bg-third shadow-xl px-3 py-1 rounded-br-xl rounded-tl-lg">Recommended</div>}
                <img className="rounded-xl object-cover h-100 w-200" src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt="" />
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
            </Link>
          ))}
        </div>
        <div className="flex-center gap-3 mt-10 text-xl">
          <button className="button-icon bg-third text-primary">
            <FaArrowLeft />
          </button>
          <button className="flex-center bg-primary text-white text-xl font-semibold rounded-full size-10">1</button>
          <button className="flex-center border font-semibold rounded-full size-10">2</button>
          <button className="flex-center border font-semibold rounded-full size-10">3</button>
          <button className="button-icon">
            <FaArrowRight />
          </button>
        </div>
      </section>
      <Subscribe />
      <Footer />
    </>
  );
};

export default Movies;
