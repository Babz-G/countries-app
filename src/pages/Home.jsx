import localData from "../../localData.js";
import CountryCard from "../Components/CountryCard.jsx";

function Home() {
  return (
    <div className="homepage-content">
      <div className="filters-container">
        <div className="search-container">
          <svg
            className="search-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#848484"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.35-4.35"></path>
          </svg>
          <input
            type="text"
            placeholder="Search for a country..."
            className="search-bar"
          />
        </div>

        <select className="region-filter">
          <option value="">Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Antarctic">Antarctic</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>

      <div className="card-container">
        {localData
          .sort((a, b) => a.name.common.localeCompare(b.name.common))
          .map((country) => (
            <CountryCard country={country} key={country.cca3} />
          ))}
      </div>
    </div>
  );
}

export default Home;

// *******************************************************************************************************************

// ✨✨ OG CODE W/O COMMENTS BELOW ✨✨
