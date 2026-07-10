import React from 'react'
import { useState, useEffect } from 'react'

const Watch = () => {
  const [time, setTime] = useState("");

  const [format, setFormat] = useState("24hr");

  const toggleFormat = () => {
    setFormat(format === "24hr" ? "12hr" : "24hr");
  }

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      let hours = now.getHours().toString().padStart(2, "0");
      let minutes = now.getMinutes().toString().padStart(2, "0");
      let seconds = now.getSeconds().toString().padStart(2, "0");

      if(format === "24hr"){
        setTime(`${hours}:${minutes}:${seconds}`);
      }

      else{
        let meridiem = (hours >= 12) ? "PM" : "AM";
        hours = hours % 12 || 12;
        setTime(`${hours}:${minutes}:${seconds} ${meridiem}`)
      }
      
    }
    updateTime();

    const intervalId = setInterval(updateTime, 1000);

    return () => {
      clearInterval(intervalId);
    }
  }, [format]);


  return (
    <div className="flex-col text-center m-10 bg-white/20 backdrop-blur-md border-b-fuchsia-950">
      <div className='flex justify-around items-center'>
        <div className='text-5xl p-5'>Time</div>
        <button
          onClick={toggleFormat}
          className='px-5 h-10 rounded-lg font-semibold 
                  bg-yellow-400/80
                  transition-colors duration-300
                  cursor-pointer
                  hover:bg-yellow-300
                  active:bg-yellow-400'
        >
          {format}
        </button>

      </div>

      <div className='text-7xl font-mono font-bold text-gray-900 p-5'>{time}</div>
    </div>
  )
}

export default Watch
