import React from 'react'
import Inicio from '@pages/Inicio'
import Home from '@pages/Home'
import Mascotas from '@pages/Mascotas'
import Clientes from '@pages/Clientes'
import NotFound from '@pages/NotFound404'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
    const estadoInicial = useEstadoInicial();
    return (
        <AppContext.Provider value={estadoInicial}>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route path='/' element={<Inicio/>}/>
                        <Route path='/Home' element={<Home/>}/>
                        <Route path='/Clientes' element={<Clientes/>}/>
                        <Route path='/Mascotas' element={<Mascotas/>}/>
                        <Route path='*' element={<NotFound/>}/>
                    </Routes>
                </Layout>
            </BrowserRouter>
        </AppContext.Provider>
    )
}

export default App