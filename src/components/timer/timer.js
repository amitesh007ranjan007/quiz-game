import {ProgressBar} from 'react-bootstrap';
import { useState, useEffect } from 'react';

const Timer = (props) => {
    const [now, setNow] = useState(100)

    useEffect(() => {
        const interval = setInterval(() => {
                setNow(prev =>{
                    if (prev <= 0) {
                        clearInterval(interval)
                    }
                    return (prev - 1)
                }) 
                
            }, 100)
            return () => clearInterval(interval)
    })
    
    return <ProgressBar striped variant="info" now={now} label={`${now}%`} /> 
}
    
export default Timer;