import React from 'react';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router , Route , Routes} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Product from './Product';
import Contact from './Contact';


const App = () => {
  return (
   <>
  

   <Routes>
    <Route path='/' element = {<Home />} />
    <Route path='/about'  element = {<About />} />
    <Route path='/product'  element = {<Product />} />
    <Route path='/contact'  element = {<Contact />} />
    <Route path='/about'  element = {<About />} />
   </Routes>
   


    
    
   
   </>
  )
}

export default App
