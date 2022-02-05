import React, { useRef } from "react";
import "./Toolbar.css";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const Toolbar = ({ data, setData }) => {
  const flagRef = useRef(0);

  const addTile = () => {
    flagRef.current++;
    setData([...data, flagRef.current]);
  };

  const removeTile = () => {
    if (data.length > 0) {
      setData(data.filter((val) => val !== flagRef.current));
      flagRef.current--;
    }
  };

  return (
    <div className="ToolbarWrap">
      <div className="RemoveTile" onClick={removeTile}>
        <AiOutlineMinus />
      </div>
      <div className="Count">{data.length}</div>
      <div className="AddTile" onClick={addTile}>
        <AiOutlinePlus />
      </div>
    </div>
  );
};

export default Toolbar;
