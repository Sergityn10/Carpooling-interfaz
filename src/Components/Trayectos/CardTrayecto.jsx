import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import trayectosService from '../../Controllers/TrayectoControllers'

export default function CardTrayecto({trayecto}) {
  const navigate = useNavigate()
  const handleEditTrayecto = () => {
    navigate(`/trayectos/edit/${trayecto.trayecto_id}`)
  }
  const handleDeleteTrayecto = (event)=>{
    event.preventDefault()
    trayectosService.eliminarTrayecto(trayecto.trayecto_id).then((response)=>{
      alert("Trayecto eliminado con éxito")
      console.log(response)
      navigate("/user/config/misTrayectos")
      })
  }
  return (
   <section className='card-container' key={trayecto.trayecto_id}>
      <div>
          <p>Trayecto: {trayecto.origen} → {trayecto.destino}</p>
          <p>Numero de plazas: {trayecto.num_plazas_max}</p>  
      </div>
      <div>
          Salida: {trayecto.hora_salida} 
      </div>
      <div>
            <button onClick={ handleEditTrayecto}>Editar trayecto</button>
            <button onClick={handleDeleteTrayecto}>Eliminar trayecto</button>
      </div>
    </section>
  )
}
