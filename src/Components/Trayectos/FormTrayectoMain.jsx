import React, { useState } from 'react'

export default function FormTrayectoMain({handleSubmit}) {
    const [from, setFrom] = useState('')
      const [to, setTo] = useState('')
      const [time, setTime] = useState('')
  return (
    <form className='trayecto-form' onSubmit={handleSubmit}>
        <input className='text-input-trayecto' type="text" name="origen" id="origen" onInput={(e)=> setFrom(e.target.value)} placeholder='Desde'/>
        <input className='text-input-trayecto' type="text" name="destino" id="destino" onInput={(e)=> setTo(e.target.value)} placeholder='Hasta'/>
        
        <input type="date"  name="hora" id="hora" onInput={(e)=> setTime(e.target.value)}/>
        <button type="submit">Buscar</button>
    </form>
  )
}
