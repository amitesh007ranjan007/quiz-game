import { ListGroup } from 'react-bootstrap';
import Option from './option/option';
import { memo } from 'react';

const options = memo(() => {

    console.log('options called')
    return (
        <ListGroup>
            <Option number='1' />
            <Option number='2' />
            <Option number='3' />
            <Option number='4' />
        </ListGroup>

    )

});

export default options;