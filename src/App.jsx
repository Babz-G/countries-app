import "./App.css";
// Imports styles for the entire app

import { Routes, Route, Link } from "react-router-dom";
// Imports routing components: Routes (container), Route (defines paths), Link (navigation)

import Home from "./pages/Home";
import SavedCountries from "./pages/SavedCountries";
import CountryDetail from "./pages/CountryDetail";
// Imports all the page components

function App() {
  return (
    <>
      <header>
        <nav>
          <Link to="/">Where in the world?</Link>
          {/* Links to Home page */}

          <Link to="/saved">Saved Countries</Link>
          {/* Links to Saved Countries page */}
        </nav>
      </header>
      {/* Navigation header - displays on all pages */}

      <Routes>
        {/* Container for all route definitions */}

        <Route path="/" element={<Home />} />
        {/* Home page route */}

        <Route path="/saved" element={<SavedCountries />} />
        {/* Saved Countries page route */}

        <Route path="/country/:id" element={<CountryDetail />} />
        {/* Country Detail page route - :id is a dynamic parameter */}
      </Routes>
    </>
  );
}

export default App;
// Export so this component can be used in main.jsx

// *******************************************************************************************************************

// ✨✨ OG CODE W/O COMMENTS BELOW ✨✨

// import "./App.css";
// import { Routes, Route, Link } from "react-router-dom";
// import Home from "./pages/Home";
// import SavedCountries from "./pages/SavedCountries";
// import CountryDetail from "./pages/CountryDetail";

// function App() {
//   return (
//     <>
//       <header>
//         <nav>
//           <Link to="/">Where in the world?</Link>
//           <Link to="/saved">Saved Countries</Link>
//         </nav>
//       </header>

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/saved" element={<SavedCountries />} />
//         <Route path="/country/:id" element={<CountryDetail />} />
//       </Routes>
//     </>
//   );
// }

// export default App;
