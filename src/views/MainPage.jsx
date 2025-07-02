import React, { useState } from 'react'
import trayectosService from '../Controllers/TrayectoControllers'
import ListCardTrayectoSearch from '../Components/Trayectos/ListCardTrayectoSearch'
import Loading from '../Components/Loading'
import '../css/search-form.css'
export default function MainPage() {
const [from, setFrom] = useState('')
  const [to, setTo] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [resultados, setResultados] = useState([]);
const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event)=>{
    event.preventDefault()
    setLoading(true)
   
   const formatteTime = time.replace("T", " ");

  //  const diaBusqueda = new Date(formatteTime).toISOString().split('T')[0];
   console.log(time)


    trayectosService.buscarTrayectosPorDia(from, to, time).then((response)=>{
        setResultados(response);

        console.log(response)
    }).catch((error)=>{
      setError(error.message);
    }).finally(()=> setLoading(false))
          

  }
  return (
    <main>
    {error? <p>{error}</p> : null}
    <section className='main-search-form'>
        <h1>¡Encuentra tu viaje!</h1>
        <form className='trayecto-form' onSubmit={handleSubmit}>
          <section id="container-origen" className="section-input-search-form">
            <label htmlFor="origen"> Origen</label>
            <input id="origen" className='text-input-trayecto' type="text" name="origen" onInput={(e)=> setFrom(e.target.value)} placeholder='Desde'/>
          </section>
          <section id="container-destino" className="section-input-search-form">
            <label htmlFor="destino">Destino</label>
            <input id="destino" className='text-input-trayecto' type="text" name="destino" onInput={(e)=> setTo(e.target.value)} placeholder='Hasta'/>
          </section>
          <section id="container-fecha" className="section-input-search-form">
            <label htmlFor="hora">Fecha del trayecto</label>
            <input type="date"  name="hora" id="hora" onInput={(e)=> setTime(e.target.value)}/>
          </section>
          <button type="submit">Buscar</button>
      </form>
    </section>


  {/* ESTA PARTE DE RESULTADOS SE DEBE DE QUITAR. EL FORMULARIO DEBE DE REDIRIGIR A LA PANTALLA DE BUSQUEDA DE TRAYECTOS */}


    
    </main>
  )
}
