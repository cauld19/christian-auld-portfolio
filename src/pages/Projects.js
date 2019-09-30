import React from "react";
import { Container, Row, Col } from 'reactstrap';
import ProjectCardOne from "../components/ProjectCardOne"
import ProjectCardTwo from "../components/ProjectCardTwo"
import ProjectCardThree from "../components/ProjectCardThree"

export default function Projects () {



    return (
        <Container style={{marginTop:"10%"}}>
            <p className="w-75 mx-auto" style={{marginBottom:"10%"}}>Below are a few of the most recent projects that I have completed. As I complete more (hopefully better) projects, those displayed will change. For all of my projects: <a href="https://github.com/cauld19">Github</a>.</p>
            <Row>
                <ProjectCardOne />
                <ProjectCardTwo />
                <ProjectCardThree />
            </Row>
        </Container>
    )
}