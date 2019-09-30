import React from "react";

import {
    Card, CardText, CardBody,
    CardTitle, CardImg, Col,
  } from 'reactstrap';

export default function ProjectCardThree() {

    return (
        <Col>
            <Card style={{ border: 'none'}}>
                <CardBody>
                <CardTitle> <h4 className="text-secondary"><a href="https://github.com/cauld19/nasa-photo-of-the-day" className="text-decoration-none">Photo of the Day</a></h4> </CardTitle>
                <hr />
                {/* <CardSubtitle> <h4>Born: {props.birthYear}</h4></CardSubtitle> */}
                <CardText>An app that makes an API call and from that data displays a photo with accompanying information. Functionality to go to select previous, next, random, or a specific date.  </CardText>
                <CardImg></CardImg>
                </CardBody>
            </Card>
        </Col>

    )
}