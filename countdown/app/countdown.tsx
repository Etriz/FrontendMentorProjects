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
      <div className="mx-8 flex flex-col w-32">
        <div className="mb-4 rounded-xl h-32 flex justify-center items-center text-6xl text-[--soft-red] bg-[--dark-desaturated-blue]">
          {countdownDisplay.days}
        </div>
        <div className="text-[--grayish-blue]">Days</div>
      </div>
      <div className="mx-8 flex flex-col w-32">
        <div className="mb-4 rounded-xl h-32 flex justify-center items-center text-6xl text-[--soft-red]  bg-[--dark-desaturated-blue]">
          {countdownDisplay.hours}
        </div>
        <div className="text-[--grayish-blue]">Hours</div>
      </div>
      <div className="mx-8 flex flex-col w-32">
        <div className="mb-4 rounded-xl h-32 flex justify-center items-center text-6xl text-[--soft-red]  bg-[--dark-desaturated-blue]">
          {countdownDisplay.minutes}
        </div>
        <div className="text-[--grayish-blue]">Minutes</div>
      </div>
      <div className="mx-8 flex flex-col w-32">
        <div className="mb-4 rounded-xl h-32 flex justify-center items-center text-6xl text-[--soft-red]  bg-[--dark-desaturated-blue]">
          {countdownDisplay.seconds}
        </div>
        <div className="text-[--grayish-blue]">Seconds</div>
      </div>
    </div>
  );
};

export default countdown;
