import ModList from "./components/ModList";
import ModDetails from "./components/ModDetails";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DiscordLogo from "./assets/discord-icon.svg?react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">Discord group:</p>
        <div className="footer-discord-icon-container">
          <a href="https://discord.gg/Wdb4fJTgqA" target="_blank">
            <DiscordLogo className="footer-discord-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<ModList />} />
            <Route path="/mod/:mod_id" element={<ModDetails />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
