import ElementCard from "./ElementCard";

const MainContent = ({ data }) => {
  console.log(data);
  return (
    <div className="mainContentBox">
      {data.map((movie) => (
        <ElementCard key={data.id} movie={movie} />
      ))}
    </div>
  );
};

export default MainContent;
