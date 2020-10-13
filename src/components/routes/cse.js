import React, { Component } from 'react';
import { Card, Row } from 'reactstrap';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Filters from '../filters';

class EventsCSE extends Component {
    render() {
        return (
            <div>
                <Card className="imp" style={{width:"60%", marginLeft:"25%"}}>
                    <h2 style={{textAlign:"center"}}>Student Details</h2>
                 <Form>
                     <FormGroup>
                         <Row>
                         <Label for="SDF-1" sm={6}>SOFTWARE DEVELOPMENT FUNDAMENTALS-1</Label>
                         <Col sm={6}>
                         <Input type="text" name="SDF-1" id="SDF-1" placeholder="please enter final grade"/>
                         </Col>
                         </Row>
                     </FormGroup>
                 </Form>
                </Card>
                {/* <Filters department="cse"/> */}
            </div>
        )
    }
}

export default EventsCSE;