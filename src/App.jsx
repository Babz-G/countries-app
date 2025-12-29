import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import SavedCountries from "./pages/SavedCountries";
import CountryDetail from "./pages/CountryDetail";

function App() {
  return (
    <>
      <header>
        <nav>
          <Link to="/">Where in the world?</Link>
          <Link to="/saved">Saved Countries</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/saved" element={<SavedCountries />} />
        <Route path="/country/:id" element={<CountryDetail />} />
      </Routes>
    </>
  );
}

export default App;
