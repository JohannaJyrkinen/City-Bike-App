import React from "react";
import { Container } from "react-bootstrap";
import { Journey } from "../components/Journey";
import NavBar from "../components/NavBar";
import "./journeys.css"

export function Journeys() {

    return(
        <div>
            <NavBar />
            <Container>
                <header>
                    <h1 style = {{fontFamily: 'Gotham Rounded, sans-serif', marginTop: "10px", textAlign: 'center' }}>Matkat</h1>
                </header>
                <Journey/>
            </Container>
        </div>
    )
}