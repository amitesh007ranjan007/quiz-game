import { ListGroup } from 'react-bootstrap';
import Option from './option/option';

const options = () => {
    return (
        <ListGroup>
            <Option number='1' />
            <Option number='2' />
            <Option number='3' />
            <Option number='4' />
        </ListGroup>

    )

}

export default options;