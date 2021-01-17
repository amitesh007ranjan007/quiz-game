import {ProgressBar} from 'react-bootstrap';
import {useEffect, useState} from 'react';

const Timer = () => {
    const [play, setPlay]= useState(true)

    useEffect(() => {
       
        if (play) {
           
            setTimeout(() => {
                setPlay(false)

            }, 10000)
            

        }

    }, [play])
    
    const gameOver = () => {
        console.log('Game Over')
        return null
    }
    console.log('Rendered now')

    return (
    play ? <ProgressBar now={100} label={`100%`} /> : gameOver()
    )
    
}

export default Timer;