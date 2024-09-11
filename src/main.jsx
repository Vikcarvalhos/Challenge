import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Error from './routes/Error.jsx'
import Home from './routes/Home.jsx'
import Register from './routes/Register.jsx'
import Appointment from './routes/Appointment.jsx'
import App from './App.jsx'

const router = createBrowserRouter([
  {
    path:'/', element:<App/>,
    errorElement:<Error/>,

    children:[
      {path:'/', element:<Home/>},
      {path:'/appointment', element:<Appointment/>},
      {path:'/register', element:<Register/>},
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
