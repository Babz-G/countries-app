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
  const [showForm, setShowForm] = useState(true);
  // ✨✨ ^^ STRETCH GOAL 3 Tracks whether the form should be visible ✨✨
  // ✨✨ Initially true so form shows when page loads ✨✨
  // ✨✨ Changes to false after submission to hide form ✨✨

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  // ✨✨ When you fill out the form and click Submit
  // this function sends your information to the backend
  // and saves it in the database. ✨✨

  const storeUserData = async (data) => {
    // Declaring an async function called storeUserData
    // Async allows us to use 'await' to wait for backend responses
    // The function receives form data through the (data) parameter

    const response = await fetch("/api/add-one-user", {
      // fetch() makes an HTTP request to the backend
      // "/api/add-one-user" is the API endpoint where we're sending the data
      // await makes the code wait for the backend to respond before continuing

      method: "POST",
      // POST means we're SENDING data TO the backend (not getting data)

      headers: {
        "Content-Type": "application/json",
        // Tells the backend were sending the JSON data"
      },

      body: JSON.stringify({
        // JSON.stringify() converts JS object into a JSON string
        // bc data traveling over the internet must be in text format
        // Using dot notation to match our form data with what the backend expects
        name: data.fullName,
        country_name: data.country,
        email: data.email,
        bio: data.bio,
      }),
    });

    // If the response is text type, use response.text()
    // If the response is JSON data, use response.json()
    // Returns a message "Success! User has been added."
    const result = await response.text();
    console.log(result);
  };

  // ✨✨ This handles form submission ✨✨
  // ✨✨ This function is called when the user clicks the Submit button ✨✨
  const handleSubmit = (e) => {
    // The function receives an event object 'e' from the form submission

    e.preventDefault();
    // Prevents the default form behavior (page refresh)
    // Without this, the page would reload and we'd lose all our data

    console.log(formData);

    storeUserData(formData);
    // Calls the storeUserData function and passes it the form data
    // This is what actually sends the POST request to save the data

    setFormData({
      // Resets the form to empty state after submission
      // This clears all the input fields so the user can submit again
      fullName: "",
      email: "",
      country: "",
      bio: "",
    });

    getNewestUserData();
    // Fetches the newest user data from the backend
    // This updates the welcome message to show the user's name after they submit
    setShowForm(false);
  };
  // ✨✨ STRETCH GOAL 3: Hides the form after submission ✨✨
  // ✨✨ Added so the form disappears & shows Resubmit button instead ✨✨

  const getNewestUserData = async () => {
    try {
      const response = await fetch("/api/get-newest-user", {
        method: "GET",
      });
      const data = await response.json();
      const userData = data;

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

      {/* ✨✨ Saved country cards displayed ABOVE the form for better UX ✨✨ */}
      <div className="card-container">
        {matchedCountries.map((country) => (
          <CountryCard country={country} key={country.cca3} />
        ))}
      </div>

      {showForm ? (
        <form className="profile-form" onSubmit={handleSubmit}>
          <h2 className="form-heading">My Profile</h2>
          {/* ✨✨ STRETCH GOAL 3 Conditional rendering based on showForm state ✨✨ */}
          {/* ✨✨ BEFORE: Form was always visible ✨✨ */}
          {/* ✨✨ AFTER: Form shows when showForm is true resubmit button shows when false ✨✨ */}

          {/* ✨✨ If showForm is true display the full form ✨✨ */}
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
      ) : (
        // ✨✨ If showForm is false then display the resubmit button ✨✨
        // ✨✨ Clicking this button sets showForm back to true, revealing the form again ✨✨
        <button className="form-submit" onClick={() => setShowForm(true)}>
          Resubmit
        </button>
      )}
    </div>
  );
}

export default SavedCountries;
