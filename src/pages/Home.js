import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Vison from "../Components/Vision";
import DesignNorms from "../Components/DesignNorms";
import Members from "../Components/Members";
import AdditionalResources from "../Components/AdditionalResources";
import MembersCarousel from "../Components/MembersCarousel";
import { H1Style, backgroundStyle } from "../Helpers/styles";

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={backgroundStyle}>
        <Container fluid style={{ padding: 0, backgroundColor: "#1e252d" }}>
          <Row>
            <Col style={{ textAlign: "center" }}>
              <h1 style={H1Style}>
                <a style={{ color: "white" }} href="index.html">
                  CodeLive Senior Project
                </a>
              </h1>
            </Col>
          </Row>
          <br /> <br />
          <Accordion>
            <Vison />
            <DesignNorms />
            <Members/>
            <AdditionalResources/>
          </Accordion>
        </Container>
      </div>
    );
  }
}
