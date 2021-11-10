import Movie from "../components/Movie";
import {useEffect, useState} from 'react';
function Home() {

    const [loading ,setLoading] = useState(true);
    const [movies, setMovies] =useState([])
    const getMovies= async() =>{
        const json = await (
            await fetch(
       `https://yts-proxy.now.sh/list_movies.json`
        )
    ).json();
            setMovies(json.data.movies);
            setLoading(false);
            console.log(json.data.movies)
     };
    useEffect(() =>{
       getMovies();
    }, []);
    return(
        <div>
            {loading ?  ( <h1>Loading...</h1>  ) : ( <div>{movies.map((movie) => (
            <Movie 
                key ={movie.id}
                id= {movie.id}
                coverImg = {movie.medium_cover_image} 
                title={movie.title} 
                summary={movie.summary} 
                rating={movie.rating}
                year = {movie.year}
                genres={movie.genres}
                />
             ))}
             </div>
             )}
        </div>
    );
             };
export default Home;