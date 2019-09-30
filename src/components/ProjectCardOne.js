import React from "react";

import {
    Card, CardText, CardBody,
    CardTitle, CardImg, Col, Row
  } from 'reactstrap';

export default function ProjectCardOne() {

    return (
        <Col>
            <Card style={{ border: 'none'}}>
                <CardBody>
                <CardTitle> <h4 className="text-secondary">React Calculator</h4> </CardTitle>
                <hr />
                {/* <CardSubtitle> <h4>Born: {props.birthYear}</h4></CardSubtitle> */}
                <CardText>Constructed a fully functional calculator in React with hooks.  </CardText>
                <CardImg></CardImg>
                </CardBody>
            </Card>
        </Col>
    )
}