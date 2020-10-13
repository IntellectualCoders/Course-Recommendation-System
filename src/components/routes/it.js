import React, { Component } from "react";
import { Card, Row } from "reactstrap";
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from "reactstrap";
import Filters from "../filters";

class EventsCSE extends Component {
  render() {
    return (
      <div>
        <Card className="imp" style={{ width: "60%", marginLeft: "25%" }}>
          <h2 style={{ textAlign: "center" }}>Student Details</h2>
          <Form>
            <FormGroup>
              <Row>
                <Label for="SDF-1" sm={6}>
                  SOFTWARE DEVELOPMENT FUNDAMENTALS
                </Label>
                <Col sm={6}>
                  <Input
                    type="text"
                    name="SDF-1"
                    id="SDF-1"
                    placeholder="please enter final grade"
                  />
                </Col>
              </Row>
            </FormGroup>
            <FormGroup>
              <Row>
                <Label for="SDF-1" sm={6}>
                  ENGLISH
                </Label>
                <Col sm={6}>
                  <Input
                    type="text"
                    name="SDF-1"
                    id="SDF-1"
                    placeholder="please enter final grade"
                  />
                </Col>
              </Row>
            </FormGroup>
            <FormGroup>
              <Row>
                <Label for="SDF-1" sm={6}>
                  MATHEMATICS
                </Label>
                <Col sm={6}>
                  <Input
                    type="text"
                    name="SDF-1"
                    id="SDF-1"
                    placeholder="please enter final grade"
                  />
                </Col>
              </Row>
            </FormGroup>
            <FormGroup>
              <Row>
                <Label for="SDF-1" sm={6}>
                  PHYSICS
                </Label>
                <Col sm={6}>
                  <Input
                    type="text"
                    name="SDF-1"
                    id="SDF-1"
                    placeholder="please enter final grade"
                  />
                </Col>
              </Row>
            </FormGroup>

            <FormGroup>
              <Row>
                <Label for="SDF-1" sm={6}>
                  DATA STRUCTURES AND ALGORITHMS
                </Label>
                <Col sm={6}>
                  <Input
                    type="text"
                    name="SDF-1"
                    id="SDF-1"
                    placeholder="please enter final grade"
                  />
                </Col>
              </Row>
            </FormGroup>

            <FormGroup>
              <Row>
                <Label for="SDF-1" sm={6}>
                  DATABASE SYSTEMS AND WEB
                </Label>
                <Col sm={6}>
                  <Input
                    type="text"
                    name="SDF-1"
                    id="SDF-1"
                    placeholder="please enter final grade"
                  />
                </Col>
              </Row>
            </FormGroup>
            <FormGroup>
              <Row>
                <Label for="SDF-1" sm={6}>
                  THEORETICAL FOUNDATIONS OF COMPUTER SCIENCE
                </Label>
                <Col sm={6}>
                  <Input
                    type="text"
                    name="SDF-1"
                    id="SDF-1"
                    placeholder="please enter final grade"
                  />
                </Col>
              </Row>
            </FormGroup>
            <FormGroup>
              <Row>
                <Label for="SDF-1" sm={6}>
                  PROBABILITY AND RANDOM PROCESSES
                </Label>
                <Col sm={6}>
                  <Input
                    type="text"
                    name="SDF-1"
                    id="SDF-1"
                    placeholder="please enter final grade"
                  />
                </Col>
              </Row>
            </FormGroup>

            <FormGroup>
              <Row>
                <Label for="SDF-1" sm={6}>
                  COMPUTER ORGANISATION AND ARCHITECTURE
                </Label>
                <Col sm={6}>
                  <Input
                    type="text"
                    name="SDF-1"
                    id="SDF-1"
                    placeholder="please enter final grade"
                  />
                </Col>
              </Row>
            </FormGroup>
            <FormGroup>
              <Row>
                <Col sm={6}>
                  <Input type="select" name="select" id="exampleSelect">
                    <option>POM</option>
                    <option>SOCIOLOGY</option>
                    <option>PSYCHOLOGY</option>
                    <option>FINANCIAL MANAGEMENT</option>
                  </Input>
                </Col>
                <Col sm={6}>
                  <Input
                    type="text"
                    name="SDF-1"
                    id="SDF-1"
                    placeholder="please enter final grade"
                  />
                </Col>
              </Row>
            </FormGroup>
          </Form>
        </Card>
        {/* <Filters department="cse"/> */}
      </div>
    );
  }
}

export default EventsCSE;
