import { ListGroup } from 'react-bootstrap';
import Option from './option/option';
import { memo } from 'react';

const options = memo((props) => {

    const {choices, answer } = props
    console.log('Options rendered')
    return (
        <ListGroup>
            <p>{answer}</p>
            {choices.map((choice, index) => {
                if (index !== 0) {
                    return <Option key={index} val={choice} />
                }
                else return null
            })}

        </ListGroup>

    )

});

export default options;