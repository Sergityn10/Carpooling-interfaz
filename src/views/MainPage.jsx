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
    <section>
      <h1>¡Es la hora de ahorrar <span className='palabra-clave-main'>dinero</span>!</h1>
    </section>
    <form className='trayecto-form' onSubmit={handleSubmit}>
        <input className='text-input-trayecto' type="text" name="origen" id="origen" onInput={(e)=> setFrom(e.target.value)} placeholder='Desde'/>
        <input className='text-input-trayecto' type="text" name="destino" id="destino" onInput={(e)=> setTo(e.target.value)} placeholder='Hasta'/>
        
        <input type="date"  name="hora" id="hora" onInput={(e)=> setTime(e.target.value)}/>
        <button type="submit">Buscar</button>
    </form>


    {loading? <Loading/> : <div>
                <h2>Resultados:</h2>
                <ListCardTrayectoSearch listTrayectos={resultados}/> 
            
        </div>}{/* ESTA PARTE DE RESULTADOS SE DEBE DE QUITAR. EL FORMULARIO DEBE DE REDIRIGIR A LA PANTALLA DE BUSQUEDA DE TRAYECTOS */}

      <div className='explicacion-tags-main'>
        <section className='tag-main-container'>
          <h3>¡Que no te pille la DGT!</h3>
          <p>Incentivar la movilidad compartida no consiste en multarte, sino disfrutar del viaje y darte ayudas para moverte con facilidad. </p>
          <p>¡Compartir coche en tus trayectos diarios no ha sido tan facil!</p>
        </section>

        <section className='tag-main-container'>
          <img src="" alt="Imagen de un tren en svg o una avalancha en un bus o tren" />
          <h3>¡Se acabaron las avalanchas en el transporte publico!</h3>
          <p>Disfruta del comfort de ir en un vehículo privado a precio del transporte publico sin agobiarte de que el tren o bus llegue petado y no te puedas ni mover. </p>
          <p>¡Además, es una forma de cuidar el medio ambiente!</p>   
        </section>
        <section className="tag-main-container">
          <h3>Viaja seguro y tranquilo</h3>
          <p>Para nosotros es muy importante conocer a nuestros usuarios. Por eso, examinamos atentamente las opiniones y los perfiles de nuestros usuarios para que sepas con quién vas a viajar. Puedes reservar tu próximo viaje con total seguridad y tranquilidad.</p>
        </section>

        
      </div>
      <section className='main-section'> 
        <h2>¡Empieza a ahorrar haciendo lo de siempre!</h2>
        <p>¿Tienes que ir a trabajar? ¿Vas a hacer la compra? ¿Tienes que ir a la universidad? ¡Comparte tu trayecto y ahorra dinero!</p>
        <p>¡O si prefieres, busca un trayecto y ahorra dinero!</p>
        <p>¡Es muy fácil! ¡Regístrate y empieza a compartir!</p>
        <button>Publicar trayecto</button>
        <button>Buscar trayecto</button>

      </section>

      <section className='main-section'>
        <h2>¡Se acabaron las horribles esperas del transporte público!</h2>
        <p>¿Estás cansado de esperar al autobús o al metro? ¡Comparte tu trayecto y ahorra tiempo!</p>
        <p>Ya no es necesario que tengas que aguantar las multitudes ni las esperas infinitas del bus o metro.</p>
        <p>¡Viaja tranquilo con nosotros!</p>
        <button>Buscar trayectos</button>
      </section>

      <section className='main-section'>

        <h2>¡Viaja seguro y con confianza!</h2> 
        <p>¿Te preocupa tu seguridad? ¡No te preocupes! ¡Todos nuestros usuarios están verificados!</p>
        <p>¡Además, puedes ver las opiniones de otros usuarios antes de compartir trayecto!</p>
        <button>Registrarse</button>  
      </section>
    
    </main>
  )
}
