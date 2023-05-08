import 'bootstrap/dist/css/bootstrap.css'
import { Card } from 'react-bootstrap'
import React from 'react'

export function Journey() {
    return (
        <Card>
            <Card.Body style={{textAlign: "center", fontFamily: 'Gotham Rounded, sans-serif'}}> Startpoint  Endpoint    distance    duration</Card.Body>
        </Card>
    )
}