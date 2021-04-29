import React, { Component } from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { H2Style, CardBodyStyle1, SectionStyle1 } from "../Helpers/stlyes";

export default class Vison extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Card style={SectionStyle1}>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="1">
            <h2 style={H2Style}>Design Norms</h2>
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body style={CardBodyStyle1}>
            <p>
              <strong>Trust:</strong>
              <br/>
              <br />
              Trust plays a bit part in our project. When users are
              collaborating on work, it is important that what they are working
              on (Thonny live share) is dependable and reliable.
            </p>

            <p>
              <strong>Communication:</strong>
              <br/>
              <br/> 
              When using live share, it is important that communication
              is maintained. When simultaneously editing a document, it is super
              important that both parties have access to the most up to date
              page. If there is any lag, this could result in frustration.
            </p>

            <p>
              <strong>Aesthetics:</strong>
              <br/>
              <br/>
              It is important to have a visually appealing interface. Visuals
              rather than functionality is the first thing most people notice. A
              visually unappealing product often diminishes the benefit of its
              functionality.
            </p>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    );
  }
}
