import React from 'react';
//import ReactDOM from 'react-dom';
import data from './data/data.json';
import { Routes, Route } from "react-router-dom";
import TourDetails from "./components/TourDetails/TourDetails.js";
import Home from "./components/Home/Home.jsx";
function App() {
    return (
        
        <Routes>
                <Route path="/" element={<Home data = {data}/>} />
               
            </Routes>
        
    )
}
export default App;