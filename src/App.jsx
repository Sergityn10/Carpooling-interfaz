
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './views/MainPage';
import CrearTrayecto from './views/CrearTrayecto';
import Header from './Components/Header';
import Search from './views/Search';
import MisTrayectos from './views/User/MisTrayectos';
import { Configuracion } from './views/User/Configuracion';
import MisReservas from './views/User/MisReservas';
import LogIn from './views/LogIn';
import { UserContextProvider } from './Context/UserContext';

function App() {
  return (
    <>
    <UserContextProvider>
    
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/app" element={<MainPage/>}>
          
            
          </Route>
          <Route path='/search' element={<Search/>} />
          <Route path='/login' element={<LogIn/>}/>
          <Route path="/user/config/misTrayectos" element={<MisTrayectos/>}/>
          <Route path="/user/config" element={<Configuracion/>}/>
          <Route path="/user/config/misReservas" element={<MisReservas/>}/>
          <Route path='/trayectos/create' element={<CrearTrayecto/>} />
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
    </>
  );
}

export default App;
