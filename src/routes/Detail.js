import { useEffect, useState } from 'react';
import {useParams,} from 'react-router-dom';
import Movie from '../components/Movie';
import PropTypes from 'prop-types';

function Detail( ) {
    const [movie, setMovie] =useState([]);
    const [loading, setLoading] = useState(true);
    const { id , title,  }= useParams();
    const getMovie = async () => {
        const json = await (
            await fetch(
                `https://yts.mx/api/v2/movie_details.json?movie_id=${id}&with_images=true&with_cast=true`
            )
     ).json();
            setMovie(json.data.movie);
            setLoading(false);
            console.log(json.data.movie.cast);

    };  
    useEffect(() => {
       getMovie();
    }, []);  
   
    return(
        <div>
        {loading ? <h1>Loading...</h1>  : null }
        <div>
         <h1>{movie.title}</h1>
          </div>
          <div>
           <img src = {movie.large_cover_image} alt={title} />
          </div>
          <div>
              <li>Release: {movie.year}</li>
                <li> Rating: {movie.rating}</li>
                  <li> Like_count: {movie.like_count} </li>
          </div>
          <div>
              <h2> Discription</h2>
              <hr/>
            <h3>{movie.description_full}</h3>
            <div>
           <img src = {movie.background_image_original} alt={title} />
                </div>
          </div>
       
     </div>
            
    );
};
Movie.propTypes ={
    cast: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Detail;