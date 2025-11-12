# PUBG Stats Tracker

Simple stats tracker for PUBG built with React and JavaScript.

## 🛠️ Overview
This project is a simple web application built with React (JavaScript) that displays basic player statistics for PLAYERUNKNOWN’S BATTLEGROUNDS (PUBG) — such as kills, wins, K/D ratio, total matches played, and average damage.  
It features a clean, modern, and responsive UI — perfect for learning React hooks (useState, useEffect) and basic API or mock data handling.

## ✨ Features
- Enter a PUBG username to fetch and display stats  
- Displays key stats:
  - Wins  
  - Kills  
  - K/D Ratio  
  - Matches Played  
  - Average Damage  
- Clean, responsive UI with info cards, rounded corners, and subtle shadows  
- Loading indicator while fetching data  
- (Optional) Light/Dark mode toggle  
- Built with Create React App as the project base

## 🚀 Getting Started

### Prerequisites
- Node.js and npm (or yarn) installed  
- (Optional) PUBG API key and endpoint if connecting to a real API

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/lucinho17/pubg-stats-tracker.git
   ```
2. Navigate to the project directory:
   ```bash
   cd pubg-stats-tracker
   ```
3. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```
4. Run the development server:
   ```bash
   npm start
   # or
   yarn start
   ```
5. Open your browser and go to: `http://localhost:3000`

### Build for Production
```bash
npm run build
# or
yarn build
```
The production-ready build will be available in the `build/` directory.

## 🔧 Configuration
- If using mock data, all stats are generated locally with no API calls.  
- If connecting to a real PUBG API:
  - Set your API key as an environment variable (e.g. `REACT_APP_API_KEY`)  
  - Update the endpoint and request parameters  
  - Handle API errors gracefully (e.g. player not found, rate limits)

## 🎨 Project Structure (example)
```
pubg-stats-tracker/
│  
├─ public/
│   └─ index.html
│  
├─ src/
│   ├─ components/
│   │   ├─ StatCard.js
│   │   ├─ StatsDisplay.js
│   │   └─ ToggleDarkMode.js
│   ├─ App.js
│   ├─ api.js           ← functions for fetching/mock data
│   ├─ hooks/
│   │   └─ usePlayerStats.js
│   └─ styles/
│       └─ index.css
│  
├─ package.json
└─ README.md
```

## ✅ Contributing
Contributions are welcome!  
You can help by improving the UI, adding new stats, or connecting the app to a live PUBG API.  
Feel free to open an *issue* or *pull request*.

## 📜 License
This project is licensed under the [MIT License](LICENSE).

## 🧭 Author  
[Lucinho17](https://github.com/lucinho17)  
For any questions or suggestions, feel free to reach out!
