# ⚡React Job Listing App

A beginner-friendly full-stack style React project built while learning the fundamentals of modern React.
This project simulates a real job board where users can browse, add, edit and delete job listing using a mock REST API.

---

## Live Demo

👉 **Deployed on Vercel:**


---

## What This Project Theach

This project was built as a hands-on React crash course covering the entire workflow from setup -> production deployment.

I understood the practical usage of:

- Component architecture
- Props & state management
- React Hooks
- Routing (multi-page SPA)
- Data fetching from an API
- CRUD operations
- Form handling
- Production build & deployment

---

## ⚙ Tech Stack

### Frontend
- React (Vite)
- React Router
- Tailwind CSS
- React Toastify

### Backend (Mock API)
- JSON Server

### Deployment
- Vercel

---

## ✨ Features

### Pages
- Home page with hero section
- Job listings page
- Single job details page
- Add job page
- Edit job page
- Custom 404 page

### Functionality
- Fetch jobs from API
- View job details
- Add new job (POST)
- Edit job (PUT)
- Delete job (DELETE)
- Loading spinner during fetch
- Toast notifications for actions
- Responsive UI

---

## 📂 Project Structure

react-job-listing/
│
├── public/
├── src/
│ ├── components/
│ ├── pages/
│ ├── layouts/
│ ├── App.jsx
│ └── main.jsx
│
├── jobs.json
├── package.json
└── vite.config.js

---

## 🚀 Getting Started (Local Setup)

### 1. Clone the repo
### 2. Install dependencies
### 3. Start React app
### 4. Start JSON Server (Mock Backend)

Open a new terminal and run:
npm run server

App runs on:

React -> http://localhost:5173
API -> http://localhost:8000/jobs


---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | /jobs | Get all jobs |
| GET | /jobs/:id | Get single job |
| POST | /jobs | Add new job |
| PUT | /jobs/:id | Update job |
| DELETE | /jobs/:id | Delete job |

---

