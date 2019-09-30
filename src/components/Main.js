import React from "react";
import { Container, Row, Col } from 'reactstrap';

export default function Main () {



    return (
        <div >
            <Container style={{height: "85vh"}}>
                <Row className="row h-100">
                    <Col className="col-sm-12 my-auto"><h1 className="text-secondary">Student. <span className="text-dark" >Software Engineer</span></h1></Col>
                </Row>
            </Container>
        </div>
    )
}