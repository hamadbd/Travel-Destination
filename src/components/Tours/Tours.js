import React from 'react';
//import Tour from './tour/tour';
import "./Tours.css";
import "./tour/tour";
import Tour from "./tour/tour";

let Tours = ({data}) => {
    return (
        <>
            {
               data.map((city , index) => {
                    return (
                        <Tour key={index} city = {city} />
                    )

                })
            }
        </>


    )
};

export default Tours;