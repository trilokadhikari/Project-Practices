import React from 'react'
import { useState, useEffect } from 'react';

function Component() {
    const choices = ['rock', 'paper', 'scissor'];

    const [result, setResult] = useState('Result');
    const [playerScore, setPlayerScore] = useState(0);
    const [computerScore, setComputerScore] = useState(0);


    function run(input) {
        const computer = choices[Math.floor(Math.random() * 3)];

        if (computer === input) {
            setResult('Its a tie');
        }

        else {
            switch (input) {
                case "rock":
                    setResult(computer === "paper" ? "You Lose!!!" : "You Win!!!");
                    break;

                case "paper":
                    setResult(computer === "scissor" ? "You Lose!!!" : "You Win!!!");
                    break;

                case "scissor":
                    setResult(computer === "rock" ? "You Lose!!!" : "You Win!!!");
                    break;
            }
        }

    }

    useEffect(() => {
        if (result === 'You Win!!!') {
            setPlayerScore(prevScore => prevScore + 1);
        }
        if (result === 'You Lose!!!') {
            setComputerScore(prevScore => prevScore + 1);
        }

    }, [result])

    return (
        <div className='w-screen h-screen bg-lime-100 flex-col justify-center text-center items-center'>
            <div className='text-7xl font-bold p-10 mb-10'>Rock-Paper-Scissors</div>
            <div>
                <button onClick={() => run('rock')} className='rounded-full bg-blue-400 m-2.5 p-5.5 text-8xl hover:bg-blue-300 active:bg-blue-400 cursor-pointer transition-all'>👊</button>
                <button onClick={() => run('paper')} className='rounded-full bg-blue-400 m-2.5 p-5.5 text-8xl hover:bg-blue-300 active:bg-blue-400 cursor-pointer transition-all'>✋</button>
                <button onClick={() => run('scissor')} className='rounded-full bg-blue-400 m-2.5 p-5.5 text-8xl hover:bg-blue-300 active:bg-blue-400 cursor-pointer transition-all'>🤞</button>
            </div>

            <div
                className={`text-8xl font-bold p-5 
                    ${result === "You Win!!!" ? "text-green-500" : ""} 
                    ${result === "You Lose!!!" ? "text-red-500" : ""} 
                    ${result === "Its a tie" ? "text-gray-500" : ""}`}
            >
                {result}
            </div>


            <div className='text-4xl font-bold flex-col'>
                <div className='p-3'>Player: {playerScore}</div>
                <div className='p-3'>Computer: {computerScore}</div>
            </div>
        </div>
    )
}

export default Component
