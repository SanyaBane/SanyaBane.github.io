import ModList from "./components/ModList";
import ModDetails from "./components/ModDetails";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ModList />} />
        <Route path="/mod/:mod_id" element={<ModDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
