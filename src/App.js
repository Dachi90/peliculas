import { useEffect, useState } from "react";
import MainContent from "./components/MainContent";
import { API_KEY, LANGUAGE, TRENDING, URL_BASE } from "./helpers/urls";
import logo from "./assets/logo.png";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const trendingURL = `${URL_BASE}${TRENDING}${API_KEY}${LANGUAGE}`;
  const userSearchUrl = `https://api.themoviedb.org/3/search/multi?api_key=73b7f93676cf548e83b720fd7de7b73b&language=es-ES&query=`;

  useEffect(() => {
    fetch(trendingURL)
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        setMovies(data.results);
      });
  });

  const handleOnSubmit = (e) => {
    e.preventDefault();
    fetch(userSearchUrl + searchTerm)
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        setMovies(data.results);
      });
  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="appClass">
      <header className="header">
        <div className="logo">
          <img src={logo} alt="logo" />
          <span>TMDb</span>
        </div>
        <form onSubmit={handleOnSubmit}>
          <input type="search" name="search" className="searchInput" id="search" placeholder="Película..." value={searchTerm} onChange={handleOnChange} />
        </form>
      </header>
      <MainContent data={movies} />
    </div>
  );
}

export default App;
