import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import SavedCountries from "./pages/SavedCountries";
import CountryDetail from "./pages/CountryDetail";
import { useState, useEffect } from "react";

import localData from "../localData";
// keeping this as a back up if api fails

function App() {
  const [countryList, setCountryList] = useState([]);

  const getCountryList = async () => {
    try {
      const response = await fetch(
        "https://restcountries.com/v3.1/all?fields=name,flags,population,capital,region,cca3,borders"
      );

      const data = await response.json();
      console.log(data);

      setCountryList(data);
    } catch (error) {
      console.log("API failed, using localData as backup:", error);

      setCountryList(localData);
    }
  };
  useEffect(() => {
    getCountryList();
  }, []);

  return (
    <>
      <header>
        <nav>
          <Link to="/">Where in the world?</Link>
          <Link to="/saved">Saved Countries</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home countryList={countryList} />} />

        <Route
          path="/saved"
          element={<SavedCountries countryList={countryList} />}
        />

        <Route
          path="/country-detail/:countryName"
          element={<CountryDetail countryList={countryList} />}
        />
      </Routes>
    </>
  );
}

export default App;

// ✨✨✨ COMMENTED CODE BELOW ✨✨✨

// import "./App.css";
// import { Routes, Route, Link } from "react-router-dom";
// import Home from "./pages/Home";
// import SavedCountries from "./pages/SavedCountries";
// import CountryDetail from "./pages/CountryDetail";
// import { useState, useEffect } from "react";
// import localData from "../localData";

// function App() {
//   const [countryList, setCountryList] = useState([]);
//   // ✨ state variable to store country data from API
//   // ✨ countryList: holds the current data (initially an empty array)
//   // ✨ setCountryList: function to update the state

//   const getCountryList = async () => {
//     // ✨ Define async  function to fetch country data from REST Countries API
//     // ✨ async keyword enables use of await for handling promises

//     try {
//       // ✨ Begin try block to handle potential errors during API call

//       const response = await fetch(
//         "https://restcountries.com/v3.1/all?fields=name,flags,population,capital,region,cca3,borders"
//       );
//       // ✨ Make HTTP GET request to REST Countries API
//       // ✨ Query parameters specify only required fields to optimize response size
//       // ✨ await pauses execution until the promise resolves

//       const data = await response.json();
//       // ✨ Parse the response body as JSON
//       // ✨ Converts the raw response into a JavaScript array of country objects

//       console.log(data);

//       setCountryList(data);
//       // ✨ Update state with the fetched country data
//       // ✨ This triggers a re-render, passing new data to child components

//     } catch (error) {
//       // ✨ Catch block executes if any error occurs in try block
//       // ✨ Handles network failures, invalid responses, or parsing errors

//       console.log('API failed, using localData as backup:', error);
//       // ✨ Log the error details to console for debugging purposes

//       setCountryList(localData);
//       // ✨ Fallback to static local data if API call fails
//     }
//   };

//   useEffect(() => {
//     getCountryList();
//   }, []);
//   // ✨ Execute getCountryList function when component mounts
//   // ✨ Empty dependency array ensures this runs only once on initial render
//   // ✨ Prevents unnecessary API calls on subsequent re-renders

//   return (
//     <>
//       <header>
//         <nav>

//           <Link to="/">Where in the world?</Link>
//           {/* Nav link to Home page - functions as app title/home button */}

//           <Link to="/saved">Saved Countries</Link>
//           {/* Nav link to Saved Countries page */}
//         </nav>
//       </header>

//       <Routes>
//         {/* Routes container manages which component displays based on URL */}

//         <Route path="/" element={<Home countryList={countryList} />} />
//         {/* ✨ Route for Home page at root URL */}
//         {/* ✨ Passes countryList data as prop to Home component */}

//         <Route
//           path="/saved"
//           element={<SavedCountries countryList={countryList} />}
//         />
//         {/* ✨ Route for Saved Countries page */}
//         {/* ✨ Passes countryList data as prop for potential future use */}

//         <Route
//           path="/country-detail/:countryName"
//           element={<CountryDetail countryList={countryList} />}
//         />
//         {/* ✨ Route for Country Detail page with dynamic URL parameter */}
//         {/* ✨ :countryName captures the country name from URL */}
//         {/* ✨ Passes countryList so component can find and display specific country data */}
//       </Routes>
//     </>
//   );
// }

// export default App;
