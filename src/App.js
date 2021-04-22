import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import {getMovies} from "./api.js"
import Card from "./components/Cards"
/*

Implement an infinite scrolling component that retrieves items from the API when the user presses a button to get more results. 
Do not retrieve additional items if the max amount of items (totalResults key in response) has already been retrieved and disable the button.

Sample API:
http://www.omdbapi.com/

Sample Request:
http://www.omdbapi.com/?apikey=6f02c9a3&s=Batman&page=1

BONUS: 
Build a search bar which will query the movie api based on the user input

How would you handle the FE having 1mil+ items?

How would you refactor the component to be used with two more API's / items?

React demo environment (as needed): https://repl.it/languages/reactjs

Sample response:

{"Search":[{"Title":"Batman Begins","Year":"2005","imdbID":"tt0372784","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BZmUwNGU2ZmItMmRiNC00MjhlLTg5YWUtODMyNzkxODYzMmZlXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg"}],"totalResults":"381","Response":"True"}

*/


function App() {

  const [movies,setMovies] = useState([])
  const [totalResults,setTotalResults] = useState(0)
  const [page,setPage] = useState(0)
  const [disableFetch,setDisableFetch] = useState(false)
  useEffect(()=>{

    fetch();

  },[])
  useEffect(()=>{

    if(movies.length > totalResults){
      setDisableFetch(true)
    }

  },[movies])
  const fetch = ()=>{

    const nextPage = page + 1
    
    getMovies({page:nextPage}).then((response)=> {
      console.log(response)
      const {totalResults, Search} = response
      setMovies([...movies,...Search])
      setTotalResults( totalResults)
      setPage(nextPage)
      
    })
    // getMovies().then((response)=> setMovies([...movies,...response]))
  }
  const handlerFetch  = ()=>{

    fetch()
  }
  return (
    <div className="App">

      {
        movies.map((movie)=>(<Card movie={movie}/>))
      }
     
     {
       JSON.stringify(page)
     }
     <button onClick={handlerFetch}>Fetch</button>
    </div>
  );
}

export default App;
