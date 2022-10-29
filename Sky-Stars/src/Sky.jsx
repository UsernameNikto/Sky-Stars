import React, { useState } from "react";
import Moon from "./Moon";
import Stars from "./Stars";
import "./Sky.css";

function Sky() {
  const [stars, setStars] = useState([]);
  const changeSky = (event) => {
    const newStars = stars;
    newStars.push({
      left: event.pageX-6,
      top: event.pageY-6,
    });
    setStars([...newStars])
  };
  return (
    <div className="Sky" onClick={event => changeSky(event)}>
      <Moon />
      {stars.map((stars, index) => (
        <Stars stars = {stars} key={index} />
      ))}
    </div>
  );
}

export default Sky;