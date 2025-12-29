import localData from "../../localData.js";
import CountryCard from "../Components/CountryCard.jsx";

function Home() {
  return (
    <div>
      <div className="card-container">
        {localData.map((country) => (
          <CountryCard country={country} key={country.cca3} />
        ))}
      </div>
    </div>
  );
}
export default Home;
