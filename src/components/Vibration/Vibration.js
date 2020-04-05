import React from "react";
import './Vibration.scss'

const Vibration = () => {
  const playStarWars = () => {
    navigator.vibrate([
      500,
      110,
      500,
      110,
      450,
      110,
      200,
      110,
      170,
      40,
      450,
      110,
      200,
      110,
      170,
      40,
      500,
    ]);
  };

  const playMario = () => {
    navigator.vibrate([
      125,
      75,
      125,
      275,
      200,
      275,
      125,
      75,
      125,
      275,
      200,
      600,
      200,
      600,
    ]);
  };

  const playSos = () => {
    navigator.vibrate([
      100,
      30,
      100,
      30,
      100,
      200,
      200,
      30,
      200,
      30,
      200,
      200,
      100,
      30,
      100,
      30,
      100,
    ]);
  };

  return (
    <div className='container'>
      <h1>Vibration</h1>
      <div className="headerCaption">
        The vibration API enables a device to vibrate
      </div>

      <button className="funcButton" onClick={() => playStarWars()}>
        star wars
      </button>
      <button className="funcButton" onClick={() => playMario()}>
        Mario
      </button>
      <button className="funcButton" onClick={() => playSos()}>
        SOS morse
      </button>
    </div>
  );
};

export default Vibration;
