# 🎬 Movie Search App  
A fast and responsive **React + Vite** application that allows users to search for movies using the **OMDb API**.  
Includes search functionality, a movie grid, a detailed modal view, loading/error handling, and demo fallback when API keys are missing.

This project is designed to demonstrate strong front-end engineering skills including API integration, component-based architecture, clean UI layouts, and modern development workflows.

---

## 🚀 Live Demo  
🔗 https://YOUR-VERCEL-URL-HERE  

---

## 📸 Screenshots  
`./screenshots/movie.png`
`./screenshots/movie2.png`
`./screenshots/tenet.png`


---

## 🛠️ Tech Stack

### **Frontend**
- React (Vite)
- Axios (API calls)
- Vanilla CSS (custom styles)
- ES Modules + Modern JavaScript

### **API**
- OMDb API (Open Movie Database)
https://omdbapi.com/

---

## ✨ Features

### 🔍 Movie Search
- Search movies by title
- Live API results from OMDb
- Graceful fallback to demo data if API is unavailable or API key is missing

### 🖼️ Movie Grid
- Responsive, CSS-based card layout
- Movie posters, title, year, and short overview

### 📖 Movie Details Modal
- Full details via OMDb:  
  - Plot  
  - Genre  
  - Runtime  
  - IMDb Rating  
  - Actors  
  - Director  
- Smooth UI overlay with close button

### ⚠️ Error & Loading States
- Loading indicator during API calls
- User-friendly error messages
- Automatic fallback to demo mode

### 💡 Developer-Friendly UX
- Easy `.env` configuration  
- Clean, simple architecture  
- Mock fallback mode for demos and offline development

---

## 📂 Folder Structure
movie-search-app/
│
├── public/
│
├── src/
│ ├── api.js // OMDb API logic (search + details)
│ ├── App.jsx // Main application logic
│ ├── main.jsx // React entry point
│ ├── styles.css // Custom CSS styles
│ └── components/
│     ├── SearchBar.jsx // Search input bar
│     ├── MovieGrid.jsx // Movie list grid
│     ├── MovieCard.jsx // Movie cards
│     └── MovieModal.jsx // Details modal with full info
│
├── .gitignore
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md


## 👤 Author
Harshal Uikey



