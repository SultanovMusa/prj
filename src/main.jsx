import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import './index.scss'
import Proutes from './providers/Proutes.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Proutes>
    <App />
    </Proutes>
    </BrowserRouter>
  </React.StrictMode>,
)
