import { POSTER_PATH } from "../helpers/urls";

const ElementCard = ({ movie }) => {
  console.log(movie);

  return (
    <div className="card">
      <img src={`${POSTER_PATH}${movie.poster_path}`} alt="pelicula/serie" />
      <div className="movieDetails">
        <h3 className="movieTitle">{movie.title}</h3>
        <p className="movieRate">{movie.vote_average}</p>
      </div>
    </div>
  );
};

export default ElementCard;
