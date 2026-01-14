function SavedCountries() {
  console.log("Form Submitted");
  return (
    // Main container for the entire Saved Countries page
    <div className="saved-countries-page">
      {/* Page title heading */}
      <h1 className="page-heading">My Saved Countries</h1>

      {/* Form container for user profile information */}
      <form className="profile-form">
        {/* Form section heading */}
        <h2 className="form-heading">My Profile</h2>

        {/* Text input for user's full name */}
        <input type="text" placeholder="Full Name" className="form-input" />

        {/* Email input with built-in email validation */}
        <input type="email" placeholder="Email" className="form-input" />

        {/* Text input for user's country */}
        <input type="text" placeholder="Country" className="form-input" />

        {/* Large text area for user's bio - allows multiple lines */}
        <textarea placeholder="Bio" className="form-textarea" />

        {/* Submit button to send form data */}
        {/* Note: Form doesn't have functionality yet - this is just styling for Version 0 */}
        <button type="submit" className="form-submit">
          Submit
        </button>
      </form>
    </div>
  );
}

// Export so this component can be used in App.jsx as a route
export default SavedCountries;
