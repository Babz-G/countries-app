import localData from "../../localData.js";
import CountryCard from "../Components/CountryCard.jsx";

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      {localData.map((country) => (
        <CountryCard country={country} key={country.cca3} />
      ))}
    </div>
  );
}
export default Home;
