function SavedCountries() {
  return (
    <div className="saved-countries-page">
      <h1 className="page-heading">My Saved Countries</h1>

      <form className="profile-form">
        <h2 className="form-heading">My Profile</h2>

        <input type="text" placeholder="Full Name" className="form-input" />

        <input type="email" placeholder="Email" className="form-input" />

        <input type="text" placeholder="Country" className="form-input" />

        <textarea placeholder="Bio" className="form-textarea" />

        <button type="submit" className="form-submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default SavedCountries;
