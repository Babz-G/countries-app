import "../App.css";
import { Link } from "react-router-dom";

function CountryCard({ country }) {
  return (
    <Link to={`/country-detail/${country.name.common}`}>
      <div className="country-card">
        <img
          src={country.flags.png}
          alt={`Flag of ${country.name.common}`}
          className="country-flag"
        />
        <div className="country-detail">
          <h2>{country.name.common}</h2>
          <p>Population: {country.population.toLocaleString()}</p>
          <p>Region:{country.region}</p>
          <p>Capital: {country.capital ? country.capital[0] : "N/A"}</p>
        </div>
      </div>
    </Link>
  );
}

export default CountryCard;
