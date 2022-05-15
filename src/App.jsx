import React from 'react';
import Home from './components/Home/Home';
import { Routes, Route } from "react-router-dom";
import data from './data/data.json';
import "./App.css";

export default function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<Home data={data}/>} />
    </Routes>
    </>
  )
}