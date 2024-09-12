import {  BrowserRouter, Route, Routes } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'
import Home from './components/home/Home.jsx'
import Targeta from './components/pruebas/qr/Targeta.jsx'
import Page404 from './components/Pagina404.jsx'
// import Pagina404 from './components/Pagina404.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            {/* PRMER GRUPO */}
            <Route path='/' element={<App />} >
                <Route index element={<Home />} />
            </Route>

            <Route path='/qr' element={<App />} >
                <Route index element={<Home />} />
                <Route path='tarjetas/:edicion' element={<Home />} />
            </Route>

            {/* OTROS */}
            <Route path='*' element={<Page404 />} />
        </Routes>
    </BrowserRouter>
)
