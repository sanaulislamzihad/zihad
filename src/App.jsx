import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/Routes'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AcademicProject from './pages/AcademicProject'
import Navbar from './pages/Navbar'

function App() {
  return <RouterProvider router={router} />
}

export default App
