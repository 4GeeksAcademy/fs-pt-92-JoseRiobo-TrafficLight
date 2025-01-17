import PropTypes from "prop-types";
import React, { useState } from "react";

const TheLight = (props) => {
  const [color, setColor] = useState("red");
  const [lights, setLights] = useState(["red", "yellow", "green"]);
  const [activeLightIndex, setActiveLightIndex] = useState(0);

  const incrementLights = () => {
    if (lights.length < 4) {
      setLights([...lights, "purple"]);
    }
  };

  const cycleLights = () => {
    setActiveLightIndex((activeLightIndex + 1) % lights.length);
  };

  const handleLightClick = (index) => {
    setActiveLightIndex(index === activeLightIndex ? null : index);
  };

  return (
    <div className="theWholeLight">
      <div className="trafic-light">
        {lights.map((light, index) => (
          <button
            key={index}
            className={`${light} ${index === activeLightIndex ? "brillo" : ""}`}
            onClick={() => handleLightClick(index)}
          ></button>
        ))}
      </div>
      <div className="theButtons">
        <button onClick={(e) => incrementLights(e)} className="addNewLight">
          Add a light
        </button>
        <button onClick={(e) => cycleLights(e)} className="cycleLights">
          Cycle Lights
        </button>
      </div>
    </div>
  );
};


export default TheLight;
