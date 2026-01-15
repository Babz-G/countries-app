import CountryCard from "../Components/CountryCard.jsx";
import { useState } from "react";

function Home({ countryList }) {
  const [searchText, setSearchText] = useState("");

  const [selectedRegion, setSelectedRegion] = useState("");

  const filteredCountries = countryList.filter((country) => {
    const matchesSearch = country.name.common
      .toLowerCase()
      .includes(searchText.toLowerCase());

    const matchesRegion =
      selectedRegion === "" || country.region === selectedRegion;

    return matchesSearch && matchesRegion;
  });

  if (countryList.length === 0) {
    return <div>Loading countries...</div>;
  }

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
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>

        <select
          className="region-filter"
          value={selectedRegion}
          onChange={(e) => setSelectedRegion(e.target.value)}
        >
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
        {filteredCountries

          .sort((a, b) => a.name.common.localeCompare(b.name.common))

          .map((country) => (
            <CountryCard country={country} key={country.cca3} />
          ))}
      </div>
    </div>
  );
}
export default Home;

// ✨✨✨ COMMENTED CODE BELOW ✨✨✨

// import CountryCard from "../Components/CountryCard.jsx";
// // ✨ Import CountryCard component to display individual country cards

// import { useState } from "react";
// // ✨ Import useState hook to manage search and filter state

// function Home({ countryList }) {
//   // ✨ Component receives countryList prop from App.jsx containing API data

//   const [searchText, setSearchText] = useState("");
//   // ✨ State variable to track user's search input
//   // ✨ searchText: holds current value of search bar
//   // ✨ setSearchText: function to update searchText
//   // ✨ Initialized as empty string

//   const [selectedRegion, setSelectedRegion] = useState("");
//   // ✨ State variable to track selected region from dropdown
//   // ✨ selectedRegion: holds current selected region value
//   // ✨ setSelectedRegion: function to update selectedRegion
//   // ✨ Initialized as empty string (no filter applied)

//   const filteredCountries = countryList.filter((country) => {
//     // ✨ Filter countries based on both search text and selected region
//     // ✨ .filter() creates new array containing only countries that match criteria

//     const matchesSearch = country.name.common
//       .toLowerCase()
//       .includes(searchText.toLowerCase());
//     // ✨ Check if country name contains the search text
//     // ✨ Convert both to lowercase for case-insensitive comparison
//     // ✨ .includes() returns true if search text is found anywhere in country name

//     const matchesRegion =
//       selectedRegion === "" || country.region === selectedRegion;
//     // ✨ Check if country matches selected region
//     // ✨ If selectedRegion is empty string, show all countries (no filter)
//     // ✨ Otherwise, only include countries where region matches selection

//     return matchesSearch && matchesRegion;
//     // ✨ Return true only if BOTH conditions are met
//     // ✨ Country must match search text AND selected region to be included
//   });

//   // ✨ Loading state handling
//   if (countryList.length === 0) {
//     return <div>Loading countries...</div>;
//   }
//   // ✨ If countryList is empty (API still loading), display loading message
//   // ✨ Prevents errors from trying to filter an empty array
//   // ✨ Once API data arrives, component re-renders with actual data

//   return (
//     <div className="homepage-content">

//       <div className="filters-container">

//         <div className="search-container">

//           <svg
//             className="search-icon"
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="#848484"
//             strokeWidth="2"
//           >
//             {/* SVG magnifying glass icon */}

//             <circle cx="11" cy="11" r="8"></circle>
//             {/* Circle portion of magnifying glass */}

//             <path d="m21 21-4.35-4.35"></path>
//             {/* Handle portion of magnifying glass */}
//           </svg>

//           <input
//             type="text"
//             placeholder="Search for a country..."
//             className="search-bar"
//             value={searchText}
//             // Controlled input: value is tied to searchText state

//             onChange={(e) => setSearchText(e.target.value)}
//             // ✨ Event handler fires every time user types
//             // ✨ e.target.value contains current input value
//             // ✨ Updates searchText state, triggering re-render and filter update
//           />
//         </div>

//         <select
//           className="region-filter"
//           value={selectedRegion}
//           // ✨ Controlled select: value is tied to selectedRegion state

//           onChange={(e) => setSelectedRegion(e.target.value)}
//           // ✨ Event handler fires when user selects new option
//           // ✨ Updates selectedRegion state, triggering re-render and filter update
//         >
//           <option value="">Filter by Region</option>
//           {/* ✨  Default option with empty value - shows all regions */}

//           <option value="Africa">Africa</option>
//           <option value="Americas">Americas</option>
//           <option value="Antarctic">Antarctic</option>
//           <option value="Asia">Asia</option>
//           <option value="Europe">Europe</option>
//           <option value="Oceania">Oceania</option>
//           {
//         </select>
//       </div>

//       <div className="card-container">

//         {filteredCountries

//           .sort((a, b) => a.name.common.localeCompare(b.name.common))
//           // ✨ Sort countries alphabetically by name
//           // ✨ .localeCompare() properly handles alphabetical sorting with special characters
//           // ✨ Compares two countries (a and b) at a time

//           .map((country) => (
//             // ✨ Loop through each country in the filtered and sorted array
//             // ✨ .map() transforms each country object into a CountryCard component

//             <CountryCard
//               country={country}
//               // ✨ Pass entire country object as prop to CountryCard

//               key={country.cca3}
//               // ✨ Unique key for React to track each card efficiently
//               // ✨ cca3 is a unique 3-letter country code (e.g., "USA", "FRA")
//               // ✨ Required by React for list items to optimize rendering
//             />
//           ))}
//       </div>
//     </div>
//   );
// }

// export default Home;
