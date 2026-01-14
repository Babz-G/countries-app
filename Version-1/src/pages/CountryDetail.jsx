import { Link, useParams } from "react-router-dom";

export default function CountryDetail() {
  const countryName = useParams().countryName;
  console.log(countryName);
  return (
    <div>
      <h1>Country Detail Page</h1>
      <p>Details</p>
    </div>
  );
}
