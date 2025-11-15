import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login.jsx';
import Principal from './pages/contenido/principal.jsx';
import contenidoMod from './pages/contenido/contenido.jsx';
import Pagina2 from './pages/contenido/pagina2.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App></App>}>
        <Route index element={<Principal/>}></Route>
        <Route path="contenido" element={<contenidoMod/>}></Route>
        <Route path="Pagina2" element={<Pagina2/>}></Route>
        </Route>
        <Route path="/login" element={<Login/>}></Route>

      </Routes>
    </BrowserRouter>
    
  </StrictMode>
)