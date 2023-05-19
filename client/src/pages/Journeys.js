import React, {useEffect, useState}  from "react";
import axios from "axios";
import { Container, Button, Card, Row, Col } from "react-bootstrap";
import { Journey } from "../components/Journey";
import NavBar from "../components/NavBar";
import "./journeys.css"

export function Journeys() {

    const [journeys, setJourneys] = useState(null)
    const [currentPage, setCurrentPage] = useState(1)

    useEffect(() => {
        getJourneys(currentPage);
    }, [currentPage]);

    const getJourneys = async (pageNumber) => {
        try {
          const response = await axios.get(`http://localhost:3001/api/journeys?pageNumber=${pageNumber}`);
          const data = response.data;
          setJourneys(data.journeys.data);
          console.log(data.journeys.data);
        } catch (error) {
          console.log(error);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
          setCurrentPage(currentPage - 1);
          scrollToTop();
        }
    };
    
    const handleNextPage = () => {
        setCurrentPage(currentPage + 1);
        scrollToTop(); 
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };


    return(
        <div>
            <NavBar />
            <Container>
                <header>
                    <h1 style = {{fontFamily: 'Gotham Rounded, sans-serif', marginTop: "65px", textAlign: 'center' }}>Journeys</h1>
                </header>
                <Container style= {{marginBottom: "10px"}}>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        {currentPage > 1 && (<Button variant="dark" className="pagination-button" onClick={handlePreviousPage} style={{ fontFamily: 'Gotham Rounded, sans-serif', marginRight: "20px" }}>Previous</Button>)}
                        <Button variant="dark" className="pagination-button" onClick={handleNextPage}style={{ fontFamily: 'Gotham Rounded, sans-serif'}} >Next</Button>
                    </div>
                </Container>
                <Card style= {{marginBottom: "10px"}}>
            <Card.Body className='custom-card-body'style={{textAlign: "center", fontFamily: 'Gotham Rounded, sans-serif', fontWeight: 'bold'}}>
                    <Row>
                    <Col>Departure station</Col>
                    <Col>Return station</Col> 
                    <Col xs={2}>Distance</Col>
                    <Col xs={2}>Duration</Col>
                    </Row>
            </Card.Body>


        </Card>
                
                {journeys ? (journeys.map((journey)=> <Journey key={journey._id} journey={journey}/>)):(<> </>)}
                <Container >
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        {currentPage > 1 && (<Button variant="dark" className="pagination-button" onClick={handlePreviousPage} style={{ fontFamily: 'Gotham Rounded, sans-serif', marginRight: "20px" }}>Previous</Button>)}
                        <Button variant="dark" className="pagination-button" onClick={handleNextPage}style={{ fontFamily: 'Gotham Rounded, sans-serif'}} >Next</Button>
                    </div>
                </Container>
                <br/>
            </Container>
        </div>
    )
}