// done👍
import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Contact from './pages/Contact'
import PlaceOrder from './pages/PlaceOrder'
import Order from './pages/Order'
import Product from './pages/Product'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'

  import { ToastContainer, toast } from 'react-toastify';
import  'react-toastify/dist/ReactToastify.css'
import Verify from './pages/Verify'


function App() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <div>
      <ToastContainer/>
      <Navbar />
      <SearchBar />
      <div className={isHome ? '' : 'pt-[70px] sm:pt-[90px]'}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/collection' element={<Collection />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<Login />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/place-order' element={<PlaceOrder />} />
          <Route path='/product/:productId' element={<Product />} />
             <Route path="/orders" element={<Order />} />
             <Route path="/verify" element={<Verify />} /> 

        </Routes>
        <Footer />
      </div>
    </div>
  )
}

export default App