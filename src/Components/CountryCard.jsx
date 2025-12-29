function CountryCard({ country }) {
  // Destructures country from props to access country data

  return (
    <div className="country-card">
      {/* Main container for a single country card */}

      <img
        src={country.flags.png}
        alt={`Flag of ${country.name.common}`}
        className="country-flag"
      />
      {/* Display the country's flag image and alt text for accessability */}

      <div className="country-detail">
        {/* Container for the text info below the flag */}

        <h2>{country.name.common}</h2>
        {/* Displays country name */}

        <p>Population: {country.population.toLocaleString()}</p>
        {/* Displays population with commas for readability */}

        <p>Region:{country.region}</p>
        {/* Displays region */}

        <p>Capital: {country.capital ? country.capital[0] : "N/A"}</p>
        {/* Displays capital - if country has a capital, show the first one; otherwise show "N/A" */}
      </div>
    </div>
  );
}

export default CountryCard;
// Exports so this component can be imported in Home.jsx

// *******************************************************************************************************************

// ✨✨ OG CODE W/O COMMENTS BELOW ✨✨

// function CountryCard({ country }) {
//     return (
//       <div className="country-card">
//         <img
//           src={country.flags.png}
//           alt={`Flag of ${country.name.common}`}
//           className="country-flag"
//         />
//         <div className="country-detail">
//           <h2>{country.name.common}</h2>
//           <p>Population: {country.population.toLocaleString()}</p>
//           <p>Region:{country.region}</p>
//           <p>Capital: {country.capital ? country.capital[0] : "N/A"}</p>
//         </div>
//       </div>
//     );
//   }
//   export default CountryCard;
