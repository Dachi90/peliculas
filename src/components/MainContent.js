import ElementCard from "./ElementCard";

const MainContent = ({ searchState }) => {
  console.log(searchState);
  //es una array con objetos dentro y dentro de cada objero esta cada una de las coincidencias en la busqueda
  // así que no puedo destructirar directamente de searchState

  //Seguramente tenga que hacer un .map de searchState y ir renderizando un ElementCard por cada elemento de searchState

  return (
    <div className="mainContentBox">
      <ElementCard />
      <ElementCard />
      <ElementCard />
      <ElementCard />
      <ElementCard />
    </div>
  );
};

export default MainContent;
