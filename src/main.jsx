import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'
import Home from './components/home/Home.jsx'
import Targeta from './components/pruebas/qr/Targeta.jsx'
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
                <Route path='targetas/:edicion' element={<Targeta />} />
            </Route>


            {/* TARGETAS 1 */}
            {/* <Route path='/actividades' element={<App />} >
                <Route index element={<HomeActividades />} />
                <Route path='tipo/:type' element={<HomeActividades />} />
                <Route path=':id' element={<PageActividad/>}/>
            </Route> */}

            {/* OTROS */}
            <Route path='*' element={<Home />} />
        </Routes>
    </BrowserRouter>
)
