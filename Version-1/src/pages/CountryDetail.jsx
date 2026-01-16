import { Link, useParams } from "react-router-dom";

export default function CountryDetail({ countryList }) {
  const countryName = useParams().countryName;
  console.log(countryName);
  const country = countryList.find(
    (oneCountry) => oneCountry.name.common === countryName
  );
  return (
    <div>
      <h1>{country.name.common}</h1>
      <img
        src={country.flags.png}
        alt={`Individual flag of ${country.name.common}`}
      />
      <p>Population: {country.population.toLocaleString()}</p>
      <p>Region: {country.region}</p>
      <p>Capital: {country.capital[0]}</p>
    </div>
  );
}

// ✨✨✨ COMMENTED CODE BELOW ✨✨✨

// import { Link, useParams } from "react-router-dom";
// // ✨ Import Link for navigation and useParams to access URL parameters
// // ✨ useParams extracts dynamic values from the current route's URL

// export default function CountryDetail() {
//   // ✨ Component displays detailed information about a specific country

//   const countryName = useParams().countryName;
//   // ✨ Extract the country name from the URL parameter
//   // ✨ useParams() returns an object containing all URL parameters
//   // ✨ .countryName accesses the :countryName parameter defined in the route
//   // ✨ Example: if URL is /country-detail/France, countryName will be "France"

//   console.log(countryName);

//   return (
//     <div>
//       <h1>Country Detail Page</h1>
//       <p>Details</p>

//     </div>
//   );
// }

// // Component is exported as default export for use in App.jsx routing
