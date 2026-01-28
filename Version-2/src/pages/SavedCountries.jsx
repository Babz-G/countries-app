import { useState, useEffect } from "react";
import CountryCard from "../Components/CountryCard.jsx";

function SavedCountries({ countryList }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    country: "",
    bio: "",
  });
  const [newestUserData, setNewestUserData] = useState(null);
  const [savedCountries, setSavedCountries] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const storeUserData = async (data) => {
    const response = await fetch("/api/add-one-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.fullName,
        country_name: data.country,
        email: data.email,
        bio: data.bio,
      }),
    });

    const result = await response.text();
    console.log(result);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    storeUserData(formData);
    setFormData({
      fullName: "",
      email: "",
      country: "",
      bio: "",
    });
    getNewestUserData();
  };
  const getNewestUserData = async () => {
    try {
      const response = await fetch("/api/get-newest-user", {
        method: "GET",
      });
      const data = await response.json();
      const userData = data[0];

      setNewestUserData({
        fullName: userData.name,
        email: userData.email,
        country: userData.country_name,
        bio: userData.bio,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const getSavedCountries = async () => {
    try {
      const response = await fetch("/api/get-all-saved-countries", {
        method: "GET",
      });
      const data = await response.json();
      setSavedCountries(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getNewestUserData();
    getSavedCountries();
  }, []);
  const matchedCountries = savedCountries.map((savedCountry) => {
    return countryList.find((country) => {
      return country.name.common === savedCountry.country_name;
    });
  });

  return (
    <div className="saved-countries-page">
      <h1 className="page-heading">My Saved Countries</h1>
      {newestUserData && (
        <h2 className="welcome">Welcome, {newestUserData.fullName}!</h2>
      )}
      <form className="profile-form" onSubmit={handleSubmit}>
        <h2 className="form-heading">My Profile</h2>

        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleInputChange}
          placeholder="Full name"
          className="form-input"
          required
        ></input>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Email"
          className="form-input"
          required
        ></input>
        <input
          type="text"
          name="country"
          value={formData.country}
          onChange={handleInputChange}
          placeholder="Country"
          className="form-input"
          required
        ></input>
        <textarea
          name="bio"
          value={formData.bio}
          onChange={handleInputChange}
          placeholder="Bio"
          className="form-textarea"
          required
        />

        <button type="submit" className="form-submit">
          Submit
        </button>
      </form>
      <div className="card-container">
        {matchedCountries.map((country) => (
          <CountryCard country={country} key={country.cca3} />
        ))}
      </div>
    </div>
  );
}

export default SavedCountries;
