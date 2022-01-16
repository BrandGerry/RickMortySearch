import axios from 'axios'
import React,{useEffect,useState} from 'react'
import "../Stylos/ResidentInfo.css"

const ResidentInfo = ({character}) => {
    
    const[Characterinfo,setCharacterinfo]= useState({})

    useEffect(()=>{
        axios.get(character)
        .then(res => setCharacterinfo(res.data))
    },[character])

    const getviñeta = () => {
		if(Characterinfo.status=="Dead"){  // Si el usuario no esta loggeado, muestra el login
			return "viñeta-roja"
		} else if (Characterinfo.status=="Alive"){     
            return "viñeta-azul"        // Si esta loggeado, valida su rol
		}
        else{
            return "viñeta-gris"
        }
}

    return (
        <div className='card-resident'>
            <div className='container-img'>
                <img src={Characterinfo.image} alt="" />
            </div>
            <div className='container-info'>
                <h3>Name: {Characterinfo.name}</h3>
                <article>
                    <div className='viñeta-container'>
                        <div className={getviñeta()}></div>
                        <p>Status: {Characterinfo.status}</p>
                    </div>
                    <p>Origin: {Characterinfo.origin?.name}</p>
                    <p>N° de episodios: {Characterinfo.episode?.length}</p>
                </article>
            </div>
        </div>
    )
}

export default ResidentInfo