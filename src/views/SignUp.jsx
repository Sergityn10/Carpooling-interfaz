import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import usersService from '../Controllers/UserController'


export default function SignUp() {
   const [error, setError] = useState(null)
  const navigate = useNavigate()
  const handleSignUp = (event)=>{
    let form = event.target
    event.preventDefault();
    if(form.password.value === form.repeatedPassword.value){
      const addUser = {
      "nombre": form.name.value,
      "surname": form.surname.value,
      "username": form.username.value,
      "email": form.email.value,
      "password": form.password.value
    }
    
      usersService.register({"username": addUser.username, "password":addUser.password}).then((response)=>{
        alert("Usuario creado con éxito")
        navigate("/login")
      }).catch((error) =>{
        setError("Error al crear el usuario. Por favor, inténtalo de nuevo.")
      })
    }
    else{
      setError("Las contraseñas deben coincidir")
    }
    
  }
  return (
    <>
  <title>HEREWEGO!</title>
  <meta charSet="utf-8" />
  <link rel="icon" href="../assets/icons/logo-carpooling.png" />
  <link rel="stylesheet" href="./styles.css" />
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
    rel="stylesheet"
  />
  <header className="container-fluid headerMedifli p-3">
    <div className="centerReservation">
      <img
        src="assets/icons/medifli_sin_fondo_2.png"
        title="Logo de HereWeGo!"
        height={40}
        alt=""
      />
      <input
        type="image"
        src="../assets/icons/help.png"
        className="right-header"
        height={40}
        alt="Ayuda"
        title="Ayuda"
      />
      <input
        type="image"
        src="../assets/icons/es-circle.png"
        className="right-header margin_right_header"
        height={40}
        alt="Bandera_idioma"
        title="Selecciona tu idioma"
      />
    </div>
  </header>
  <fieldset className="loginContainer headerMedifli whiteLetters">
    <div>
      
      <div className="divLoginMainForm">
      <h5>
        <b>Crea tu cuenta</b>
      </h5>
        <form className='loginForm bordeadoPrincipal'  onSubmit={handleSignUp}>
          <div className="labelForm">
            <label htmlFor="name" className="loginLables"> Nombre <span style={{ color: "#FF672C" }}>*</span>
            </label>
            
            <input
              type="text"
              className="loginBox"
              size={46}
              placeholder="Introduce tu nombre"
              required=""
              name="name"
              id='name'
            />
          </div>
          <div className="labelForm">
            <label htmlFor="surname" className="loginLables">Apellido </label>
            <input
              type="text"
              className="loginBox"
              size={46}
              placeholder="Introduce tu apellido"
              name="surname"
              id = "surname"
            />
          </div>
          <div className="labelForm">
            <label htmlFor="username" className="loginLables">
              
              Username
            </label>
            <input
              type="text"
              className="loginBox"
              size={46}
              placeholder="Introduce tu apellido"
              name="username"
              id= "username"
            />
          </div>
          <div className="labelForm">
            <label htmlFor="email" className="loginLables"> Email <span style={{ color: "#FF672C" }}>*</span>
            </label>
            
            <input
              type="text"
              className="loginBox"
              size={46}
              placeholder="Introduce tu e-mail"
              required=""
              name="email"
              id="email"
            />
          </div>
          <div className="labelForm">
          
            <label htmlFor="password" className="loginLables"> Contraseña <span style={{ color: "#FF672C" }}>*</span>
            </label>
            <input
              type="text"
              id="password"
              className="loginBox"
              size={46}
              placeholder="Introduce tu contraseña"
              required=""
              name="password"
              min={4}
            />
          </div>
          <p className="small-font">
            {error}
          </p>
          <div className="labelForm">
            <label htmlFor="repeatedPassword" className="loginLables">
              {" "}
              Confirma la contraseña{" "}
              <span style={{ color: "#FF672C" }}>*</span>
            </label>
            
            <input
              type="text"
              id="repeatedPassword"
              className="loginBox"
              size={46}
              placeholder="Confirma tu contraseña"
              required=""
              name="repeatedPassword"
            />
            <p />
          </div>
          
            <input
              type="submit"
              className="form-control whiteLetters"
              id="loginButton"
              value={"Crear usuario"}
            />
          
          <p className="small-font" style={{ textAlign: "center" }}>
            {error}
          </p>
        </form>
      </div>
    </div>
    <div>
      <div className="center-text">
        <p />
        <div className="top-borders margin-elements">
          <p />
          <p className="twelvePx">
            {" "}
            Al iniciar sesión o al crear una cuenta, aceptas nuestros Términos y
            condiciones y la Política de privacidad{" "}
          </p>
          <div>
            <p className="twelvePx" id="allRightsReserved">
              Todos los derechos reservados
            </p>
            <span className="twelvePx">Copyright 2024 - Medifli.com</span>
          </div>
        </div>
      </div>
    </div>
  </fieldset>
</>

  )
}