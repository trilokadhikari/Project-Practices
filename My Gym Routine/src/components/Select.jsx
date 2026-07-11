import {useState, useContext} from 'react'
import './select.css'
import { dayContext } from '../context/dayContext';

const Select = () => {

    const {day, setDay} = useContext(dayContext);

    return (
        <div className='text-white flex-col text-center pt-5'>
            <div className='font-bold text-3xl'>My Routine</div>
            <div className='cursor-pointer py-5'>
                <select className="bg-gray-900 text-white p-4 py-2 rounded-lg outline-none border border-gray-700 focus:ring-2 focus:ring-green-400 cursor-pointer" value={day} onChange={(e) => setDay(e.target.value)}>
                    <option value="sunday" >Sunday</option>
                    <option value="monday">Monday</option>
                    <option value="tuesday">Tuesday</option>
                    <option value="wednesday">Wednesday</option>
                    <option value="thursday">Thursday</option>
                    <option value="friday">Friday</option>
                    <option value="saturday">Saturday</option>
                </select>
            </div>

        </div>
    )
}

export default Select
