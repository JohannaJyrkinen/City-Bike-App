import React, {useEffect, useState} from "react";
import NavBar from "../components/NavBar";
import "./stations.css"
import { Station } from "../components/Station";
import { Container, Button } from "react-bootstrap";
import axios from "axios";



export function Stations () {

    const [stations, setStations] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        getStations(currentPage);
    }, [currentPage]);

    const getStations = async (pageNumber) => {
        try {
          const response = await axios.get(`http://localhost:3001/api/stations?pageNumber=${pageNumber}`);
          const data = response.data;
          setStations(data.stations.data);
          console.log(data.stations.data);
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
            <header className="header">
                <h1 style = {{fontFamily: 'Gotham Rounded, sans-serif', marginTop: "65px" }} >Stations</h1>
            </header>
                <Container >
                <div style={{ display: "flex", justifyContent: "center" }}>
                {currentPage > 1 && (<Button variant="dark" className="pagination-button" onClick={handlePreviousPage} style={{ fontFamily: 'Gotham Rounded, sans-serif', marginRight: "20px" }}>Previous</Button>)}
                <Button variant="dark" className="pagination-button" onClick={handleNextPage}style={{ fontFamily: 'Gotham Rounded, sans-serif'}} >Next</Button>
                </div>
                </Container>
            
            <br/>
            {stations ? (stations.map((station) => <Station key={station.ID} station={station}/>)): (<div></div>) }
            <Container >
                <div style={{ display: "flex", justifyContent: "center" }}>
                <Button className="pagination-button" onClick={handlePreviousPage} style={{ fontFamily: 'Gotham Rounded, sans-serif', marginRight: "20px" }}>Previous</Button>
                <Button className="pagination-button" onClick={handleNextPage}style={{ fontFamily: 'Gotham Rounded, sans-serif'}} >Next</Button>
                </div>
                </Container>
                <br/>
            </Container>
        </div>
    )
}