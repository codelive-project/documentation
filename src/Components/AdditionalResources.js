import React, { Component } from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { H2Style, CardBodyStyle1, SectionStyle1 } from "../Helpers/stlyes";

export default class AdditionalResources extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Card style={SectionStyle1}>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="3">
            <h2 style={H2Style}> Additional Resources </h2>
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="3">
          <Card.Body style={CardBodyStyle1}>
            <ul>
              <li>
                <a href="#">Final Presentation</a>
              </li>
              <li>
                <a href="#">Final Report</a>
              </li>
              <li>
                <a href="#">Research Paper</a>
              </li>
              <li>
                <a href="https://github.com/codelive-project">
                  Link to Github Repo
                </a>
              </li>
            </ul>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    );
  }
}
