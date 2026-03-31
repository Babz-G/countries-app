# 🌍 Countries App

## 📌 Project Description & Purpose

**This project is a full-stack web application for browsing and saving country data sourced from the REST Countries API. Users can view detailed information for each country including population, region, capital, and flag, save countries to a list stored in a database and track view counts per country page. The app also includes a form for users to submit their information to the database.**

## 🚀 Live Site

Here's the link to view the live app: \***\*\_\_\_\*\***

## 🖼️ Screenshots
<img width="1388" height="693" alt="countries-app-homepage" src="https://github.com/user-attachments/assets/ca1e8042-63ac-452f-9549-1af941d995de" />

## ✨ Features

This is what you can do on the app:

- _Browse a full list of countries with flags, populations, and regions_
- _Click into any country to see a detailed page with more info_
- _Save and unsave countries to a Saved Countries list_
- _View how many times each country page has been visited_
- _Add yourself as a user with your name, email, country, and bio_

## 🛠️ Tech Stack

**Frontend**

- **Languages:** HTML, CSS, JavaScript
- **Framework:** React (with React Router)
- **Deployment:** Netlify

**Server/API**

- **Languages:** JavaScript
- **Framework:** Express.js (Node.js)
- **Deployment:** Render

**Database**

- **Languages:** SQL
- **Deployment:** Render (PostgreSQL)

## 🔹 API Documentation

These are the API endpoints I built:

1. GET /get-newest-user ☞ Retrieves the most recently added user
2. GET /get-all-users ☞ Retrieves all users from the database
3. POST /add-one-user ☞ Adds a new user to the database
4. GET /get-all-saved-countries ☞ Retrieves a list of all saved countries
5. POST /save-one-country ☞ Saves a country if it hasn't already been saved
6. POST /unsave-one-country ☞ Unsaves a country if it has been saved
7. POST /update-one-country-count ☞ Updates the view count for a country

Here's the link to the full API documentation: \***\*\_\_\*\***

## 🗄️ Database Schema

Here’s the SQL I used to create my tables:

```sql
-- users table
CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
  country_name VARCHAR NOT NULL,
  email VARCHAR NOT NULL UNIQUE,
  bio VARCHAR NOT NULL
);

-- saved_countries table
CREATE TABLE saved_countries (
  saved_country_id SERIAL PRIMARY KEY,
  country_name VARCHAR NOT NULL UNIQUE
);

-- country_counts table
CREATE TABLE country_counts (
  country_count_id SERIAL PRIMARY KEY,
  country_name VARCHAR NOT NULL UNIQUE,
  count INTEGER NOT NULL
);
```

## 💭 Reflections

**What I learned:** \***\*\_\_\_\*\***

**What I'm proud of:** \***\*\_\_\_\*\***

**What challenged me:** \***\*\_\_\_\*\***

**Future ideas for how I'd continue building this project:**

1. ***
2. ***
3. ***

## 🙌 Credits & Shoutouts

**My instructors, [@ninhja](https://github.com/ninhja) + [@PhillipDaum](https://github.com/PhillipDaum)!**
