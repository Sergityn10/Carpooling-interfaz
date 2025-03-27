import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import trayectosService from '../Controllers/TrayectoControllers'
import ListCardTrayectoSearch from '../Components/Trayectos/ListCardTrayectoSearch'
import FormTrayectoMain from '../Components/Trayectos/FormTrayectoMain'

export default function Search() {
    const [trayectos,setTrayectos] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const {search} = useLocation()
    const query = new URLSearchParams(search)

    useEffect(()=>{
        trayectosService.buscarTrayectos(query).then((response)=>{
            setTrayectos(response)
        }).catch((error)=>{
            setError(error.message)
        }).finally(()=> setLoading(false))
    }
    ,[search])
    

    
    // const {search} = useLocation()
    // const query = new URLSearchParams(search)
    
    // useEffect(()=>{
    //     trayectosService.buscarTrayectos(query)
        
    // },[search])

  return (
    <main>
        <h1>BUSCADOR</h1>

        <section>
          <FormTrayectoMain/>
        </section>

        <section className="list-result-trayectos">
          <h2>Resultados de la busqueda</h2>

        {loading? <p>Cargando...</p> : 
        
        <ListCardTrayectoSearch listTrayectos={trayectos}/>
        }
        </section>
    </main>
  )
  
}
