import {ProgressBar} from 'react-bootstrap';
import { useState, useEffect } from 'react';

const Timer = (props) => {
    const [now, setNow] = useState(100)
    const { question } = props

    useEffect(() => {
        setNow(100)
        const interval = setInterval(() => {
                setNow(prev =>{
                    if (prev <= 0) {
                        clearInterval(interval)
                    }
                    return (prev - 0.9)
                }) 
                
            }, 100)
            return () => clearInterval(interval)
    }, [question])
    
    return <ProgressBar striped variant="info" now={now} /> 
}
    
export default Timer;