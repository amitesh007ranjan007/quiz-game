import {ListGroupItem} from 'react-bootstrap';

const option = (props) => {
    
    return <ListGroupItem action variant="light">{props.val}</ListGroupItem>

}

export default option;