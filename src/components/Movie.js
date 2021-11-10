import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

function Movie({ id, coverImg, rating, year, title, summary, genres, cast}) {
    return (
<div>
    <img src = {coverImg} alt={title} />
    <h2>
    <Link to = {`/movie/${id}`}>{title}</Link>
    </h2>
    <p>{summary}</p>
    <ul>
    </ul>
    <ul>Genres:
        <li> 
            {genres.map((g) => (
            <li key = {g}>{g}</li> 
            ))}
        </li>
    </ul>
    
    </div>
    );
   };

   Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    cast:PropTypes.arrayOf(PropTypes.string).isRequired
};
export default Movie;
