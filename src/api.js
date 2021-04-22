export const getMovies = ({page = 0}) =>  fetch(`http://www.omdbapi.com/?apikey=6f02c9a3&s=Batman&page=${page}`)
    .then((response) => response.json())
    // .then((data) => data);


export default {};
