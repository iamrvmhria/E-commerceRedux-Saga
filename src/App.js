import React from 'react'
// import './index.css'
import Main from './components/Main'
import Header from './components/Header'
import { Route,Routes } from 'react-router-dom/dist'
import Cart from './components/Cart'

export default function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path = '/' element ={<Main/>} />
        <Route path = '/cart' element ={<Cart/>} />
      </Routes>
    </div>
  )
}
