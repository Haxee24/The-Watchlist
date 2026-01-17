const APIKEY = "756a9e946e402dd8bf6ae794977741c4";
const BASEURL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
    const response = await fetch (`${BASEURL}/movie/popular?api_key=${APIKEY}`);
    const data = await response.json();
    console.log(data.results);
    return data.results;
}

export const searchMovies = async (query) => {
    const response = await fetch (`${BASEURL}/search/movie?api_key=${APIKEY}&query=${encodeURIComponent(query)}`);
    const data = await response.json();
    return data.results;
}