import { useEffect, useState } from 'react'
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom'
import SignIn from './pages/signIn'
import Layout from './layout'
import EventsPage from './pages/eventsPage'
import ClubsPage from './pages/clubsPage'
import Profile from './pages/profile'
import SignUp from './pages/signUp'
import { apiClient } from './lib/apiClient'
import { GETME_ROUTE } from './lib/constants'
function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const getUserData = async() => {
      const response = await apiClient.get(GETME_ROUTE,{withCredentials:true});
      
      if(response.status === 200 && response.data.user){
        setUser(response.data.user);
        console.log(response.data.user);
      }else{
        console.log("NULL");
      }
    }
    getUserData();
  },[])
  const PrivateRoute = ({user,children}) => {
    return user ? children : <Navigate to="/sign-in" />
  }
  const AuthRoute = ({user,children}) => {
    return user ? <Navigate to="/events" /> : children;
  }
  return (
    <>
    <BrowserRouter>
      <Routes >
      <Route path="/sign-in" element={<AuthRoute user={user}><SignIn setUserInfo={setUser}/></AuthRoute>}/>
      <Route path="/sign-up" element={<AuthRoute user={user}><SignUp/></AuthRoute>}/>
        <Route element={<Layout />}>
          <Route path="/" element={<PrivateRoute user={user}>{<div>Home</div>}</PrivateRoute>}/>
          <Route path="/events" element={<PrivateRoute user={user}><EventsPage /></PrivateRoute>}/>
          <Route path="/clubs" element={<PrivateRoute user={user}><ClubsPage /></PrivateRoute>}/>
          <Route path="/profile" element={<PrivateRoute user={user}><Profile /></PrivateRoute>}/>
        </Route>
        <Route path='*' element={<PrivateRoute user={user}></PrivateRoute>} />
       </Routes>
      </BrowserRouter>
    </>
  )
}
export default App
