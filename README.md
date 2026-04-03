# 🌍 Countries App

> _Explore the world, one country at a time._

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)
![Render](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=white)

---

## 📌 Project Description & Purpose

A full-stack web application for browsing and saving country data sourced from the REST Countries API. Users can view detailed information for each country including population, region, capital, and flag, save countries to a list stored in a database, and track view counts per country page. The app also includes a form for users to submit their information to the database.

---

## 🚀 Live Site

🔗 [View the live app here](https://countries-app-version-4-april-2026.netlify.app/)

---

## 🖼️ Screenshots

**Home Page**
<img width="1421" height="703" alt="Screenshot 2026-04-01 at 1 02 13 PM" src="https://github.com/user-attachments/assets/311d3c76-d4fc-4566-a73c-40c83cce7953" />

**Country Detail Page**
<img width="1388" height="697" alt="country-detail-page" src="https://github.com/user-attachments/assets/1221313f-fa28-4a26-aab2-20845e33e2ef" />

**Saved Countries Page**
<img width="1382" height="689" alt="Screenshot 2026-04-01 at 12 03 27 PM" src="https://github.com/user-attachments/assets/b82bc877-e8d7-432d-af03-acc2214cbb5c" />

---

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
| Deployment | Neon                 |

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

🔗 Full API documentation: [View here](https://github.com/ac-backend/countries-app-instructions/blob/main/version-3/api-documentation.md)

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

**What I learned:**  
How to build a full-stack application from scratch, including setting up a REST API with Express, connecting it to a PostgreSQL database, and fetching and displaying data on the frontend with React.

**What I'm proud of:**  
Successfully connecting the frontend and backend together and implementing features like the save/unsave toggle and the live view count tracker.

**What challenged me:**  
Resolving merge conflicts in Git. I learned that editing files directly on GitHub while also making local changes causes the two versions to diverge, and how to fix it using VS Code's merge editor.

**Future ideas:**

1. Add an interactive world map where you can click on a country directly to visit its detail page
2. Add a quiz mode where users can test their knowledge of country capitals and flags
3. Add a light/dark mode toggle

---

## 🙌 Credits & Shoutouts

**☆ Shout out to my instructors, [@ninhja](https://github.com/ninhja) + [@PhillipDaum](https://github.com/PhillipDaum) for all their patience & guidance!! ☆**
