import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import UseUser from "../Hooks/UseUser"
import loadingGif from "../images/loading.gif"

export default function LogIn() {
  const navigate = useNavigate()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const {isLoggedIn, login,userError, loading} = UseUser()

  const handleLogIn = (event)=>{
    event.preventDefault();

    login({username,password})
  }
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/app")
    }
  }, [isLoggedIn, navigate])

  if(loading){
    return (
      <div className="loading">
        <img src={loadingGif} alt="Loading..." />
      </div>
    )
  }

  return (
    <>
   
    <main className="child-div">
      <fieldset className="loginContainer headerMedifli whiteLetters">
        <div className="divLoginMainForm">
          <div className="child-div">
            <img
              src="images/Icons/medifli_sin_fondo_2.png"
              title="Logo de Mediflí"
              height={150}
              alt="Logo de Carpooling"
            />
          </div>
          <h2>
            <b>Inicia sesión o crea una cuenta</b>
          </h2>
           {userError? <p className="error">Se ha producido un erro al realizar el inicio de sesion</p>:null}
          <form method="post" className="loginForm bordeadoPrincipal" onSubmit={handleLogIn}>
            
            <div className="labelForm">
              <label htmlFor="username"> Usuario </label>
              <input
                type="text"
                name="username"
                className="loginBox"
                autoComplete="on"
                size={46}
                placeholder="Indica tu username"
                required=""
                style={{ marginBottom: 10 }}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            
            <div className="labelForm">
              <label htmlFor="loginPwd"> Contraseña </label>
              <input
                type="password"
                name="password"
                className="loginBox"
                id="password"
                style={{ marginBottom: 18 }}
                size={46}
                placeholder="Indica tu contraseña"
                required=""
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            
            <input
              type="checkbox"
              className="passwordBox"
              
            />
            Mostrar contraseña
            <input
              type="submit"
              className="form-control whiteLetters hoverClass"
              id="loginButton"
              defaultValue="Iniciar sesión"
            />
          </form>
         
          <div className="center-text">
            <p className="small-font">o usar una de estas opciones</p>
          </div>
          <div id="fields">
            <form action="https://example.org">
              <div
                className="externalLoginButton"
                title="Inicia sesión con Facebook"
              >
                <input
                  type="image"
                  className="socialNetwork"
                  src="images/logos/facebook-logo.png"
                  alt="Facebook_logo"
                />
              </div>
            </form>
            <form action="https://example.org">
              <div
                className="externalLoginButton"
                title="Inicia sesión con Google"
              >
                <input
                
                  type="image"
                  className="socialNetwork"
                  src="images/logos/google-logo.png"
                  alt="Google_logo"
                />
              </div>
            </form>
            <form action="https://example.org">
              <div
                className="externalLoginButton"
                title="Inicia sesión con Apple"
              >
                <input
                  type="image"
                  className="socialNetwork"
                  src="assets/logos/apple-logo.png"
                  alt="Apple_logo"
                />
              </div>
            </form>
          </div>
        </div>
        <div className="center-text">
          
          <div className="center-text">
            <p />
            <div className="top-borders margin-elements">
              <p />
              <p className="twelvePx">
                {" "}
                Al iniciar sesión o al crear una cuenta, aceptas nuestros
                Términos y condiciones y la Política de privacidad{" "}
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
    </main>
        
</>
  )
}