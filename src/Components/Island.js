import React, { useState } from "react";
import IslandList from "./IslandList";

export default function Island({ island, setIsland }) {
  // const [counter, setCounter] = useState(0);

  // const changeCounter = () => {
  //   setCounter(counter + 1);
  // };
  return (
    <div className="Island" onClick={() => setIsland(island)}>
      <h3>{island.name}</h3>
      {/* YOU HAVE TO CHANGE THE VISITORS COUNT */}
      <p>Visitors </p>
      <img src={island.img} alt={island.name} />
    </div>
  );
}
