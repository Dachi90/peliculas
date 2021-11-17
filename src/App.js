import { useState } from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import { URL_BASE, API_KEY, LANGUAGE } from "./helpers/keys";

const initialSearchState = [];

function App() {
  const [searchState, setSearchState] = useState(initialSearchState);
  let searchInput = "";

  const handleSearch = () => {
    searchInput = document.getElementById("search").value;
    //console.log(searchInput);

    //Pasar searchInput a la función que realize el fetch para poder crear la url de busqueda con lo que el usuario introdució
    userSearch(searchInput);
  };

  const userSearch = (searchInput) => {
    let url = `${URL_BASE}search/movie${API_KEY}${LANGUAGE}&query=${searchInput}`;
    //console.log(url);

    fetch(url)
      .then((res) => {
        //console.log(res);
        return res.json();
      })
      .then((data) => {
        //console.log(data.results);
        setSearchState(data.results);
        console.log(searchState);
      })

      .catch((err) => err);
  };

  return (
    <div className="appClass">
      <Header handleSearch={handleSearch} />
      <MainContent />
    </div>
  );
}

export default App;
