import React from 'react'
import ReactDOM from 'react-dom/client'
import { SignUp } from './pages/signup'
import { MainScreen } from './pages/mainScreen'

import './pages/styles/global.scss'

const username = localStorage.getItem('codeLeapNetwork username') ?? ''

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {username === '' ? <SignUp /> : <MainScreen />}
  </React.StrictMode>,
)
