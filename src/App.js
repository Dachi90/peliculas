import { useEffect, useState } from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import { URL_BASE, API_KEY, LANGUAGE } from "./helpers/keys";

function App() {
  const [searchState, setSearchState] = useState("");

  useEffect(() => {
    const url = `${URL_BASE}search/movie${API_KEY}${LANGUAGE}&query=el club de la lucha`;

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json.results);
        setSearchState(json.results);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="appClass">
      <Header />
      <MainContent searchState={searchState} />
    </div>
  );
}

export default App;
