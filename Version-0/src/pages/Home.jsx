import localData from "../../localData.js";
import CountryCard from "../Components/CountryCard.jsx";
import { useState } from "react";

function Home() {
  // Create state variable to track what user types in search bar
  // searchText stores the current value, setSearchText updates it
  // searchText starts off as an empty string when component first renders.
  const [searchText, setSearchText] = useState("");

  // Create state variable to track which region user selects from dropdown
  // selectedRegion stores the current value, setSelectedRegion updates it
  const [selectedRegion, setSelectedRegion] = useState("");

  // Filter the countries based on both search text and selected region
  const filteredCountries = localData.filter((country) => {
    // Check if the country's name includes the search text (case-insensitive)
    // .toLowerCase() makes both strings lowercase so "FRANCE" matches "france"
    // .includes() checks if one string contains another
    const matchesSearch = country.name.common
      .toLowerCase()
      .includes(searchText.toLowerCase());

    // Check if country's region matches the selected region
    // If no region is selected (empty string), show all regions
    // Otherwise, only show countries from the selected region
    const matchesRegion =
      selectedRegion === "" || country.region === selectedRegion;

    // Return true only if BOTH search and region conditions are met
    // This country will be included in filteredCountries array
    return matchesSearch && matchesRegion;
  });

  return (
    <div className="homepage-content">
      {/* Container holds both search bar and region filter side-by-side */}
      <div className="filters-container">
        {/* Search bar container with magnifying glass icon */}
        <div className="search-container">
          {/* SVG magnifying glass icon positioned absolutely inside search bar */}
          <svg
            className="search-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#848484"
            strokeWidth="2"
          >
            {/* Circle part of magnifying glass */}
            <circle cx="11" cy="11" r="8"></circle>
            {/* Handle part of magnifying glass */}
            <path d="m21 21-4.35-4.35"></path>
          </svg>

          {/* Search input field */}
          <input
            type="text"
            placeholder="Search for a country..."
            className="search-bar"
            value={searchText}
            // When user types, update searchText state with the new value
            // This triggers a re-render and filters the countries
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>

        {/* Region filter dropdown */}
        <select
          className="region-filter"
          value={selectedRegion}
          // When user selects a region, update selectedRegion state
          // This triggers a re-render and filters the countries
          onChange={(e) => setSelectedRegion(e.target.value)}
        >
          {/* Default option shows "Filter by Region" and has empty value */}
          <option value="">Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Antarctic">Antarctic</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>

      {/* Grid container displays all the filtered country cards */}
      <div className="card-container">
        {filteredCountries
          // Sort countries alphabetically by their common name
          // .sort() compares two countries (a and b) at a time
          // .localeCompare() properly handles alphabetical sorting
          .sort((a, b) => a.name.common.localeCompare(b.name.common))

          // Loop through each filtered and sorted country
          // Create a CountryCard component for each one
          .map((country) => (
            <CountryCard
              country={country}
              // key helps React track each card efficiently
              // cca3 is a unique 3-letter country code from the data
              key={country.cca3}
            />
          ))}
      </div>
    </div>
  );
}

// Export so this component can be used in App.jsx as a route
export default Home;
