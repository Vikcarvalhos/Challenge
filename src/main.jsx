import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Error from './routes/Error.jsx'
import Home from './routes/Home.jsx'
import Howitworks from './routes/Howitworks.jsx'
import Prototype from './routes/Prototype.jsx'
import Register from './routes/Register.jsx'
import Data from './routes/Data.jsx'
import Concept from './routes/Concept.jsx'
import Appointment from './routes/Appointment.jsx'

const router = createBrowserRouter([
  {
    path:'/', element:<App/>,
    errorElement:<Error/>,

    children:[
      {path:'/', element:<Home/>},
      {path:'/appointment', element:<Appointment/>},
      {path:'/howitworks', element:<Howitworks/>},
      {path:'/concept', element:<Concept/>},
      {path:'/data', element:<Data/>},
      {path:'/prototype', element:<Prototype/>},
      {path:'/register', element:<Register/>},
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
