import React from 'react'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'

const App = () => {
   const route = createBrowserRouter([
    {
      path: '/',
      element: <div>
        <Navbar />
        <Home />
      </div>
    }
   ])

  return (
    <div>
       <RouterProvider router={route} />
    </div>
  )
}

export default App
