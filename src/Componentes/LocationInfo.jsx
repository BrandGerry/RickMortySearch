import React from 'react'
import "../Stylos/LocationInfo.css"

const LocationInfo = ({type,dimension,population,name}) => {
    return (
        <div className='card-location'>
            <h3><p>Name: {name}</p></h3>
            <section>
                <p>Type: {type}</p>
                <p>Dimension: {dimension}</p>
                <p>Population: {population}</p>
            </section>
        </div>
    )
}

export default LocationInfo
