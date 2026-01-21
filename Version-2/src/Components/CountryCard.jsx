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

// ✨✨✨ COMMENTED CODE BELOW ✨✨✨

// import "../App.css";
// import { Link } from "react-router-dom";

// function CountryCard({ country }) {
//   // ✨ Component receives country object as a prop via destructuring
//   // ✨ This object contains all data for a single country (name, flag, population, etc.)

//   return (
//     <Link to={`/country-detail/${country.name.common}`}>
//       {/* ✨ Link wraps entire card to make it clickable */}
//       {/* ✨ Template literal creates dynamic URL path using country name */}
//       {/* ✨ Example: clicking "France" navigates to /country-detail/France */}

//       <div className="country-card">
//         {/* ✨ Main container for the country card with styling from CSS */}

//         <img
//           src={country.flags.png}
//           // Display country's flag image from API data

//           alt={`Flag of ${country.name.common}`}
//           // ✨ Accessibility attribute describing the image for screen readers
//           // ✨ Template literal dynamically inserts country name

//           className="country-flag"

//         />

//         <div className="country-detail">

//           <h2>{country.name.common}</h2>
//           {/* ✨ Display country name as heading */}
//           {/* ✨ Accesses nested property: country.name.common */}

//           <p>Population: {country.population.toLocaleString()}</p>
//           {/* ✨ Display population with formatted number */}
//           {/* ✨ toLocaleString() adds commas for readability (e.g., 1000000 becomes 1,000,000) */}

//           <p>Region:{country.region}</p>
//           {/* ✨ Display geographic region (e.g., Europe, Asia, Africa) */}

//           <p>Capital: {country.capital ? country.capital[0] : "N/A"}</p>
//           {/* ✨ Display capital city with conditional logic */}
//           {/* ✨ Ternary operator: if capital exists, show first element of capital array */}
//           {/* ✨ If capital doesn't exist (some countries have no official capital), display "N/A" */}
//         </div>
//       </div>
//     </Link>
//   );
// }

// export default CountryCard;
