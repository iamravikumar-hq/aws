# 🎬 HEARTZZY — Global Movie Discovery & Recommendation Platform

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)](https://firebase.google.com/)
[![Chart.js](https://img.shields.io/badge/Chart.js-FF6384?style=for-the-badge&logo=chartdotjs&logoColor=white)](https://www.chartjs.org/)
[![TMDB API](https://img.shields.io/badge/TMDB_API-01B4E4?style=for-the-badge&logo=themoviedatabase&logoColor=white)](https://www.themoviedb.org/documentation/api)

> **HEARTZZY** is a modern, high-performance, client-side cinema discovery, recommendation, and analytics web application. It eliminates movie decision fatigue through intelligent multi-factor matching (**CineMatch**), side-by-side film comparison, real-time catalog search across 600,000+ films, dynamic streaming guide integration, and interactive genre breakdown analytics.

---

## 🌟 Key Features

### 1. 🔍 Comprehensive Movie Discovery & Live Search
- **Live TMDB v3 Catalog**: Instant access to global and regional releases, trending titles, top-rated classics, and upcoming theatrical premieres.
- **Hybrid Data Pipeline**: Smoothly connects with the TMDB v3 and OMDb APIs while providing an offline-ready fallback dataset of 26 curated blockbusters (ensuring a 100% resilient out-of-the-box demo experience without API key setup).
- **Debounced Global Search**: Real-time keyword lookup with instant result dropdown, posters, ratings, and year tags.
- **Deep Multi-Dimensional Filtering**:
  - **Genres**: Action, Sci-Fi, Drama, Thriller, Comedy, Romance, Horror, Animation, Mystery, Crime, and more.
  - **Languages**: English, Hindi, Tamil, Telugu, Malayalam, Japanese, Korean, French, Spanish, German, Italian, and beyond.
  - **Release Era**: 1970 through 2026+.
  - **Sorting**: Popularity, IMDb rating, release date, and revenue.

### 2. 🧠 CineMatch Wizard (Smart Recommendation Engine)
An interactive decision wizard that tailors movie recommendations based on four situational factors:
- **Available Time**: Quick watch (<90 min), Standard (90–150 min), or Epic marathon (150+ min).
- **Viewing Company**: Solo, Date Night, Friends hang-out, or Family-friendly.
- **Emotional Mood / Vibe**: Mind-bending, High-octane adrenaline, Heartwarming, Spine-chilling, Intellectual, or Laugh-out-loud.
- **Language Preference**: Global cinema or regional spotlight.

### 3. ⚖️ Side-by-Side Movie Comparator Drawer
- Compare any two movies simultaneously.
- Cross-analyze metrics including:
  - IMDb ratings and vote counts
  - Box office gross earnings (USD & INR conversion)
  - Runtime and certification ratings
  - Full cast, director, and genre composition
  - OTT streaming availability

### 4. 📊 Rich Movie Details Modal & Genre Analytics
- **High-Definition Media**: Backdrop banners, official theatrical posters, and live sync badges.
- **Interactive Chart.js Visualizations**: Visual radar/pie breakdown of a film's narrative genre weights (e.g., Biography vs. Drama vs. History).
- **Financial & Awards Accolades**: Academy Awards, BAFTAs, Golden Globes, and box office milestones.
- **Regional OTT Matrix**: Discover where to stream, rent, or buy across multiple countries (India, USA, UK, etc.).

### 5. 🔐 User Authentication & Personal Watchlist
- **Firebase Authentication & Firestore**: Pure username + password registration, login, and cloud profile persistence.
- **Password Strength Analyzer**: Live evaluation bar with real-time feedback.
- **Personal Watchlist**: One-click bookmarking with live counters, persistent session storage, and watchlist filtering.

### 6. 🌓 Design System & UI/UX
- **Dynamic Theming**: Instant switching between dark and light themes with smooth CSS transitions.
- **Mobile Responsive**: Off-canvas sliding drawer for navigation, fluid grid layouts, and carousel swipe strips.
- **Animated Toast Feedback**: Non-intrusive status alerts for user interactions.

---

## 📁 Project Structure

```text
HEARTZZY/
├── index.html            # Main single-page application entry point & UI layout
├── css/
│   ├── styles.css        # Main stylesheet, CSS custom properties, grid & responsiveness
│   └── admin.css         # Admin dashboard and settings styling
├── js/
│   ├── app.js            # Main controller, UI event handling, state machine, modals & Chart.js
│   ├── api.js            # TMDB v3 & OMDb API service layer with caching and fallback routing
│   ├── auth.js           # Firebase Auth & Cloud Firestore integration & user session manager
│   ├── data.js           # Comprehensive built-in multilingual movie database (26 masterpieces)
│   ├── login.js          # Dedicated authentication controller & password strength meter
│   └── admin.js          # Admin console controller, user management, and API key settings
└── README.md             # Project documentation and architecture guide
```

---

## 🚀 Quick Start Guide

HEARTZZY is built with zero-build pure vanilla web technologies (HTML5, CSS3, JavaScript ES6+). No `npm install`, Node.js bundling, or build configurations are required.

### Option 1: Run with VS Code Live Server
1. Open the project folder in **Visual Studio Code**.
2. Install the **Live Server** extension (by Ritwick Dey).
3. Right-click on `index.html` and select **"Open with Live Server"**.
4. The application will launch at `http://127.0.0.1:5500`.

### Option 2: Run with Python (Built-in Server)
Open PowerShell or your terminal in the directory containing `index.html`:

```powershell
# Python 3.x
python -m http.server 8000
```
Then visit `http://localhost:8000` in your web browser.

### Option 3: Run with Node.js `npx serve`
```powershell
npx serve .
```

### Option 4: Direct Browser Execution
Double-click `index.html` to open it directly in Google Chrome, Microsoft Edge, Mozilla Firefox, or Apple Safari. *(Note: Running through a local HTTP server is recommended for full Firebase and CDN compatibility).*

---

## ⚙️ Configuration & API Keys

### Live API Keys (Optional)
The application includes pre-configured demo API keys and a complete built-in dataset in `js/data.js` so it functions immediately without configuration.

If you wish to use your own keys:
1. **The Movie Database (TMDB)**: Get a free API key from [themoviedb.org](https://www.themoviedb.org/settings/api).
2. **Open Movie Database (OMDb)**: Get a free API key from [omdbapi.com](https://www.omdbapi.com/apikey.aspx).
3. Keys can be updated directly inside `js/api.js` or dynamically saved via the application's Admin / Settings interface into browser `localStorage`:
   - `heartzzy_tmdb_key`
   - `heartzzy_omdb_key`

### Firebase Configuration (Optional)
Firebase configuration is managed inside `js/auth.js`. To connect your own Firebase project:
1. Create a project on the [Firebase Console](https://console.firebase.google.com/).
2. Enable **Authentication** (Email/Password provider) and **Cloud Firestore**.
3. Update the `DEFAULT_FIREBASE_CONFIG` object in `js/auth.js`:
   ```javascript
   const DEFAULT_FIREBASE_CONFIG = {
     apiKey: "YOUR_API_KEY",
     authDomain: "YOUR_PROJECT.firebaseapp.com",
     projectId: "YOUR_PROJECT_ID",
     storageBucket: "YOUR_PROJECT.appspot.com",
     messagingSenderId: "YOUR_SENDER_ID",
     appId: "YOUR_APP_ID"
   };
   ```

---

## 🛠️ Technology Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend Markup & Semantics** | HTML5 (Semantic landmarks, Accessible ARIA dialogs) |
| **Styling & Theming** | Pure CSS3 (CSS Variables, Flexbox, Grid, Custom scrollbars, Transitions) |
| **Scripting & Logic** | Modern Vanilla JavaScript (ES6+ Classes, Async/Await, Web Storage) |
| **Data Visualization** | [Chart.js](https://www.chartjs.org/) (Interactive Radar & Doughnut/Pie Charts) |
| **Iconography** | [Lucide Icons](https://lucide.dev/) |
| **Authentication & Database** | [Google Firebase Auth](https://firebase.google.com/products/auth) & [Cloud Firestore](https://firebase.google.com/products/firestore) |
| **Movie Metadata APIs** | [TMDB API v3](https://developer.themoviedb.org/reference/intro/getting-started) & [OMDb API](https://www.omdbapi.com/) |

---

## 🌐 Browser Compatibility

HEARTZZY is tested and compatible with all modern evergreen browsers:
- **Google Chrome** (v90+)
- **Microsoft Edge** (v90+)
- **Mozilla Firefox** (v88+)
- **Apple Safari** (v14+)
- **Mobile Browsers** (Chrome for Android, iOS Safari)

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
Feel free to customize, modify, and extend it for your own cinema discovery platform!
