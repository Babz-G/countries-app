# 🌍 Countries App

> _Explore the world, one country at a time._

---

## 📌 Project Description & Purpose

A full-stack web application for browsing and saving country data sourced from the REST Countries API. Users can view detailed information for each country including population, region, capital, and flag, save countries to a list stored in a database, and track view counts per country page. The app also includes a form for users to submit their information to the database.

---

## 🚀 Live Site

🔗 [View the live app here](______)

---

## 🖼️ Screenshots

Here is where you'll include a screenshot of your project to show it off!

Instructions to include a screenshot into your README file:

1. Use `Command + Control + Shift + 4` to take a screenshot of your site and copy the screenshot to your clipboard
2. Find your Github `README.md` file on the Github website
3. Edit the site by clicking on the Pencil icon on the top right of the page ✏️
4. Move your cursor to the position where you want to paste the screenshot, then paste it. Github will convert the pasted screenshot into an `<img>` tag
5. Select "Commit changes..." to save your changes

## ✨ Features

- 🗺️ Browse a full list of countries with flags, populations, and regions
- 🔍 Click into any country for a detailed view
- 🔖 Save and unsave countries to a personal list
- 👁️ Track how many times each country page has been visited
- 👤 Submit your name, email, country, and bio to the app's user database

---

## 🛠️ Tech Stack

### **Frontend**

|            |                       |
| ---------- | --------------------- |
| Languages  | HTML, CSS, JavaScript |
| Framework  | React + React Router  |
| Deployment | Netlify               |

### **Server/API**

|            |                      |
| ---------- | -------------------- |
| Languages  | JavaScript           |
| Framework  | Express.js (Node.js) |
| Deployment | Render               |

### **Database**

|            |                     |
| ---------- | ------------------- |
| Language   | SQL                 |
| Deployment | Render (PostgreSQL) |

---

## 🔹 API Endpoints

| Method | Endpoint                    | Description                                     |
| ------ | --------------------------- | ----------------------------------------------- |
| `GET`  | `/get-newest-user`          | Retrieves the most recently added user          |
| `GET`  | `/get-all-users`            | Retrieves all users from the database           |
| `POST` | `/add-one-user`             | Adds a new user to the database                 |
| `GET`  | `/get-all-saved-countries`  | Retrieves a list of all saved countries         |
| `POST` | `/save-one-country`         | Saves a country if it hasn't already been saved |
| `POST` | `/unsave-one-country`       | Unsaves a country if it has been saved          |
| `POST` | `/update-one-country-count` | Updates the view count for a country            |

🔗 Full API documentation: **\_\_**

---

## 🗄️ Database Schema

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

---

## 💭 Reflections

**What I learned:** \_\_\_\_

**What I'm proud of:** \_\_\_\_

**What challenged me:** \_\_\_\_

**Future ideas:**

1. ***
2. ***
3. ***

---

## 🙌 Credits & Shoutouts

**☆ My instructors, [@ninhja](https://github.com/ninhja) + [@PhillipDaum](https://github.com/PhillipDaum)! ☆**
