import axios from 'axios'
import React,{useEffect,useState} from 'react'
import "../Stylos/ResidentInfo.css"

const ResidentInfo = ({character}) => {
    
    const[Characterinfo,setCharacterinfo]= useState({})

    useEffect(()=>{
        axios.get(character)
        .then(res => setCharacterinfo(res.data))
    },[character])

    return (
        <div className='card-resident'>
            <div className='container-img'>
                <img src={Characterinfo.image} alt="" />
            </div>
            <div className='container-info'>
                <h3>Name: {Characterinfo.name}</h3>
                <article>
                    <p>Status: {Characterinfo.status}</p>
                    <p>Origin: {Characterinfo.origin?.name}</p>
                    <p>N° de episodios: {Characterinfo.episode?.length}</p>
                </article>
            </div>
        </div>
    )
}

export default ResidentInfo