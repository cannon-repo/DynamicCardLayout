import React, { useEffect, useState } from "react";
import "./App.css";
import Toolbar from "./Components/Toolbar/Toolbar";
import { getStyleClass } from "./Helpers/GridStyles";

const App = () => {
  const [arr, setArr] = useState([]);
  const [tileClass, setTileClass] = useState("Tile");

  useEffect(() => {
    const len = arr.length;
    if (len > 0) {
      setTileClass(getStyleClass(len));
    }
  }, [arr.length]);

  return (
    <div className={arr.length === 3 ? "Grid" : "Flex"}>
      <Toolbar data={arr} setData={setArr} />
      {arr.map((val, index) => {
        return arr.length === 3 ? (
          <div
            className="Tile3Main"
            style={{ gridArea: `T${index}` }}
          >{val}</div>
        ) : (
          <div key={index} className={`Tile ${tileClass}`}>
            {val}
          </div>
        );
      })}
    </div>
  );
};

export default App;
