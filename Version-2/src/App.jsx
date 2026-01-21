import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import SavedCountries from "./pages/SavedCountries";
import CountryDetail from "./pages/CountryDetail";
import { useState, useEffect } from "react";
import localData from "./localData";

function App() {
  const [countryList, setCountryList] = useState([]);
  // Declaring a state variable
  const getCountryList = async () => {
    // Async gives access to await
    try {
      const response = await fetch(
        "https://restcountries.com/v3.1/all?fields=name,flags,population,capital,region,cca3,borders"
      );
      const data = await response.json();
      console.log(data);
      setCountryList(data);
    } catch (error) {
      setCountryList(localData);
      // if api fails this will use the local data
      console.log(error);
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
// // ✨ Import routing components from React Router library
// // ✨ Routes: container for all route definitions
// // ✨ Route: defines individual page routes
// // ✨ Link: creates navigation links without page refresh

// import Home from "./pages/Home";
// import SavedCountries from "./pages/SavedCountries";
// import CountryDetail from "./pages/CountryDetail";
// // ✨ Import page components that will be rendered for each route

// import { useState, useEffect } from "react";
// // ✨ Import React hooks for state management and side effects
// // ✨ useState: manages component state (data that can change over time)
// // ✨ useEffect: executes code when component mounts or dependencies change

// import localData from "../localData";
// // ✨ Import static country data as fallback in case API request fails

// function App() {
//   const [countryList, setCountryList] = useState([]);
//   // ✨ Initialize state variable to store country data from API
//   // ✨ countryList holds the current data (initially an empty array)
//   // ✨ setCountryList function to update the state

//   const getCountryList = async () => {
//     // ✨ Define asynchronous function to fetch country data from REST Countries API
//     // ✨ async keyword enables use of WAIT for handling promises

//     try {
//       // ✨  Begin try block to handle potential errors during API call

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
//       // ✨ Log the fetched data to console for debugging and verification

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
//       // ✨ Ensures application remains functional without internet connection
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
//           {/* ✨ Navigation link to Home page - functions as app title/home button */}

//           <Link to="/saved">Saved Countries</Link>
//           {/* ✨ Navigation link to Saved Countries page */}
//         </nav>
//       </header>

//       <Routes>
//         {/* ✨ Routes container manages which component displays based on URL */}

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
//         {/* ✨ the :countryName part captures the country name from URL */}
//         {/* ✨ Passes countryList so component can find and display specific country data */}
//       </Routes>
//     </>
//   );
// }

// export default App;
