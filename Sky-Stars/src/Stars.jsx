import React from 'react';
import './Sky.css';

function Stars(props) {
  return (
    <div className="Stars" style={{
      left: props.stars.left,
      top: props.stars.top,
    }}></div>
  );
}

export default Stars;