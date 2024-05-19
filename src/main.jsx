import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { DogDataHandler } from './context/dogData.jsx'
import { StateHandler } from './context/screenContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <DogDataHandler>
        <StateHandler>
          <App />
        </StateHandler>
      </DogDataHandler>
    </BrowserRouter>
  </React.StrictMode>,
)
