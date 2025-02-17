import React, { useContext, useEffect } from "react";
import StoreContext from "../store/appContext.js";
import EntityList from "../component/EntityList.jsx";
import { Navbar } from "../component/Navbar.js";

const Home = () => {
  const { state } = useContext(StoreContext);

  useEffect(() => {
    console.log("Global state:", state);
  }, [state]);

  return (
    <div>
      <h1 style={{ color: "#FFE81F", textAlign: "center" }}>Star Wars Entities</h1>

      <h2 style={{ color: "#FFE81F", textAlign: "center" }}>Characters</h2>
      {state.characters.length > 0 ? (
        <EntityList entities={state.characters} entityType="characters" />
      ) : (
        <p style={{ color: "white", textAlign: "center" }}>Loading characters...</p>
      )}

      <h2 style={{ color: "#FFE81F", textAlign: "center" }}>Planets</h2>
      {state.planets.length > 0 ? (
        <EntityList entities={state.planets} entityType="planets" />
      ) : (
        <p style={{ color: "white", textAlign: "center" }}>Loading planets...</p>
      )}

      <h2 style={{ color: "#FFE81F", textAlign: "center" }}>Vehicles</h2>
      {state.vehicles.length > 0 ? (
        <EntityList entities={state.vehicles} entityType="vehicles" />
      ) : (
        <p style={{ color: "white", textAlign: "center" }}>Loading vehicles...</p>
      )}
    </div>
  )
};

export default Home;
