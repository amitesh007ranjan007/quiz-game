import { useState } from 'react';
import {ListGroupItem} from 'react-bootstrap';


const Option = (props) => {
    const [variant, setVariant] = useState("light");


    const { answer, val, click, clicked } = props
    const clickedHandler = () => {
        if (answer === val) {
            setVariant("success")
        }
        else setVariant("danger")
        setTimeout(() => setVariant("light"), 2000)
        clicked();

    }
    return <ListGroupItem action variant={variant} onClick={clickedHandler} disabled={click}>{props.val}</ListGroupItem>
    

}

export default Option;