import "./App.css";
import Header from "./Components/Header";
import IslandForm from "./Components/IslandForm";
import IslandList from "./Components/IslandList";
import react, { useState } from "react";
import islands from "./data/islands";

function App() {
  const [island, setIsland] = useState(islands[1]);
  // const changeIsland = ({ changeIsland }) => {
  //   setIsland(changeIsland);
  // };
  // let island = island;
  // name: "Boubyan",
  // img: "http://photos.wikimapia.org/p/00/02/20/48/92_big.jpg",

  return (
    <div>
      <Header />

      <div className="homePage">
        <IslandList setIsland={setIsland} />
        <IslandForm island={island} />
      </div>
    </div>
  );
}

export default App;
