import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./index.css"
import Item from './componentes/Item.jsx'
import Lista from './componentes/Lista.jsx'
import Icone from './componentes/Icone.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Icone />
  </StrictMode>,
)
