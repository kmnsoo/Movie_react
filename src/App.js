import { useEffect, useState } from "react";

function App() {
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
  return (
    <div>
      {loading ? <h1>Loading...</h1> : ( 
      <div>
      {movies.map(movie => (
      <div key={movie.id}>
        <img src={movie.medium_cover_image} />
        <h2>{movie.title}</h2>
        <p>{movie.summary}</p>
        <h4>Year: {movie.year}</h4>
        <ul>
          {movie.genres.map((genre) =>(<li key={genre}>{genre}</li>))}
        </ul>
      </div>
      ))}
      </div>
      )}
      </div>
  );
}

export default App;
