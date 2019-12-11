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
                <CardTitle> <h4 className="text-secondary"><a href="https://my-app.cauld19.now.sh"className="text-decoration-none">Kanye West Quote Generator</a></h4> </CardTitle>
                <hr />
                {/* <CardSubtitle> <h4>Born: {props.birthYear}</h4></CardSubtitle> */}
                <CardText>Click for an entertaining and enlightening Kanye West quote  </CardText>
                <CardImg></CardImg>
                </CardBody>
            </Card>
        </Col>
    )
}