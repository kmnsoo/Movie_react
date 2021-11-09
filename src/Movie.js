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
export default Movie;