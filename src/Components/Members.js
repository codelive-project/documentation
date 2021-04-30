import React, { Component } from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import {
  H2Style,
  ImageStyle1,
  CardBodyStyle1,
  SectionStyle1,
} from "../Helpers/styles";

export default class Members extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Card style={SectionStyle1}>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="2">
            <h2 style={H2Style}>Members</h2>
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="2">
          <Card.Body style={CardBodyStyle1}>
            <Container>
              <Row>
                <Col xs={6} md={4}>
                  <Image
                    src="https://raw.githubusercontent.com/codelive-project/documentation/main/public/assets/images/brad_photo.jpg"
                    thumbnail
                  />
                  <br/>
                  <p>
                    <strong>Brad Ritzema:</strong>
                    <br/><br/>
                    Before and during the pandemic, I have had first-hand
                    experience of the pains of collaboration. Whether this be a
                    group project or pair programming, I am well aware of the
                    problem and am excited to be working on this solution{" "}
                  </p>
                </Col>
                <Col xs={6} md={4}>
                  <Image
                    src="https://raw.githubusercontent.com/codelive-project/documentation/main/public/assets/images/sam_photo.jpeg"
                    thumbnail
                  />
                  <br/>
                  <p>
                    <strong>Samuel Zeleke:</strong>
                    <br/> 
                    <br/>
                    I have great interest in infrastructure and
                    distributed systems problems. This project lets me explore
                    topics on shared resources while helping improve students
                    learning.
                  </p>
                </Col>
                <Col xs={6} md={4}>
                  <Image
                    src="https://raw.githubusercontent.com/codelive-project/documentation/main/public/assets/images/enoch_photo.jpg"
                    thumbnail
                  />
                  <br/><br/>
                  <p>
                    <strong>Enoch Mwesigwa:</strong>
                    <br/>
                    <br/>
                    I’ve seen how useful systems simialr to Codelive are for
                    collaboration and productivity. I’m excited to be a part of
                    the team that brings it to the Calvin CS department and
                    Thonny.
                  </p>
                </Col>
              </Row>
            </Container>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    );
  }
}
