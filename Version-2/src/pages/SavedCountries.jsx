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
      {/* <form className="profile-form" onSubmit={handleSubmit}>
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
      </form> */}
      {showForm ? (
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
      ) : (
        <button className="form-submit" onClick={() => setShowForm(true)}>
          Resubmit
        </button>
      )}

      <div className="card-container">
        {matchedCountries.map((country) => (
          <CountryCard country={country} key={country.cca3} />
        ))}
      </div>
    </div>
  );
}

export default SavedCountries;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ✨✨✨ COMMENTED CODE BELOW ✨✨✨

// import { useState, useEffect } from "react";
// import CountryCard from "../Components/CountryCard.jsx";

// function SavedCountries({ countryList }) {
//   ✨✨ // This holds the current state of the controlled form ✨✨
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     country: "",
//     bio: "",
//   });

//   ✨✨ // Stores the newest user data from the backend ✨✨
//   const [newestUserData, setNewestUserData] = useState(null);

//   ✨✨ // Stores the array of saved countries from the backend ✨✨
//   const [savedCountries, setSavedCountries] = useState([]);

//   ✨✨// Updates the state when input values change✨✨
//   const handleInputChange = (e) => {
//     const { name, value } = e.target; ✨✨Gets the name and value from the input field✨✨
//     setFormData({ ...formData, [name]: value }); // ✨✨Updates only the field that changed✨✨
//   };

//   ✨✨// Function for storing Form data✨✨
//   const storeUserData = async (data) => {
//     ✨✨ // Sends POST request to save user data to backend✨✨
//     const response = await fetch("/api/add-one-user", {
//       method: "POST", ✨✨// Type of HTTP request✨✨
//       headers: {
//         "Content-Type": "application/json", ✨✨// Specify the type of data being sent✨✨
//       },
//       ✨✨ // Use stringify method to format data to be sent to backend✨✨
//       ✨✨ // Use dot notation to get the correct data✨✨
//       body: JSON.stringify({
//         name: data.fullName,
//         country_name: data.country,
//         email: data.email,
//         bio: data.bio,
//       }),
//     });

//     ✨✨ // If the response is text type, then use response.text()✨✨
//     ✨✨ // If the response is json data, use response.json()✨✨
//     const result = await response.text();
//     console.log(result);
//   };

//   ✨✨// Handle form submission✨✨
//   ✨✨ // Call the form data storing function in here✨✨
//   const handleSubmit = (e) => {
//     e.preventDefault(); ✨✨ // Prevent page from refreshing✨✨
//     console.log(formData); ✨✨ // Log the form data being submitted✨✨
//     storeUserData(formData); ✨✨ // Send the form data to the backend✨✨

//     ✨✨// Reset the form to empty state✨✨
//     setFormData({
//       fullName: "",
//       email: "",
//       country: "",
//       bio: "",
//     });

//     getNewestUserData(); ✨✨// Refresh the welcome message to show the new user✨✨
//   };

//   ✨✨// Get newest user form data✨✨
//   const getNewestUserData = async () => {
//     try {
//       ✨✨// Fetch the most recently added user from the backend✨✨
//       const response = await fetch("/api/get-newest-user", {
//         method: "GET",
//       });
//       const data = await response.json(); ✨✨// Convert response to JSON✨✨
//       const userData = data[0]; ✨✨// Get the first (and only) user object from the array✨✨

//       ✨✨// Update state with the user data✨✨
//       setNewestUserData({
//         fullName: userData.name,
//         email: userData.email,
//         country: userData.country_name,
//         bio: userData.bio,
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   ✨✨// Gets all saved countries from the backend✨✨
//   const getSavedCountries = async () => {
//     try {
//       ✨✨// Fetchs all saved countries✨✨
//       const response = await fetch("/api/get-all-saved-countries", {
//         method: "GET",
//       });
//       const data = await response.json(); ✨✨// Converts response to JSON✨✨
//       setSavedCountries(data); ✨✨// Stores the array of saved countries in state✨✨
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   ✨✨// Run swhen the component first loads✨✨
//   useEffect(() => {
//     getNewestUserData(); ✨✨// Gets the newest user to display welcome message✨✨
//     getSavedCountries(); ✨✨// Gets all saved countries to display them✨✨
//   }, []); ✨✨ // Empty array means this only runs once when page loads✨✨

//   ✨✨ // Matches saved country names with full country objects from countryList✨✨
//   ✨✨ // savedCountries has: [{country_name: "Japan"}, {country_name: "Germany"}]✨✨
//   ✨✨ // We need to find the full country objects with flags, population, etc.✨✨
//   const matchedCountries = savedCountries.map((savedCountry) => {
//     ✨✨ // For each saved country name, find the matching full country object✨✨
//     return countryList.find((country) => {
//      ✨✨ // Compare the country name from backend with the country name from API✨✨
//       return country.name.common === savedCountry.country_name;
//     });
//   });

//   return (
//     <div className="saved-countries-page">
//       <h1 className="page-heading">My Saved Countries</h1>

//      ✨✨ {/* If newestUserData exists, show welcome message */}✨✨
//       {newestUserData && (
//         <h2 className="welcome">Welcome, {newestUserData.fullName}!</h2>
//       )}

//      ✨✨ {/* Form with handleSubmit function called on submit */}✨✨
//       <form className="profile-form" onSubmit={handleSubmit}>
//         <h2 className="form-heading">My Profile</h2>

//        ✨✨ {/* Full Name input controlled by formData.fullName */}✨✨
//         <input
//           type="text"
//           name="fullName"
//           value={formData.fullName}
//           onChange={handleInputChange}
//           placeholder="Full name"
//           className="form-input"
//           required
//         ></input>

//       ✨✨{/* Email input - controlled by formData.email */}✨✨
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleInputChange}
//           placeholder="Email"
//           className="form-input"
//           required
//         ></input>

//         ✨✨{/* Country input - controlled by formData.country */}✨✨
//         <input
//           type="text"
//           name="country"
//           value={formData.country}
//           onChange={handleInputChange}
//           placeholder="Country"
//           className="form-input"
//           required
//         ></input>

//        ✨✨ {/* Bio textarea - controlled by formData.bio */}✨✨
//         <textarea
//           name="bio"
//           value={formData.bio}
//           onChange={handleInputChange}
//           placeholder="Bio"
//           className="form-textarea"
//           required
//         />

//         ✨✨{/* Submit button */}✨✨
//         <button type="submit" className="form-submit">
//           Submit
//         </button>
//       </form>

//      ✨✨ {/* Display all saved countries as CountryCard components */}✨✨
//       <div className="card-container">
//         {matchedCountries.map((country) => (
//           ✨✨// Render each country as a CountryCard with unique key✨✨
//           <CountryCard country={country} key={country.cca3} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default SavedCountries;
