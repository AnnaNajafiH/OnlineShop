import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ShoppingCartProvider } from './context/ShoppingCartContext'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
        <ShoppingCartProvider>

    <App />
        </ShoppingCartProvider>

    </BrowserRouter>
  </React.StrictMode>,
)
