import { POSTER_PATH } from "../helpers/urls";

const ElementCard = ({ movie }) => {
  //console.log(movie);

  return (
    <div className="card">
      <img src={`${POSTER_PATH}${movie.poster_path}`} alt="pelicula/serie" />
      <div className="movieDetails">
        <h3 className="movieTitle">{movie.title}</h3>
        <p className="movieRate" style={{ color: movie.vote_average > 7 ? "#0B610B" : movie.vote_average > 5 ? "#DF7401" : "#DF0101" }}>
          {movie.vote_average}
        </p>
      </div>

      <div className="movie-over">
        <h2>Overview:</h2>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
};

export default ElementCard;
