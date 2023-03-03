import Locales from '../../Pages/Locales/Locales';
import Home from '../../Pages/Home/Home'; 
import Login from '../../Pages/Login/Login';
import Reservas from '../../Pages/Reservas/Reservas'; 
import Layout from '../../Components/Layout/Layout';
import Menu from '../../Pages/Menu/Menu';
import { Routes , Route } from 'react-router-dom';
import Card from '../../Components/Layout/Layout';


const AppRoutes = () => {
  return (
    <Routes>
            <Route path='/' element = {<Layout/>}>
            <Route path='/locales' element={<Locales/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/menu' element={<Menu/>}/>
            <Route path='/reservas' element={<Reservas/>}/>   
            <Route path='/card' element={<Card/>}/>  
      </Route>
    </Routes>
  )
}

export default AppRoutes