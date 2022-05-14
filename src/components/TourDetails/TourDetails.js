import { useParams } from 'react-router-dom'
import Header from "../Header/Header.jsx";
import Footer from '../Footer/Footer.jsx';
import React from 'react';
import "./TourDetails.css";
function TourDetails({ data }) {
    let { id } = useParams();
    let city = data.filter(city => city.id === id)
    return (
        <>
            <Header></Header>
            <article>
                <div>
                    <h4>{city[0].name}</h4>
                    <hr />
                    {city[0].info}
                    <hr />
                    <img src={city[0].image} alt=""/>
                </div>
            </article>
            <Footer></Footer>


        </>

    )
};

export default TourDetails;