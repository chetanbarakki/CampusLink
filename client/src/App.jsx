import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Button } from './components/ui/button'
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom'
import SignIn from './pages/signIn'
import Layout from './layout'
import EventsPage from './pages/eventsPage'
import ClubsPage from './pages/clubsPage'
import Profile from './pages/profile'
import SignUp from './pages/signUp'
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes >
      <Route path="/sign-in" element={<SignIn/>}/>
      <Route path="/sign-up" element={<SignUp/>}/>
        <Route element={<Layout />}>
          <Route path="/" element={<div>Home page</div>}/>
          <Route path="/events" element={<EventsPage />}/>
          <Route path="/clubs" element={<ClubsPage />}/>
          <Route path="/profile" element={<Profile />}/>
        </Route>
       </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
