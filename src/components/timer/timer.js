import {ProgressBar} from 'react-bootstrap';
import {useEffect, useState} from 'react';

const Timer = () => {
    const [now, setNow] = useState(100)

    useEffect(() => {
       
        const interval = setInterval(() => {
            setNow(prev =>{
                if (prev <= 0) {
                    clearInterval(interval)
                    gameOver() 
                }
                return (prev - 1)
            }) 
            
        }, 100)
        
        return () => clearInterval(interval)

    }, [])
    
    const gameOver = () => {
        console.log('Game Over')
        return null
    }
    return <ProgressBar striped variant="info" now={now} label={`${now}%`} /> 
    
    
}

export default Timer;