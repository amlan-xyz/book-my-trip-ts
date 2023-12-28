import { useTravelContext } from "../../context/TravelContext";

export const Home = () => {
  const { continents } = useTravelContext();
  return (
    <div className="home__container">
      <h1>Home page</h1>
      {continents?.map((continent) => (
        <li key={continent.id}>{continent.name}</li>
      ))}
    </div>
  );
};
