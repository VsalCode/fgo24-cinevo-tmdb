import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from '../utils/axios';
import requests from '../utils/Requests';
import Subscribe from '../components/Subscribe';
import Button from '../components/Button';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Dropdown from '../components/Dropdown';
import { IoSearchSharp } from 'react-icons/io5';
import { useForm } from 'react-hook-form';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const { register, handleSubmit } = useForm();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || '';

  const moviesPerPage = 8;

  useEffect(() => {
    async function fetchData() {
      try {
        const requestGenres = await axios.get(requests.fetchMovieGenres);
        const movieGenres = requestGenres.data.genres;
        setGenres(movieGenres);

        let dataMovies = [];
        if (query) {
          const searchMovies = await axios.get(
            `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&page=${currentPage}`
          );
          dataMovies = searchMovies.data.results;
        } else {
          const requestMovies = await axios.get(`${requests.fetchNowPlaying}&page=${currentPage}`);
          dataMovies = requestMovies.data.results;
        }

        const updatedMovies = dataMovies.map((movie) => {
          const genreNames = movie.genre_ids.map((id) => movieGenres.find((e) => e.id === id)).filter(Boolean);

          return {
            ...movie,
            genre_ids: genreNames,
          };
        });

        setMovies(updatedMovies);
        setFilteredMovies(updatedMovies);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, [currentPage, query]);

  const handleGenreFilter = (genreId) => {
    setSelectedGenre(genreId);
    setCurrentPage(1); 
    if (genreId === '') {
      setFilteredMovies(movies);
    } else {
      const filtered = movies.filter((movie) =>
        movie.genre_ids.some((genre) => genre.id === parseInt(genreId))
      );
      setFilteredMovies(filtered);
    }
  };

  const handleSearch = (data) => {
    const { query: searchQuery } = data;
    if (searchQuery) {
      setSearchParams({ query: searchQuery });
    } else {
      setSearchParams();
    }
  };

  // Pagination
  const totalPages = Math.ceil(filteredMovies.length / moviesPerPage);
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = filteredMovies.slice(indexOfFirstMovie, indexOfLastMovie);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <section className="pt-16 md:pt-20 lg:pt-24 flex justify-center text-white bg-primary">
        <div className="relative w-full max-w-7xl mx-4 sm:mx-6 lg:mx-8">
          <div className="bg-gradient-to-b from-transparent to-gray-900/80 absolute z-10 rounded-3xl w-full h-full flex flex-col items-start gap-4 sm:gap-6 justify-end p-6 sm:p-8 lg:p-12">
            <div className="chip bg-third text-white px-3 py-1 rounded-full text-sm">LIST MOVIE OF THE WEEK</div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold">
              Experience the Magic of Cinema: <span className="text-third">Book Your Tickets Today</span>
            </h3>
            <p className="text-sm sm:text-base font-medium">Sign up and get tickets with exclusive discounts</p>
          </div>
          <img
            className="w-full rounded-3xl object-cover h-64 sm:h-80 lg:h-96"
            src="/src/assets/images/banner-movie.png"
            alt="Movie Banner"
          />
        </div>
      </section>
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 text-white bg-primary">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:justify-between gap-6 md:gap-10 mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">Now Showing in Cinemas</h2>
            <Dropdown />
          </div>
          <div className="flex flex-col lg:flex-row gap-6 md:gap-8 mb-8 md:mb-12">
            <form onSubmit={handleSubmit(handleSearch)} className="w-full lg:w-1/2">
              <h6 className="font-bold mb-4 text-lg">Find Movie</h6>
              <span className="bg-white border-third text-primary flex items-center border rounded-full w-full max-w-[350px] px-5 py-2">
                <button type="submit">
                  <IoSearchSharp className="text-xl" />
                </button>
                <input
                  type="text"
                  className="outline-none border-0 ps-3 w-full grow text-secondary"
                  placeholder="Search Movie..."
                  defaultValue={query}
                  {...register('query')}
                />
              </span>
            </form>
            <div className="w-full lg:w-1/2">
              <h6 className="font-bold mb-4 text-lg">Filters</h6>
              <div className="flex flex-wrap gap-3">
                {genres.slice(0, 8).map((genre) => (
                  <Button
                    key={genre.id}
                    style={`border ${selectedGenre === genre.id ? 'bg-third text-white' : 'text-gray-300'}`}
                    onClick={() => handleGenreFilter(genre.id)}
                  >
                    {genre.name.toUpperCase()}
                  </Button>
                ))}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 justify-between">
            {currentMovies.length > 0 ? (
              currentMovies.map((item) => (
                <Link to={`/movieDetail/${item.id}`} key={item.id} className="flex flex-col justify-between w-full max-w-xs transition-transform duration-300">
                  <div className="relative">
                    {item.vote_average > 7 && (
                      <div className="absolute font-semibold text-primary bg-third shadow-lg px-3 py-1 rounded-br-xl rounded-tl-lg">
                        Recommended
                      </div>
                    )}
                    <img
                      className="rounded-xl object-cover w-full h-80 md:h-96"
                      src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                      alt={item.title}
                    />
                  </div>
                  <div className="flex flex-col pt-4 gap-3 text-center">
                    <h6 className="font-semibold text-base md:text-lg">{item.title || item.name}</h6>
                    <div className="flex justify-center gap-2 flex-wrap">
                      {item.genre_ids.map((genre) => (
                        <div key={genre?.id} className="text-xs bg-gray-700 text-third font-medium px-2 py-1 rounded-full">
                          {genre.name}
                        </div>
                      ))}
                    </div>
                    <Link
                      to={`/movieDetail/${item.id}`}
                      className="bg-third text-primary text-sm md:text-base font-semibold py-2 px-4 rounded-md hover:bg-secondary hover:text-white transition-colors"
                    >
                      View Details
                    </Link>
                  </div>
                </Link>
              ))
            ) : (
              <p className="text-center col-span-full">Movie Not Found</p>
            )}
          </div>
          <div className="flex justify-center items-center gap-3 mt-10 md:mt-12 text-lg">
            <button
              className="button-icon bg-third text-white p-2 rounded-full disabled:opacity-50"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <FaArrowLeft />
            </button>
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index + 1}
                className={`flex-center text-sm md:text-base font-semibold rounded-full w-10 h-10 ${
                  currentPage === index + 1 ? 'bg-third text-white' : 'border border-gray-600 text-gray-300'
                }`}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            ))}
            <button
              className="button-icon bg-third text-white p-2 rounded-full disabled:opacity-50"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </section>
      <Subscribe />
    </>
  );
};

export default Movies;