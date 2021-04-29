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
          <Accordion.Toggle as={Button} variant="link" eventKey="0">
            <h2 style={H2Style}
            >
              Vision
            </h2>
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body style={CardBodyStyle1}>
            <p>
              Thonny is a simple python IDE for beginners supporting a script
              editor, a shell, and a terminal. It gives starting programmers a
              simple platform to practice using the language and learn important
              computer science topics like language and data structures and
              algorithms.
            </p>

            <p>
              However, in its current version, Thonny does not support live
              collaboration sessions in which multiple users can read/write the
              same script simultaneously. Considering the constraints (physical
              distancing, remote working/learning, …) set by the pandemic, we
              believe the development of the feature would improve the ease of
              student collaboration, tutoring, and teaching python-based
              classes.
            </p>

            <p>
              We propose a protocol that supports live collaboration on a
              file/directory shared by a host. The protocol would be used to
              develop a Thonny extension/plug-in that enables users to host and
              join collaboration sessions using the GUI elements enabled by the
              extension. Changes made during the collaboration session would be
              saved on the local copy of the host.
            </p>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    );
  }
}
