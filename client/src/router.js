import React from "react";
import { createBrowserRouter } from "react-router-dom"
import { Journeys } from "./pages/Journeys";
import { Stations } from "./pages/Stations";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Journeys/>,
    },
    {
        path: "/stations",
        element: <Stations/>
    }

])