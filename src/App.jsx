import React from 'react';
import ReactDOM from 'react-dom';
import data from './data/data.json';
// import Header from "./components/Header/Header.jsx";
// import Tours from "./components/Tours/Tours.jsx";
// import Footer from "./components/Footer/Footer.jsx";
import Home from "./components/Home/Home.jsx";
function App() {
    return (
        <div>
            <Home data = {data}/>
        </div>
    )
}
export default App;