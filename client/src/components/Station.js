import 'bootstrap/dist/css/bootstrap.css'
import { Card, Row, Col, Container } from 'react-bootstrap'
import React from 'react'
import './station.css'
import { Button } from './Button'
import { StationStatistics } from './StationStatistics'
import { Map } from './Map'

export function Station({station}) {

    if(station.Kaupunki === ' ') {
        station.Kaupunki = 'Helsinki'
    }

    const [isOpen, setOpen] = React.useState(false);

    const handleClick = () => {
      setOpen(!isOpen);
    };

    return (
    
        <Card style= {{marginBottom: "10px"}}>
            <Card.Body style={{textAlign: "center", fontFamily: 'Gotham Rounded, sans-serif'}}> 
                    <Row>
                        <Col>
                            {station.Nimi}
                        </Col>
                        <Col>
                            <Button onClick={handleClick}>
                            {!isOpen ? "+" : "-"}
                            </Button>
                        </Col>
                    </Row>
                
                    {isOpen && 
                        <>
                        <Card.Text style= {{marginTop: "10px"}}>
                            Bike capacity: {station.Kapasiteet}
                        </Card.Text>
                        <Card.Text>
                            Address: {station.Osoite}, {station.Kaupunki}
                        </Card.Text>
                        <StationStatistics id={station.ID}/>
                        <Map station = {station}/>    
                        
                        </>
                        }      
            </Card.Body>
        </Card>
        
    )

}