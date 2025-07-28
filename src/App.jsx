import React from 'react'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Details from './pages/Details'

const App = () => {
   const route = createBrowserRouter([
    {
      path: '/',
      element: <div>
        <Navbar />
        <Home />
      </div>
    },
    {
      path: '/anime/:id',
      element: <>
      <Navbar />
      <Details />
      </>
    }
   ])

  return (
    <div>
       <RouterProvider router={route} />
    </div>
  )
}

export default App
