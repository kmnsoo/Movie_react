import PropTypes from 'prop-types';

function Movie({coverImg, title, summary, year, genres}) {
    return (
    <div >
        <img src={coverImg} alt = {title}/>
        <h2>{title}</h2>
        <p>{summary}</p>
        <h4>Year: {year}</h4>
        <ul>
          {genres.map((genre) =>(<li key={genre}>{genre}</li>))}
        </ul>
      </div>
    );
};

Movie.propTypes = {
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}
export default Movie;
