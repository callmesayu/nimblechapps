import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar/Sidebar";
import Characters from "./Components/Characters/Characters";
import Locations from "./Components/Locations/Locations";
import Episodes from "./Components/Episodes/Episode";
import CharacterDetail from "./Components/Characters/CharacterDetail";
import EpisodeDetail from "./Components/Episodes/EpisodeDetail";
import LocationDetail from "./Components/Locations/LocationDetail";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Router>
        <Routes>
          <Route path="/" element={<Characters />} />
          <Route path="/character/:characterId" element={<CharacterDetail />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/location/:locationId" element={<LocationDetail />} />
          <Route path="/episodes" element={<Episodes />} />
          <Route path="/episode/:episodeId" element={<EpisodeDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
