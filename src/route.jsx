import { BrowserRouter as Router , Route , Routes } from "react-router-dom";
import CreateStudent from "./pages/create";
import React from "react";
import Display_Studnets from "./pages/display student";
const MyRoutes = ()=>{
    return(
        <Router>
            <Routes>
                <Route path="/" element = {<CreateStudent />} />
                <Route path="/display" element = {<Display_Studnets />} />

            </Routes>
        </Router>
    )
}

export default MyRoutes