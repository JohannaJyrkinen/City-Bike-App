import 'bootstrap/dist/css/bootstrap.css'
import { Card } from 'react-bootstrap'
import React from 'react'


export function Station({station}) {

    if(station.Kaupunki === ' ') {
        station.Kaupunki = 'Helsinki'
    }

    return (
    
        <Card style= {{marginBottom: "10px"}}>
            <Card.Body style={{textAlign: "center", fontFamily: 'Gotham Rounded, sans-serif'}}> 
                <Card.Text>{station.Nimi}: {station.Osoite}, {station.Kaupunki}</Card.Text>
            </Card.Body>
        </Card>
        
    )

}