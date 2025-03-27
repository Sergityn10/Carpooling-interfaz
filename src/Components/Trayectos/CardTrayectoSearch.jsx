import React, { useContext, useEffect, useState } from 'react'
import reservasService from '../../Controllers/ReservasController'
import { useNavigate, useSearchParams } from 'react-router-dom'
import UserContext from '../../Context/UserContext'

export default function CardTrayectoSearch({trayecto}) {
  const navigate = useNavigate()
  const [isReserved, setIsReserved] = useState(false)
  const [numDisponibles, setNumDisponibles] = useState(trayecto.num_plazas_max)
  const {user} = useContext(UserContext)
  const [loading, setLoading] = useState(true)
  const handleReserva = (event)=>{
    event.preventDefault()
    
      if(isReserved){
        alert("Ya tienes una reserva en este trayecto")
      }
      else{
        if(numDisponibles < trayecto.num_plazas_max){
        
       
        const reserva = {
          trayectoId: trayecto.trayecto_id,
          userId: user.usuario_id,
          paradaId:1
        }
        reservasService.crearReserva(reserva).then((response)=>{
          alert("RESERVA REALIZADA")
          // navigate("/user/config/misReservas")
          setNumDisponibles(numDisponibles+1)
          setIsReserved(true)
        })
          
      
    

  }
      }
      
  }
  useEffect(()=> {
    reservasService.obtenerReservaByUserIdAndTrayectoId(user.usuario_id, trayecto.trayecto_id).then((response)=>{
      if(response.length > 0){
        setIsReserved(true)
      }

    })

    reservasService.buscarReservasPorTrayectoId(trayecto.trayecto_id).then((response)=>{
      setNumDisponibles(response.length)
      
    })

    
  },[])

  return (
    <section className='card-container' key={trayecto.trayecto_id}>
   <div>
      <p>Trayecto: {trayecto.origen} → {trayecto.destino}</p>
      <p>Numero de plazas: {trayecto.num_plazas_max}</p>  
      <p>Numero de plazas disponibles: {numDisponibles}</p>
   </div>
   <div>
      Salida: {trayecto.hora_salida} 
   </div>
   
   <div>
        <button onClick={handleReserva}>Reservar</button>
   </div>
    </section>
  )
}
