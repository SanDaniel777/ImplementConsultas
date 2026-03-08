
import './components/components-style.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import DashBoard from './pages/Dashboard'
import Page404 from './pages/Page404'
import Users from './pages/users/Users'
import UserFindOne from './pages/users/UserFindOne'
import UserList from './pages/users/UserList'
import ProtectedRoutes from './routes/ProtectedRoutes'

function App() {
const isALLowed = false;

  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route element={<ProtectedRoutes isALLowed={isALLowed}/>}>
      <Route path='/dashboard' element={<DashBoard/>}/>
      </Route>



      <Route path='*' element={<Page404/>}/>

      <Route path='/users' element={<Users/>}>
        <Route path='list' element={<UserList/>}/>
        <Route path=':id' element={<UserFindOne/>}/>
      </Route>


    </Routes>
  )
}

export default App
