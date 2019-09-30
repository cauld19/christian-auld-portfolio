import React from "react";
import { Container, Row, Col } from 'reactstrap';

export default function About () {



    return (
        <div >
            <Container style={{height: "85vh"}}>
                <Row className="row h-100">
                    <Col className="col-sm-12 my-auto"><p className="text-secondary">I am a current full-stack web development student at Lambda School.</p></Col>
                </Row>
            </Container>
        </div>
    )
}