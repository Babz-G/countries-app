import { Link, useParams } from "react-router-dom";

export default function CountryDetail({ countryList }) {
  const countryName = useParams().countryName;
  const country = countryList.find(
    (oneCountry) => oneCountry.name.common === countryName
  );
  if (!country) {
    return <div>Loading...</div>;
  }
  // added this line bc when i refreshed countryDetail page, it crashed.
  // country is undefined bc countryList is empty while api loads.
  // then my cide tries to access country.flag.png but crashes bc country doesnt exist yet.
  // the if (!country) makes sure the country exists before trying to display it.
  return (
    <div className="country-detail-page">
      <Link to="/" className="back-button">
        ← Back
      </Link>

      <div className="detail-content">
        <img
          src={country.flags.png}
          alt={`Individual flag of ${country.name.common}`}
          className="detail-flag"
        />

        <div className="detail-info">
          <h1>{country.name.common}</h1>
          <button className="save-button">Save</button>

          <div className="detail-text">
            <p>
              <strong>Population:</strong> {country.population.toLocaleString()}
            </p>
            <p>
              <strong>Region:</strong> {country.region}
            </p>
            <p>
              <strong>Capital:</strong>{" "}
              {country.capital ? country.capital[0] : "N/A"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// CSS MEASUREMENTS - COUNTRY DETAIL PAGE
// LAYOUT 280, 82, 343, 80
// FLAG 560x401
// CARD 598x323
// H1 124x44
// BUTTON 96X28
// BODY 171x128

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

// // Component is exported as default export for use in App.jsx routing ⬅
