import { Container, Row, Col } from "react-bootstrap";
import { memo } from 'react';

const headbar = memo((props) => {

    console.log('headbar called');

    return (
        <Container style={{paddingBottom: '20%'}}>
        <Row>
            <Col>{props.current}/{props.total}</Col>
            <Col>$150</Col>
            <Col>/\/4,281</Col>
        </Row>
    </Container>
    )
});


export default headbar;