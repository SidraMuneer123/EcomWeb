import React from 'react';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router , Route , Routes} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Product from './Product';
import Contact from './Contact';
import SingleProduct from './SingleProduct'
import Cart from './Cart';
import Error from './Error';
import Header from './Components/Header';
import Footer from './Components/Footer';


const App = () => {
  return (
   <>
  

   <Header />
   <Routes>
    <Route path='/' element = {<Home />} />
    <Route path='/about'  element = {<About />} />
    <Route path='/product'  element = {<Product />} />
    <Route path='/contact'  element = {<Contact />} />
    <Route path='/singleproduct'  element = {<SingleProduct />} />
    <Route path='/cart'  element = {<Cart />} />
    <Route path='*'  element = {<Error />} />
   </Routes>
   <Footer />
   


    
    
   
   </>
  )
}

export default App
