import { useState, useEffect } from "react";

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

  const getNewestUserData = async () => {
    try {
      const response = await fetch("/api/get-newest-user", {
        method: "GET",
      });
      const data = await response.json();
      const userData = data[0];

      setNewestUserData;
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
  console.log("Form Submitted");

  return (
    <div className="saved-countries-page">
      <h1 className="page-heading">My Saved Countries</h1>
      {newestUserData && (
        <h2 className="welcome">Welcome, {newestUserData.fullName}!</h2>
      )}
      <form className="profile-form">
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
    </div>
  );
}

export default SavedCountries;
