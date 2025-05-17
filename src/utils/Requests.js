const API_KEY = import.meta.env.VITE_TMDB_API_KEY

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchMovieGenres: `/genre/movie/list?api_key=${API_KEY}&language=en`,
    fetchUpcomingMovies: `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
}

export default requests;
