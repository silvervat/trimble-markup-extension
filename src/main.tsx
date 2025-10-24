import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import '@trimble-graphics/modus-bootstrap/dist/modus-bootstrap.min.css'; // Modus stiilid

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
