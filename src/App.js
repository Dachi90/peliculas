import { useEffect, useState } from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import { API_KEY, LANGUAGE, TRENDING, URL_BASE } from "./helpers/urls";

function App() {
  const [movies, setMovies] = useState([]);

  const trendingURL = `${URL_BASE}${TRENDING}${API_KEY}${LANGUAGE}`;

  useEffect(() => {
    fetch(trendingURL)
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        setMovies(data.results);
      });
  });

  return (
    <div className="appClass">
      <Header />
      <MainContent data={movies} />
    </div>
  );
}

export default App;
