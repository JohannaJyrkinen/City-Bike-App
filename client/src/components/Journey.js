import 'bootstrap/dist/css/bootstrap.css'
import { Card } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react'

export function Journey({journey}) {

    const distanceKm = journey.distance / 1000
    const roundedNumber = distanceKm.toFixed(1)

    const journeyInMin = journey.duration/60
    const fullMinutes = Math.round(journeyInMin)

    return (
        <Card style= {{marginBottom: "10px"}}>
            <Card.Body style={{textAlign: "center", fontFamily: 'Gotham Rounded, sans-serif'}}>
                    <Row>
                    <Col>{journey.departureStation}</Col>
                    <Col>{journey.returnStation} </Col> 
                    <Col>{roundedNumber} km</Col>
                    <Col> {fullMinutes} min</Col>
                    </Row>
            </Card.Body>
        </Card>
    )
}