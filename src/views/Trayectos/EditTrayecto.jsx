import React, { useContext, useEffect, useState } from 'react'
import trayectosService from '../../Controllers/TrayectoControllers'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import UserContext from '../../Context/UserContext'
import Loading from '../../Components/Loading'

export default function EditTrayecto() {
    const trayectoId = useParams().trayectoId
    const [loading, setLoading] = useState(true)
    const [trayecto, setTrayecto] = useState(null)
    // this.trayectoId = trayectoId;
    //     this.usuarioId = usuarioId;
    //     this.origen = origen;
    //     this.destino = destino;
    //     this.horaSalida = horaSalida;
    //     this.horaLlegada = horaLlegada;
    //     this.num_plazas_max = num_plazas_max;
    const {user} = useContext(UserContext)
const [from, setFrom] = useState('')
  const [to, setTo] = useState('')
  const [time, setTime] = useState('') //Hora de salida
  const [horaLlegada, setHoraLlegada] = useState("")
  const [numPlazas, setNumPlazas] = useState(4)
  const navigate = useNavigate()

  const handleEditTrayecto = (event)=>{
    event.preventDefault()
    const formatteTime = time.replace("T", " ");
    const formattedHoraLlegada = horaLlegada.replace("T", " ")
    const newTrayecto = {
      trayecto_id: trayecto.trayecto_id,
      usuario_id: user.usuario_id,
      origen: from,
      destino: to,
      hora_salida: formatteTime,
      hora_llegada: formattedHoraLlegada,
      num_plazas_max: numPlazas
      }

      console.log(newTrayecto)

      // trayectosService.modificarTrayectoForm(trayecto.trayecto_id,newTrayecto).then((response)=>{
      //   alert("Trayecto editado con éxito")
      //   console.log(response)
      //   navigate("/user/config/misTrayectos")
        
      // })
      trayectosService.actualizarTrayecto(trayecto.trayecto_id,newTrayecto).then((response)=>{
        alert("Trayecto editado con éxito")
        console.log(response)
        navigate("/user/config/misTrayectos")
        })
      

  }
  
  useEffect(()=>{
        trayectosService.obtenerTrayecto(trayectoId).then((response)=>{
            setTrayecto(response)
            setFrom(response.origen)
            setTo(response.destino)
            setTime(response.hora_salida)
            setHoraLlegada(response.hora_llegada)
            setNumPlazas(response.num_plazas_max)
            console.log(response)

        }).finally(()=> setLoading(false))

      },[trayectoId])
  return (
    <>
    {loading? <Loading /> :
    
    <>
    <form className='create-form' action="post" onSubmit={handleEditTrayecto}>
    <label htmlFor="origen">Introduce el origen del trayecto: </label>
        <input type="text" name="origen" id="origen" value={from}  onInput={(e)=> setFrom(e.target.value)}/>

        <label htmlFor="destino">Introduce el destino del trayecto: </label>
        <input type="text" name="destino" id="destino" value={to}  onInput={(e)=> setTo(e.target.value)}/>

        <label htmlFor="hora">Introduce el día y hora de salida</label>
        <input type="datetime-local" name="hora" id="hora" value={time} onInput={(e)=> setTime(e.target.value)}/>

        <label htmlFor="horaLlegada">Introduce el día y hora de llegada</label>
        <input type="datetime-local" name="horaLlegada" id="horaLlegada" value={horaLlegada} onInput={(e)=> setHoraLlegada(e.target.value)}/>

        <label htmlFor="numPlazas">Introduce el número de plazas disponibles</label>
        <input type="number" name="numPlazas" id="numPlazas" min={1} max={10} value={numPlazas} onInput={(e)=> setNumPlazas(e.target.value)}/>
        <button type="submit">Editar trayecto</button>
    
    </form>
    </>}
    
    </>
  )
}
