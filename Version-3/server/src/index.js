// importing our Node modules
import express from "express"; // the framework that lets us build a web server
import pg from "pg"; // pg stands for PostgreSQL, for connecting to the database
import config from "./config.js"; // importing our database connection string

// connect to our PostgreSQL database, or db for short
const db = new pg.Pool({
  connectionString: config.databaseUrl, // this contains credentials to access the database. Keep this private!!!
  ssl: true, // use SSL encryption when connecting to the database
});

const app = express(); // creating an instance of the express module

app.use(express.json()); // This server will receive and respond in JSON format

const port = 3000; // Setting which port to listen to to receive requests

//defining our port, then turning on our server to listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

// ✨✨ HELPER FUNCTIONS ✨✨

// 1. getNewestUser()
async function getNewestUser() {
  const result = await db.query(
    "SELECT * FROM users ORDER BY user_id DESC LIMIT 1"
  );
  return result.rows[0];
}

// 2. addOneUser()
async function addOneUser(name, country_name, email, bio) {
  await db.query(
    "INSERT INTO users (name, country_name, email, bio) VALUES ($1, $2, $3, $4)",
    [name, country_name, email, bio]
  );
}

// 3. getAllSavedCountries()
async function getAllSavedCountries() {
  const result = await db.query("SELECT country_name FROM saved_countries");
  return result.rows;
}

// 4. saveOneCountry()
async function saveOneCountry(country_name) {
  await db.query(
    "INSERT INTO saved_countries (country_name) VALUES ($1) ON CONFLICT (country_name) DO NOTHING;",
    [country_name]
  );
}
// 5. unsaveOneCountry()
async function unsaveOneCountry(country_name) {
  await db.query("DELETE FROM saved_countries WHERE country_name = $1;", [
    country_name,
  ]);
}

// 6. updateOneCountryCount()
async function updateOneCountryCount(country_name) {
  const result = await db.query(
    "INSERT INTO country_counts (country_name, count) VALUES ($1, 1) ON CONFLICT (country_name) DO UPDATE SET count = country_counts.count + 1 RETURNING count;",
    [country_name]
  );
  return result.rows[0];
}
