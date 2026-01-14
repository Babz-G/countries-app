import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import SavedCountries from "./pages/SavedCountries";
import CountryDetail from "./pages/CountryDetail";
import { useState, useEffect } from "react";

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
          path="/country/:id"
          element={<CountryDetail countryList={countryList} />}
        />
      </Routes>
    </>
  );
}

export default App;
