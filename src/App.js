import React from 'react'
import About from './page/about/about';
import Home from './page/home/Home';
import Contact from './page/Contact/Contact';
import Coffes from './page/Coffes/Coffes';
import Galleryandblogs from './page/Galleryandblogs/Galleryandblogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
 function App() {
  return (
    <>
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/About' element={<About/>} />
    <Route path='/Coffes' element={<Coffes/>}/>
    <Route path='/Contact' element={<Contact/>} />
    <Route path='/Galleryandblogs' element={<Galleryandblogs/>} />
    
   </Routes>
   <Footer/>
   </BrowserRouter>
   </>
  );
}

export default App;

