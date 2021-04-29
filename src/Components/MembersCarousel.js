import React, { Component } from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import {
  H2Style,
  ImageStyle1,
  CardBodyStyle1,
  SectionStyle1,
} from "../Helpers/stlyes";

export default class MembersCarousel extends Component {
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
            <Carousel>
              <Carousel.Item>
                <Image
                  src="../../assets/images/brad_photo.jpg"
                  style={ImageStyle1}
                  thumbnail
                />

                <Carousel.Caption>
                  <h3>Brad Ritzema </h3>
                  <p>
                    Before and during the pandemic, I have had first-hand
                    experience of the pains of collaboration. Whether this be a
                    group project or pair programming, I am well aware of the
                    problem and am excited to be working on this solution
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  src="../../assets/images/sam_photo.jpeg"
                  style={ImageStyle1}
                  thumbnail
                />
                <Carousel.Caption>
                  <h3>Samuel Zeleke</h3>
                  <p>
                    I have great interest in infrastructure and distributed
                    systems problems. This project lets me explore topics on
                    shared resources while helping improve students learning.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  src="../../assets/images/enoch_photo.jpg"
                  style={ImageStyle1}
                  thumbnail
                />
                <Carousel.Caption>
                  <h3>Enoch Mwesigwa</h3>
                  <p>
                    I’ve seen how useful systems simialr to Codlive are for
                    collaboration and productivity. I’m excited to be a part of
                    the team that brings it to the Calvin CS depaartment and
                    Thonny.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    );
  }
}
