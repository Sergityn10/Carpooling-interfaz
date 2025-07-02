import React, { useState } from 'react'
import trayectosService from '../../Controllers/TrayectoControllers'

export default function FormTrayectoMain({setLoading, setResultados, setError}) {
    const [from, setFrom] = useState('')
      const [to, setTo] = useState('')
      const [time, setTime] = useState('')
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
    <form className='trayecto-form' onSubmit={handleSubmit}>
        <input className='text-input-trayecto' type="text" name="origen" id="origen" onInput={(e)=> setFrom(e.target.value)} placeholder='Desde'/>
        <input className='text-input-trayecto' type="text" name="destino" id="destino" onInput={(e)=> setTo(e.target.value)} placeholder='Hasta'/>
        
        <input type="date"  name="hora" id="hora" onInput={(e)=> setTime(e.target.value)}/>
        <button type="submit">Buscar</button>
    </form>
  )
}
