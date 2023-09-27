const API_KEY = '8dd38ef3c23365afeb640e779ecd988a';

const requests = {
    fetchActionMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchDramaMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=18`,
    fetchRomanceMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchThrillerMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=9648`,
    fetchWesternMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10751`,
    fetchHorrorMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchFantasyMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=14`,
    fetchMusicMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10402`,
    fetchFictionMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=878`,



};

export default requests;