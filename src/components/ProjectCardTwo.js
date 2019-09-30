import React from "react";

import {
    Card, CardText, CardBody,
    CardTitle, CardImg, Col,
  } from 'reactstrap';

export default function ProjectCardTwo() {

    return (
        <Col>
            <Card style={{ border: 'none'}}>
                <CardBody>
                <CardTitle> <h4 className="text-secondary">React Wars</h4> </CardTitle>
                <hr />
                {/* <CardSubtitle> <h4>Born: {props.birthYear}</h4></CardSubtitle> */}
                <CardText>An app that makes an API call and from that data constructs a series of cards. Utilizes hooks (useState, useEffect) and has functionality to go through all sets of data.  </CardText>
                <CardImg></CardImg>
                </CardBody>
            </Card>
        </Col>

    )
}