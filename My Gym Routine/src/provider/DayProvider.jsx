import { useState } from 'react'
import { dayContext } from '../context/dayContext'

function DayProvider({children}){
    const [day, setDay] = useState("sunday");

    return(
        <dayContext.Provider value = {{day, setDay}}>
            {children}
        </dayContext.Provider>
    );
}

export default DayProvider;