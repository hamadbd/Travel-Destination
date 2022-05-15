import React from 'react';
//import ReactDOM from 'react-dom';
import data from './data/data.json';
import "./App.css"
import { Routes, Route } from "react-router-dom";
import TourDetails from "./components/TourDetails/TourDetails";
import Home from "./components/Home/Home";
function App() {
    return (
        
        <Routes>
                <Route path="/" element={<Home data = {data}/>} />
                <Route path={`/city/:id`} element={<TourDetails data = {data}/>} />
            </Routes>
        
    )
}
export default App;