import React from 'react';
import "./tour.css";
const Tour = ({data}) =>{
    return(
        <>
        
        <div id={data.id}>
        <h3>Place :{data.name}</h3>
        <img src={data.image} alt="" />
        </div>
        
        
        </>
        
        
    )
};

export default Tour;