import React, { useState, createContext, useEffect } from "react"
import usersService from "../Controllers/UserController";


 const UserContext = createContext({})
export function UserContextProvider({children}){
    const [jwt, setJWT] = useState(() => window.localStorage.getItem("access_token") || null)
    const [isLoggedIn, setIsLoggedIn] =useState(false);
    const [user, setUser] = useState(null)
    const [listFavorites, setListFavorites] = useState([])
    useEffect( () => {

        if(jwt){
            // setJWT(token)
             usersService.validateToken(jwt).then((response) => {
             if(response.status === 200){
                //  setJWT(jwt)
                setUser(response.userDetails)
             }
             }).catch((error) => {
                 console.log(error)
                 setJWT(null)
                 window.localStorage.removeItem("access_token")
             })


        }


    }, [jwt])
    return <UserContext.Provider value={{jwt, setJWT,user, setUser, isLoggedIn, setIsLoggedIn, listFavorites, setListFavorites}}>
        {children}
    </UserContext.Provider>
}
export default UserContext;