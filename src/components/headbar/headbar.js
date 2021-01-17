import { Container, Row, Col } from "react-bootstrap";
import { memo } from 'react';

const headbar = memo(() => {

    console.log('headbar called');

    return (
        <Container style={{paddingBottom: '20%'}}>
        <Row>
            <Col>1/10</Col>
            <Col>$150</Col>
            <Col>/\/4,281</Col>
        </Row>
    </Container>
    )
});


export default headbar;