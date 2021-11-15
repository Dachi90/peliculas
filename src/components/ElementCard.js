const ElementCard = () => {
  return (
    <div className="card">
      <img src="https://image.tmdb.org/t/p/original/a26cQPRhJPX6GbWfQbvZdrrp9j9.jpg" alt="pelicula/serie" />
      <div className="movieDetails">
        <h3 className="movieTitle">Película 1</h3>
        <button className="movieButton">Ver más</button>
      </div>
    </div>
  );
};

export default ElementCard;
