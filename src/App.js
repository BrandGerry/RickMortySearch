//Stylos
import './App.css';
//Hooks
import {useState,useEffect} from "react"
//Axios
import axios from "axios"
//Componentes
import SearchBox from './Componentes/SearchBox';
import LocationInfo from './Componentes/LocationInfo';
import ResidenList from './Componentes/ResidenList';
import Loader from "./Componentes/Loader"


const Random = Math.floor(Math.random()*126)+1

const App = () => {

  const[data,setData] = useState({})
  
  useEffect(()=>{
    axios.get(`https://rickandmortyapi.com/api/location/${Random}`)
    .then(res => setData(res.data))
  },[])

  console.log(data.residents)

  return (
    <div className="App">
      {
        data? (
        <>
          <header className='bg-header ' >
            <section className='cardSearch' >
                <h1>Rick and Morty App</h1>
                <p>Number from 1 to 126 to find a planet.</p>
              <SearchBox setData={setData}/>
            </section>
          </header>

          <section className='body'>
            <LocationInfo
              name={data?.name}
              type={data?.type}
              dimension={data?.dimension}
              population={data.residents?.length}
            />
            <h3>Residents:</h3>
            <ResidenList
              data={data}
            />
          </section>
        </>
        ):
        (<Loader/>)
      }
    </div>
  );
}

export default App;


