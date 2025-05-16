const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const request = {
	fetchTrending: `trending/all/day?api_key=${API_KEY}&language=en-US`,

	fetchNetflixOrginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
	fetchTopRateOriginals: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
	fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,

	fetchComdyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
	fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
	fetchDoucumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
	fetchTvShow: `tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
};
export default request;
