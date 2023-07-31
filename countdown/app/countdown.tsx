'use client';
import React from 'react';
import { useState } from 'react';

const countdown = () => {
  let countdownTo = new Date('July 1, 2024').getTime();
  let [countdownDisplay, setCountdownDisplay] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  let x = setInterval(function () {
    let dateNow = Date.now();
    let timeLeft = countdownTo - dateNow;

    let days: number = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    let hours: number = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes: number = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds: number = Math.floor((timeLeft % (1000 * 60)) / 1000);

    setCountdownDisplay({ days: days, hours: hours, minutes: minutes, seconds: seconds });
  }, 1000);

  return (
    <div className=" mx-auto flex flex-row justify-around text-center">
      <div className="mx-8 flex flex-col">
        <div className="p-2 border border-white">{countdownDisplay.days}</div>
        <div>Days</div>
      </div>
      <div className="mx-8 flex flex-col">
        <div className="p-2 border border-white">{countdownDisplay.hours}</div>
        <div>Hours</div>
      </div>
      <div className="mx-8 flex flex-col">
        <div className="p-2 border border-white">{countdownDisplay.minutes}</div>
        <div>Minutes</div>
      </div>
      <div className="mx-8 flex flex-col">
        <div className="p-2 border border-white">{countdownDisplay.seconds}</div>
        <div>Seconds</div>
      </div>
    </div>
  );
};

export default countdown;
