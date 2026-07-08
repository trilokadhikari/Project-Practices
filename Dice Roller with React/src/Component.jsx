import { useState } from "react";
import image1 from './assets/1.png'
import image2 from './assets/2.png'
import image3 from './assets/3.png'
import image4 from './assets/4.png'
import image5 from './assets/5.png'
import image6 from './assets/6.png'

function Component() {

    const dices = [1, 2, 3, 4, 5, 6];

    const diceImages = [image1, image2, image3, image4, image5, image6];

    const [diceNumber, setDiceNumber] = useState(1);

    const [diceArray, setDiceArray] = useState([]);


    const roll = () => {

        const newRolls = [];

        for(let i = 1; i <= diceNumber; i++){
            const diceIndex = Math.floor(Math.random() * 6);
            const diceResult = dices[diceIndex];
            newRolls.push(diceResult);
        }
        setDiceArray(newRolls);

    }

  return (
    <div className='bg-amber-200 h-screen w-screen flex-col justify-center text-center'>
      <div className='p-5'><h1 className='text-5xl font-bold'>Dice Roller</h1></div>
      <div className='flex justify-center items-baseline gap-3'>
        <h1 className='text-3xl font-bold mt-10'>No. of Dice: </h1>
        <input type='number' onChange={(e)=>setDiceNumber(Number(e.target.value))} value={diceNumber} min='1' className='px-3 w-20 border text-3xl text-center' />
        <button type='submit' onClick={roll} className='bg-red-600 text-white px-3 text-3xl rounded-2xl cursor-pointer hover:bg-red-500 active:bg-red-600'>Roll</button>
      </div>

      <div className='m-10'>Dice: {diceArray.join(", ")}</div>

      <div className='flex gap-4 justify-center mt-5'>{diceArray.map((num, index) => (
        <img 
            key={index} 
            src={diceImages[num-1]}
            alt={`Dice ${num}`}
            className='w-16 h-16 hover:scale-125 transition-transform duration-200'
            />
      ))}</div>
    </div>
  )
}

export default Component
