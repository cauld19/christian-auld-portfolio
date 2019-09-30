import React from "react";
import { Container, Row, Col } from 'reactstrap';

export default function Contact (props) {



    return (
        <div >
            <Container style={{height: "85vh"}}>
                <Row className="row h-100">
                    <Col className="col-sm-12 my-auto"><p className="text-secondary">I can be reached <a href="mailto:christian.martin.auld@gmail.com" className="text-decoration-none">here</a> directly, or through <a href="https://ca.linkedin.com/" className="text-decoration-none">Linkedin</a>.</p></Col>
                </Row>
            </Container>
        </div>
    )
}