import {ProgressBar} from 'react-bootstrap';

const timer = (props) => {
    console.log('Timer rendered')
    return <ProgressBar striped variant="info" now={props.now} label={`${props.now}%`} /> 
}
    
export default timer;