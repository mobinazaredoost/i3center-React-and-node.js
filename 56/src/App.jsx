import React from 'react'
import {Navbar,Footer} from './Components'
import {About, Auth, Cart, Contact, Home, NotFound, ProductDetails, Products, Profile} from './Pages'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Box, CssBaseline } from '@mui/material'
import { useSelector } from 'react-redux'
import { Toaster } from 'react-hot-toast'
export default function App() {
  const {token}=useSelector(state=>state.auth)
  return (
    <>
    <CssBaseline/>
    <Navbar/>
    <Box component={'main'} minHeight={'80vh'}>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route path='/products/:categoryName/:categoryId' element={<Products/>}/>
      <Route path='/product-detail/:id/:name' element={<ProductDetails/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/cart' element={token?<Cart/>:<Navigate to={"/auth"}/>}/>
      <Route path='profile' element={token?<Profile/>:<Navigate to={"/auth"}/>}/>
      <Route path='/auth' element={!token?<Auth/>:<Navigate to={"/"}/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    </Box>
    <Footer/>
    <Toaster/>
    </>
  )
}

