const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const request={
FetchTrending:`trending/all/day?api_key=${API_KEY}&language=en-US`,

FetchNetflixOrginals:`/disover/tv?api_key=${API_KEY}&with_networks=213`,
FetchTopRateOriginals:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
FetchActionMovies:`/discover/movie?api_key=${API_KEY}&With_genres=28`,

FetchComdyMovies:`/discover/movie?api_key=${API_KEY}&With_genres=35`,
FetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&With_genres=10749`,
FetchDoucumentaries:`/discover/movie?api_key=${API_KEY}&With_genres=99`,
FetchTvShow:`tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
}
export default request;
