import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TravelForm = () => {
    return (
        <div>
            <Form >
            <Form.Group>
                <Form.Label className="text-muted">Origin</Form.Label>
                <Form.Control type="email" placeholder="Enter Origin" />
            </Form.Group>
            <Form.Group>
                <Form.Label className="text-muted">Destination</Form.Label>
                <Form.Control type="email" placeholder="Enter Destination" />
            </Form.Group>
                <Row>

                    <Col><input className='form-control' type="date" id="birthday" name="birthday"></input>
                   </Col>
                   <Col><input className='form-control' type="date" id="birthday" name="birthday"></input>
                   </Col>
                   <Link to = '/search-hotel'><Button className='form-control m-4' variant="primary" type="Start Booking"> Submit
                </Button> 
                   </Link> 
                </Row>            
            </Form>
        </div>
    );
};

export default TravelForm;