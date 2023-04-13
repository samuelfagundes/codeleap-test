import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { SignUp } from './pages/signup'
import { MainScreen } from './pages/mainScreen'

import './pages/styles/global.scss'

const router = createBrowserRouter([
  {
    path: '/',
    element: <SignUp />,
  },
  {
    path: '/mainScreen/',
    element: <MainScreen />,
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
