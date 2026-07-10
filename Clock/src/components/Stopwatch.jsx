import React, { useState, useEffect, useRef} from 'react'

const Stopwatch = () => {


  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const intervalIdRef = useRef(null);
  const startTimeRef = useRef(0);

  useEffect(() => {
    if (isRunning) {
      intervalIdRef.current = setInterval(() => {
        setElapsedTime(Date.now() - startTimeRef.current);
      }, 10);
      return () => {
        clearInterval(intervalIdRef.current);
      }
    }
  }, [isRunning]);

  function start() {
    setIsRunning(true);
    startTimeRef.current = Date.now() - elapsedTime;
  }
  function stop() {
    setIsRunning(false);
  }
  function reset() {
    setIsRunning(false);
    setElapsedTime(0);
  }
  function formatTime() {
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
    let seconds = Math.floor(elapsedTime / 1000 % 60);
    let milliseconds = Math.floor(elapsedTime % 1000 / 10);

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milliseconds = String(milliseconds).padStart(2, "0");
    return (`${hours}:${minutes}:${seconds}:${milliseconds}`);
  }

  return (
    <div className="flex-col text-center m-10 bg-white/20 backdrop-blur-md border-b-fuchsia-950">
      <div className='text-5xl mb-5 p-5'>Stopwatch</div>
      <div className="text-6xl p-5 font-bold font-mono text-gray-900">{formatTime()}</div>
      <div className="text-5xl p-5 flex gap-2 justify-center">
        <button onClick={start} className="px-5 h-15 rounded-lg font-semibold bg-green-400/80 transition-colors duration-300 cursor-pointer hover:bg-green-500 active:bg-green-400">Start</button>
        <button onClick={stop} className="px-5 h-15 rounded-lg font-semibold bg-red-400/80 transition-colors duration-300 cursor-pointer hover:bg-red-500 active:bg-red-400">Stop</button>
        <button onClick={reset} className="px-5 h-15 rounded-lg font-semibold bg-blue-400/80 transition-colors duration-300 cursor-pointer hover:bg-blue-500 active:bg-blue-400">Reset</button>
      </div>
    </div>);
}

export default Stopwatch
