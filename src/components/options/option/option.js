import {ListGroupItem} from 'react-bootstrap';

const option = (props) => {
    return <ListGroupItem action variant="light">Option {props.number}</ListGroupItem>

}

export default option;