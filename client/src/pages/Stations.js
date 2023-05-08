import React from "react";
import NavBar from "../components/NavBar";
import "./stations.css"
import { Station } from "../components/Station";
import { Container, Row } from "react-bootstrap";


export function Stations () {
    return(
        <div>
            <NavBar />
            <Container>
            <header className="header">
                <h1 style = {{fontFamily: 'Gotham Rounded, sans-serif', marginTop: "20px" }} >Stations</h1></header>
            <Station />
            </Container>
        </div>
    )
}