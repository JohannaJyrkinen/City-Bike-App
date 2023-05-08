import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import { RouterProvider } from "react-router";
import { router } from "./router";

function App() {
  return (
    <div className="App">
    <RouterProvider router={router} />
    </div>
  );
}

export default App;
