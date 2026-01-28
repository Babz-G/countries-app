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
