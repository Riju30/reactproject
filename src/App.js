import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './assets/scss/Home.scss'
import './assets/css/nice-select.css'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'react-toastify/dist/ReactToastify.css';

import Index from './components/user/pages/home/Index'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CategoryIndex from './components/user/pages/category/CategoryIndex';
import Navbar from './components/user/common/Navbar'
import Footer from './components/user/common/Footer'
import DetailsIndex from './components/user/pages/productdetails/DetailsIndex'
import ContactIndex from './components/user/pages/contact/ContactIndex'
import LoginIndex from './components/user/pages/loginRegister/LoginIndex'
import { ToastContainer } from 'react-toastify';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <ToastContainer />
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/shop' element={<CategoryIndex />} />
          <Route path='/product-details/:id' element={<DetailsIndex/>}/>
          <Route path='/contact' element={<ContactIndex/>}/>
          <Route path='/login' element={<LoginIndex/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  )
}

export default App