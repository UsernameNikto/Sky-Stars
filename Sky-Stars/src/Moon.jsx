import React from 'react';
import './Sky.css';
import {ReactComponent as IconMoon} from './icons/Moon.svg'

function Moon() {
  return (
    <div className="Moon">
      <IconMoon height={72} width={72} fill={'#fdd835'} />
    </div>
  );
}

export default Moon;