import React, { useState } from 'react'

export default function FormSearchTrayects({handleSubmit})
 {
    const [from, setFrom] = useState('')
  const [to, setTo] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  return (
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
  )
}
