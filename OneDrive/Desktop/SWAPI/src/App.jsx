// src/App.jsx
import React from "react";
import CharactersList from "./Components/EntityList"; // Assuming this is the correct component name

const App = () => {
  return (
    <div>
      <h1>Star Wars Characters</h1>
      <CharactersList /> {/* Make sure this matches your actual component */}
    </div>
  );
};

export default App;

