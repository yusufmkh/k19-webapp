import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './components/Home'
import Dashboard from './components/dashboard/Dashboard'
import Application from './components/dashboard/Application';
import Visa from './components/dashboard/Visa';
import Support from './components/dashboard/Support';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard",
        element: <Application />
      },
      {
        path: "/dashboard/visa",
        element: <Visa />
      },
      {
        path: "/dashboard/support",
        element: <Support />
      }
    ]
  },
])

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App
