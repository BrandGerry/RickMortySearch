//Hooks
import React,{useState} from 'react'
//axios
import axios from "axios"
import "../Stylos/SearchBox.css"


const SearchBox = ({setData}) => {
    const[id,setId] = useState("")

    const Search = () =>{
        axios.get(`https://rickandmortyapi.com/api/location/${id}`)
        .then(res=> setData(res.data))
    }

    return (
        <div>
            
            <input 
                type="text" 
                onChange={e => setId(e.target.value)} 
                value={id}
            />
            <button onClick={Search}>Search</button>
        
        </div>
    )
}

export default SearchBox
