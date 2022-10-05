import React from 'react';
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
    <header id="site-header" className="fixed-top">
    <nav className="navbar navbar-expand-lg navbar-dark  bg-dark">
 <div className="container-fluid">
 <Link className="navbar-brand" to="#"><b><i>Cheers Cafe</i></b></Link>
   <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
     <span className="navbar-toggler-icon"></span>
   </button> 
   
 
         <button className="navbar-toggler  collapsed bg-gradient" type="button" data-toggle="collapse"
             data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
             aria-label="Toggle navigation">
             <span className="navbar-toggler-icon fa icon-expand fa-bars"></span>
             <span className="navbar-toggler-icon fa icon-close fa-times"></span>
         </button>

   <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
   <ul className="navbar-nav mx-lg-auto" id="nav1">
   
                  <li className="nav-item active " >
                      <Link className="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
                  </li>

     
                 <li className="nav-item @@about__active ">
                     <Link className="nav-link" to="/About">About</Link>
                 </li>
                 <li className="nav-item @@services__active">
                    <Link className="nav-link" to="/Coffes">Our coffees</Link>
                 </li>
                 <li className="nav-item @@contact__active">
                   <Link className="nav-link" to="/Serviceandproducts">Serviceandproducts</Link>
                 </li> 
                   <li className="nav-item @@contact__active">
                   <Link className="nav-link" to="/Contact">Contact</Link>
                 </li> 
                
                 <li className="nav-item @@contact__active">
                   <Link className="nav-link" to="/Galleryandblogs">Galleryandblogs</Link>
                 </li> 
                 
                 </ul>
                 
                 <form className="d-flex">
       <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
       <button className="btn btn-outline-danger" type="submit">Search</button>
     </form>
     {/* <!-- toggle switch for light and dark theme --> */}
     <div className="mobile-position">
             <nav className="navigation">
                 <div className="theme-switch-wrapper">
                     <label className="theme-switch" for="checkbox">
                         <input type="checkbox" id="checkbox"/>
                         <div className="mode-container">
                             <i className="gg-sun"></i>
                             <i className="gg-moon"></i>
                         </div>
                     </label>
                 </div>
             </nav>
         </div>
         {/* <!-- //toggle switch for light and dark theme --> */}


   </div>
 </div>
</nav>
</header>
 </>
  )
}

