import '../css/header.css';

import { NavLink, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useContext } from 'react';
import UserContext from '../Context/UserContext';
import UseUser from '../Hooks/UseUser';


export default function Header(){
    const navigate = useNavigate()
    const {user, setUser,isLoggedIn,setIsLoggedIn, logout} = UseUser()


    const handleLogout = ()=>{
        logout()
        navigate("/login")

    }
    
    return (
        <header>
            <div className="container-header">
                <nav id="cabecera-nav">
                    <div className="title">
                        <NavLink to="/app"> 
                            <img src="Images/Logo-carpooling.png" alt="Logo de la aplicación." /> 
                        </NavLink>
                    </div>
                    
                    <div id="botones-header">

                        <NavLink className="formulario" to="/trayectos/create">Publicar trayecto</NavLink>
                        <NavLink className="formulario" to="/search">Buscador</NavLink>
                        {!isLoggedIn? 
                            <>
                                <NavLink className="formulario" to="/signup">Hazte tu cuenta</NavLink>
                                <NavLink className="formulario" to="/login">Iniciar sesión</NavLink>
                            </>:
                            <>
                                {/* <NavLink className="alojamiento seleccion" to="/user/config">¡Hola, {user.nombre}!</NavLink> */}
                                <NavLink className="alojamiento seleccion" to="/user/config">Configuracion</NavLink>
                                <NavLink to="/login" className="alojamiento seleccion" onClick={handleLogout}>Cerrar sesión</NavLink>
                            </>
                        }
                    </div>
                    
                </nav>

            </div>
        </header>
           

        
          
    )
}