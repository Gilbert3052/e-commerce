import { useEffect, useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ProtectedRoutes from './pages/ProtectedRoutes'
import Cart from './pages/Cart'
import Purchases from './pages/Purchases'
import ProductId from './pages/ProductId'
import axios from 'axios'
import Login from './pages/Login'
import Header from './components/shared/Header'

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<ProductId />} />
        <Route path="/login" element={<Login />} />

        <Route element={<ProtectedRoutes />}>
          <Route path='/cart' element={<Cart />} />
          <Route path='/purchases' element={<Purchases />}/>
        </Route>

      </Routes>
    </div>
  )
}

export default App
