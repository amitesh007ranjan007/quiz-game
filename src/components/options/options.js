import { useEffect, useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import Option from './option/option';

const Options = (props) => {

    const [allowClick, setAllowClick ] = useState(false)

    const {choices, answer } = props

    useEffect(() => {
        console.log('Called useEffect')
        setAllowClick(false)
    }, [answer])

    console.log('Options rendered')

    const clickedHandler = () => {
        console.log('clicked handler called')
        setAllowClick(true)
    }
    return (
        <ListGroup>
            {choices.map((choice, index) => {
                if (index !== 0) {
                    return <Option key={index} val={choice}
                     answer={answer} click={allowClick} clicked={clickedHandler}/>
                }
                else return null
            })}

        </ListGroup>

    )

};

export default Options;