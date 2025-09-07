import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Button } from './components/ui/button'
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom'
import SignIn from './pages/signIn'
import SignUp from './pages/signIn'
function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/sign-in" element={<SignIn/>}/>
      <Route path="/sign-up" element={<SignUp />} />
</Routes>
      </BrowserRouter>
  )
}
export default App
