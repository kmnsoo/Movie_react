import {useEffect, useState} from "react";
import Movie from "../components/Movie";

function Home () {
    const [loading, setLoading] =useState(true);
    const[movies, setMovies] = useState([]);
    const getMovies = async() => {
      const json =  await (
        await fetch(
        `https://yts-proxy.now.sh/list_movies.json`
      )
    ).json();
      setMovies(json.data.movies)
      setLoading(false)
    };
    useEffect(()=> {
    getMovies();    
    }, []);
    return(
        <div>
        {loading ? <h1>Loading...</h1> : ( 
        <div>
        {movies.map((movie) => (
         <Movie 
         key ={movie.id} 
         overImg={movie.medium_cover_image} 
         title ={movie.title}
         summary={movie.summary}
         year = {movie.year}
         genres = {movie.genres}
         />    
        ))}
        </div>
        )}
        </div>
    );
};
export default Home;