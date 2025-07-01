import React, { useCallback, useContext, useState } from 'react'
import UserContext from '../Context/UserContext'
import usersService from '../Controllers/UserController'

export default function UseUser() {
    const {jwt, setJWT,user, setUser, isLoggedIn, setIsLoggedIn, listFavorites, setListFavorites} = useContext(UserContext)
    const [userError, setUserError] = useState(false)
    const [loading, setLoading] = useState(false)
    const login = useCallback(({username, password}) => {
    setLoading(true)
    setUserError(false)
         var userLogIn = {
       "username": username,
       // "email": event.target.email.value,
       "password": password
     }
     
     usersService.login(userLogIn).then((response)=>{
       
	   setJWT(response.accessToken)
       alert("Login exitoso")
       window.localStorage.setItem("access_token",response.accessToken)
       console.log(response)
    
     }).catch((error)=>{
       if(error.status === 403){
        alert("Invalid username or password");
        
       }
       setUserError(true)
     }).finally(()=>{
         setLoading(false)
      })
    }, [setJWT])

    const logout = useCallback(() => {
        setJWT(null)
    }, [setJWT])
  return {
    jwt,
    setJWT,
    user,
    setUser,
    isLoggedIn: Boolean(jwt),
    setIsLoggedIn,
    listFavorites,
    setListFavorites,
    userError,
    loading,
    setUserError,
    setLoading,
    login,
    logout
  }
    
  
}
