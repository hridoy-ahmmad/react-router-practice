import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import MainLayout from './Layouts/MainLayout'
import PlantsDetails from './Pages/PlantsDetails'
import axios from 'axios'
import Loader from './Componenets/Loader'

let router = createBrowserRouter([
  {
    Component: MainLayout,
    hydrateFallbackElement: <Loader />,
    path: '/',
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => fetch('https://openapi.programming-hero.com/api/plants')

      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/plant_details/:id',
        element: <PlantsDetails />,
        loader: ({ params }) => axios(`https://openapi.programming-hero.com/api/plant/${params.id}`)
      },
    ]
  },

])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
