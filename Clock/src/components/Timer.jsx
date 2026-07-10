import React, { useState, useRef, useEffect } from 'react'
import './timer.css'

const Timer = () => {

  const [time, setTime] = useState({ h: 0, m: 0, s: 0, ms: 0 });
  const intervalRef = useRef(null);

  const getTotalMs = () => {
    return time.h * 3600000 + time.m * 60000 + time.s * 1000 + time.ms;
  }

useEffect(() => {
  start();
  stop();
  reset();
}, []);
  const start = () => {
    let remaining = getTotalMs();
    if (remaining < 0) return;

    intervalRef.current = setInterval(() => {
      remaining -= 10;

      if (remaining <= 0) {
        clearInterval(intervalRef.current);
        setTime({ h: 0, m: 0, s: 0, ms: 0 });
      } else {
        const h = Math.floor(remaining / 3600000);
        const m = Math.floor((remaining % 3600000) / 60000);
        const s = Math.floor((remaining % 60000) / 1000);
        const ms = Math.floor((remaining % 1000) / 10);
        setTime({ h, m, s, ms });
      }

    }, 10)
  }

  const stop = () => {
    clearInterval(intervalRef.current);
  }
  const reset = () => {
    clearInterval(intervalRef.current);
    setTime({ h: 0, m: 0, s: 0, ms: 0 });
  }

  return (
    <div className="flex-col text-center m-10 bg-white/20 backdrop-blur-md border-b-fuchsia-950">
      <div className='text-5xl mb-5 p-5'>Timer</div>
      <div className='flex justify-center gap-5 p-5'>
        <div>
          <input value={time.h} type='number' min="0" placeholder='00' onChange={(e) => setTime({ ...time, h: e.target.value })}
            onKeyDown={(e) => {
              if (e.key === "-" || e.key === "Minus") {
                e.preventDefault();
              }
            }} />h
        </div>
        <div>
          <input value={time.m} type='number' min="0" placeholder='00' onChange={(e) => setTime({ ...time, m: e.target.value })}
            onKeyDown={(e) => {
              if (e.key === "-" || e.key === "Minus") {
                e.preventDefault();
              }
            }} />m
        </div>
        <div>
          <input value={time.s} type='number' min="0" placeholder='00' onChange={(e) => setSeconds({ ...time, m: e.target.value })}
            onKeyDown={(e) => {
              if (e.key === "-" || e.key === "Minus") {
                e.preventDefault();
              }
            }} />s
        </div>
        <div>
          <input value={time.ms} type='number' min="0" placeholder='00' onChange={(e) => setTime({ ...time, ms: e.target.value })}
            onKeyDown={(e) => {
              if (e.key === "-" || e.key === "Minus") {
                e.preventDefault();
              }
            }} />ms
        </div>
      </div>

      <div className='flex justify-center gap-5 p-5'>
        <button onClick={start} className="text-5xl h-15 px-5 rounded-lg font-semibold bg-green-400/80 transition-colors duration-300 cursor-pointer hover:bg-green-500 active:bg-green-400">Start</button>
        <button onClick={stop} className="text-5xl h-15 px-5 rounded-lg font-semibold bg-red-400/80 transition-colors duration-300 cursor-pointer hover:bg-red-500 active:bg-red-400">Stop</button>
        <button onClick={reset} className="text-5xl h-15 px-5 rounded-lg font-semibold bg-blue-400/80 transition-colors duration-300 cursor-pointer hover:bg-blue-500 active:bg-blue-400">Reset</button>
      </div>
    </div>
  )
}

export default Timer
