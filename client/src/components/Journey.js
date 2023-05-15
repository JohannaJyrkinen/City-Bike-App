import 'bootstrap/dist/css/bootstrap.css'
import { Card } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react'
import '../css/journey.css'

export function Journey({journey}) {

    const distanceKm = journey.distance / 1000
    const roundedNumber = distanceKm.toFixed(2)

    const journeyInMin = journey.duration/60
    const fullMinutes = Math.round(journeyInMin)

    return (
        <Card style= {{marginBottom: "10px"}}>
            <Card.Body className='custom-card-body'style={{textAlign: "center", fontFamily: 'Gotham Rounded, sans-serif'}}>
                    <Row>
                    <Col>{journey.departureStation}</Col>
                    <Col>{journey.returnStation} </Col> 
                    <Col xs={2}>{roundedNumber} km</Col>
                    <Col xs={2}> {fullMinutes} min</Col>
                    </Row>
            </Card.Body>


        </Card>


    )
}