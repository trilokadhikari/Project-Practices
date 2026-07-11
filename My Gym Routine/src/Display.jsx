import React, { useContext } from 'react'
import { dayContext } from './context/dayContext'
import Sunday from './days/Sunday'
import Monday from './days/Monday'
import Tuesday from './days/Tuesday'
import Wednesday from './days/Wednesday'
import Thursday from './days/Thursday'
import Friday from './days/Friday'
import Saturday from './days/Saturday'


const Display = () => {
    const {day, setDay} = useContext(dayContext);

    switch(day){
        case "sunday":
        return <Sunday />;
        case "monday":
        return <Monday />;
        case "tuesday":
        return <Tuesday />
        case "wednesday":
        return <Wednesday />
        case "thursday":
        return <Thursday />
        case "friday":
        return <Friday />
        case "saturday":
        return <Saturday />
        default:
            return <p>Select a day</p>
    }
}

export default Display
