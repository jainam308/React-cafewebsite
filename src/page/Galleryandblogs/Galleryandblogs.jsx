import React from 'react'
import Gallery from '../../components/Gallery/Gallery'
import { Link } from 'react-router-dom'

export default function Galleryandblogs() {
  return (
    <>
{/* gallery */}
<section className="w3l-gallery" id="gallery">
    <div className="destionation-innf py-5">
        <div className="container py-lg-5 py-md-4 py-2">
            <div className="title-content">
                <h5 className="title-small text-center mb-1">Coffee gallery</h5>
                <h3 className="title-big text-center mb-md-5 mb-4">Portfolio Gallery</h3>
            </div>
            {/* <!--/coffee grids-grids--> */}
            <ul className="gallery_agile">
               
     
<Gallery imgname="assets/images/blog1.jpg" title="Perfect Cup" name="Cup of Coffee / Filtered"/>
<Gallery imgname="assets/images/blog2.jpg" title="Baked Beans" name="Cup of Coffee / Filtered"/>
<Gallery imgname="assets/images/blog3.jpg" title="Mocha" name="Filtered / Mornings"/>
<Gallery imgname="assets/images/blog4.jpg" title="Cappuccino" name="Cup of Coffee / Filtered"/>
<Gallery imgname="assets/images/blog5.jpg" title="Macchiatio" name="Cup of Coffee / Filtered"/>
<Gallery imgname="assets/images/blog6.jpg" title="Coffee Cup" name="Cup of Coffee / Filtered"/>
<Gallery imgname="assets/images/blog1.jpg" title="Perfect Cup" name="Cup of Coffee / Filtered"/>
<Gallery imgname="assets/images/blog2.jpg" title="Cappuccino" name="Aroma / Filtered"/>

                          
                            </ul>
            
            {/* <!--//coffee grids-grids--> */}
        </div>
    </div>
</section>
{/* blog start */}
<div className="row justify-content-center" id="blog">
            <div className="col-12 text-center" >
              <h1 id="blog title">Our Coffee blog</h1>
            
            </div>
           
           <div className="col-md-3 col-11 mt-4">
            <img src="assets/images/blog1.jpg" alt="" className="img-fluid"/>
            <div className="article-detail">
              <h4 className="article-title">Advantages of Coffee</h4>
            <br/>
            <p className="article-desc"> You could live longer.
     Your body may process glucose (or sugar) better. 
    You're less likely to develop heart failure.
    You are less likely to develop Parkinson's disease. 
    Your liver will thank you. 
    Your DNA will be stronger.
            </p>
           
          </div>
           </div>
           <div className="col-md-3 col-11 mt-4">
            <img src="assets/images/blog2.jpg" alt="" className="img-fluid"/>
            <div className="article-detail">
              <h4 className="article-title"></h4><i><b>Is coffee mate is coffee creamer?</b></i>
            <br/>
            <p className="article-desc">
            Coffee-mate Original is mostly made up of three ingredients: corn syrup solids, hydrogenated vegetable oil, and sodium caseinate. Sodium caseinate, a form of casein, is a milk derivative; however, this is a required ingredient in non-dairy creamers, which are considered non-dairy due to the lack of lactose.
            </p>

          </div>
           </div>
           <div className="col-md-3 col-11 mt-4">
            <img src="assets/images/blog5.jpg" alt="" className="img-fluid"/>
            <div className="article-detail">
              <h4 className="article-title">Coffee Roasts from Light to Dark</h4>
             <br/>
            <p className="article-desc">
            he degree to which coffee beans are roasted is one of the most important factors that determine the taste of the coffee in the cup. Before roasting, green coffee beans are soft, with a fresh “grassy” smell and little or no taste. 
            </p>
           
          </div>
           </div>
           </div> 
           {/* blog end */}
</>
  )
}
