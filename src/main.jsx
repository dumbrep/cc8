import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MyRoutes from './route.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyRoutes />
  </StrictMode>,
)
