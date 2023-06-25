import React from 'react'
import { Link } from 'react-router-dom';

import Gallery from '../../components/Gallery/Gallery';

 function Home() {
  return (
    <>
<div className="container-fluid" >

<img src="assets/images/cafe1.jpg" alt="" width="100%" height="100%"/>
   
{/* !-- /main-slider --> */}
<section className="w3l-servicesblock py-5" id="who">
    <div className="container py-lg-5 py-md-4 py-2">
        <div className="row">
            <div className="col-lg-4 about-right-faq align-self">
                <span className="title-small mb-2">Best for you</span>
                <h3 className="title-big mx-0"> Who we are.</h3>
                <p className="mt-lg-4 mt-3">We make the delicious coffee for the coffee lovers. We are a team of dedicated
                    coffee fans who celebrate exceptional coffee brands and roasters. Lorem ipsum feugiat.</p>
                <a className="btn btn-style btn-primary mt-lg-5 mt-4" href="about.html"> Learn More</a>
            </div>
            <div className="col-lg-8">
                <div className="row">
                    <div className="col-md-4 col-6 left-wthree-img mt-lg-0 mt-5">
                        <img src="assets/images/a1.jpg" alt="" className="img-fluid radius-image"/>
                    </div>
                    <div className="col-md-4 col-6 left-wthree-img mt-lg-0 mt-5">
                        <img src="assets/images/a2.jpg" alt="" className="img-fluid radius-image"/>
                    </div>
                    <div className="col-md-4 col-6 left-wthree-img mt-lg-0 mt-md-5 mt-4">
                        <img src="assets/images/a3.jpg" alt="" className="img-fluid radius-image"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section> 

{/* About us */}
<section className="w3l-about-breadcrumb">
    <div className="breadcrumb-bg breadcrumb-bg-about py-5">
        <div className="container py-lg-4 py-md-3">
            <h2 className="title">About us</h2>
        </div>
    </div>
</section>
<section className="w3l-servicesblock py-5" id="about">
    <div className="container py-lg-5 py-md-4 py-2">
        <div className="row">
            <div className="col-lg-8 about-right-faq align-self">
                <span className="title-small mb-2">Heart of India's Best</span>
                <h3 className="title-big mx-0"> What we're all about</h3>
                <p className="mt-lg-4 mt-3">We have 25+ years of experience."Our only Aim, Happy Customers. At the end of the day, it all comes down to coffee. But to get there it takes a
                    dedicated, knowledgeable team with a sustainable approach.
                    We make the delicious coffee for the coffee lovers. We are a team of dedicated
                    coffee fans who celebrate exceptional coffee brands. We provide a variety of services both to our new and regular customers.
                    All your favourites, delivered straight to you. </p>
                <a className="btn btn-style btn-primary mt-lg-5 mt-4" href="about.html"> Learn More about us</a>
            </div>
            <div className="col-lg-4 mt-lg-0 mt-5">
                <img src="assets/images/about.jpg" alt="" className="img-fluid radius-image"/>
            </div>
        </div>
    </div>
</section>
<section className="w3l-specification-6 py-5">
    {/* <!-- /specification-6--> */}
    <div className="specification-6-mian py-lg-5 py-md-4 py-2">
        <div className="container">
            <div className="align-counter-6-inf-cols row">
                <div className="counter-6-inf-left col-lg-6">
                    
                </div>
                <div className="counter-6-inf-right col-lg-6">
                    <h3 className="title-big">We provide a variety of services both to our new and regular customers.</h3>
                    <p className="mt-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis, aliquid non? Suscipit numquam
                        obcaecati necessitatibus voluptas. Molestias, sint atque aliquid magnam magni, fuga iste fugit
                        iusto maiores vero soluta voluptates?</p>
                    <a className="btn btn-style btn-primary mt-lg-5 mt-4" href="about.html"> Discover More</a>
                </div>
            </div>
        </div>
    </div>
</section>
{/* <!-- //specification-6--> */}
{/* <!-- /homeblock2--> */}
<section className="w3l-homeblock2 py-5">
    <div className="container py-lg-5 py-md-4 py-2">
        <div className="row">
            <div className="col-lg-4 col-md-6 grids-feature">
                <div className="area-box">
                    <span className="fa fa-coffee"></span>
                    <h4><a href="#feature" className="title-head">Aroma, Taste and Flavour</a></h4>
                    <p>Coffee has a distinctive aroma, which is easily recognizable. Ut blandit eu leo non. Duis sed
                        dolor amet ipsum sit et init laore leo
                        et.</p>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 grids-feature mt-md-0 mt-5">
                <div className="area-box">
                    <span className="fa fa-glass"></span>
                    <h4><a href="#feature" className="title-head">Composition of coffee</a></h4>
                    <p>Coffee contains many minerals and vitamins and no fat. Ut blandit eu leo non. Duis sed dolor amet
                        ipsum sit et init laore leo
                        et.</p>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 grids-feature mt-lg-0 mt-5">
                <div className="area-box">
                    <span className="fa fa-pagelines"></span>
                    <h4><a href="#feature" className="title-head">Physcological Effects </a></h4>
                    <p>Coffee is beneficial for your physiological condition. Ut blandit eu leo non. Duis sed dolor amet
                        ipsum sit et init laore leo
                        et.</p>
                </div>
            </div>
        </div>
    </div>
</section>
{/* about us end */}

{/* our coffees */}
<section className="w3l-about-breadcrumb">
    <div className="breadcrumb-bg breadcrumb-bg-about py-5">
        <div className="container py-lg-4 py-md-3">
            <h2 className="title">Your favourite Coffees </h2>
        </div>
    </div>
</section>
<section className="team py-5" id="team">
	<div className="container py-lg-5 py-md-4 py-2">
		<ul className="nav nav-pills" id="pills-tab1" role="tablist">
			<li className="nav-item">
				<a className="nav-link active" id="pills-team1-tab" data-toggle="pill" href="#pills-team1" role="tab" aria-controls="pills-team1" aria-selected="true"><img src="assets/images/1.png" className="img-fluid" alt="" /></a>
			</li>
			<li className="nav-item">
				<a className="nav-link" id="pills-team2-tab" data-toggle="pill" href="#pills-team2" role="tab" aria-controls="pills-team2" aria-selected="false"><img src="assets/images/2.png" className="img-fluid" alt="" /></a>
			</li>
			<li className="nav-item">
				<a className="nav-link" id="pills-team3-tab" data-toggle="pill" href="#pills-team3" role="tab" aria-controls="pills-team3" aria-selected="false"><img src="assets/images/3.png" className="img-fluid" alt="" /></a>
			</li>
			<li className="nav-item">
				<a className="nav-link" id="pills-team4-tab" data-toggle="pill" href="#pills-team4" role="tab" aria-controls="pills-team4" aria-selected="false"><img src="assets/images/4.png" className="img-fluid" alt="" /></a>
			</li>
			<li className="nav-item">
				<a className="nav-link" id="pills-team5-tab" data-toggle="pill" href="#pills-team1" role="tab" aria-controls="pills-team1" aria-selected="true"><img src="assets/images/1.png" className="img-fluid" alt="" /></a>
			</li>
			<li className="nav-item">
				<a className="nav-link" id="pills-team6-tab" data-toggle="pill" href="#pills-team2" role="tab" aria-controls="pills-team2" aria-selected="false"><img src="assets/images/2.png" className="img-fluid" alt="" /></a>
			</li>
			<li className="nav-item">
				<a className="nav-link" id="pills-team7-tab" data-toggle="pill" href="#pills-team3" role="tab" aria-controls="pills-team3" aria-selected="false"><img src="assets/images/3.png" className="img-fluid" alt="" /></a>
			</li>
			<li className="nav-item">
				<a className="nav-link" id="pills-team8-tab" data-toggle="pill" href="#pills-team4" role="tab" aria-controls="pills-team4" aria-selected="false"><img src="assets/images/4.png" className="img-fluid" alt="" /></a>
			</li>
		</ul>
		<div className="tab-content" id="pills-tabContent1">
			<div className="tab-pane fade show active" id="pills-team1" role="tabpanel" aria-labelledby="pills-team1-tab">
				<div className="team-grids row">
					<div className="col-lg-6">
						<img src="assets/images/1.png" className="img-fluid" alt="" />
					</div>
					<div className="col-lg-6 align-self mt-lg-0 mt-md-5 mt-4">
						<h4>Espresso <span>Short & Intense - 300Ruppes</span></h4>
						<p className="pt-3">Espresso is a coffee-brewing method of Italian origin, in which a small amount of nearly boiling water is forced under 9–10 bars of pressure through finely-ground coffee beans. </p>
                        <Link to="/Coffes" className="btn btn-style btn-primary mt-md-5 mt-4">Read More</Link>
					</div>
				</div>
			</div>
			<div className="tab-pane fade" id="pills-team2" role="tabpanel" aria-labelledby="pills-team2-tab">
				<div className="team-grids row">
					<div className="col-lg-6">
						<img src="assets/images/2.png" className="img-fluid" alt="" />
					</div>
					<div className="col-lg-6 align-self mt-lg-0 mt-md-5 mt-4">
						<h4>Americano <span> Simple and smooth - $17.50</span></h4>
						<p className="pt-3">Donec malesuada ex sit amet pretium sid ornare. Nulla congue scelerisque tellus, utpretium. Mauris suscipit
						nisi ut ipsum egestas, et velit convallis. Phasellus rhoncus tempus. </p>
                        <a href="#buy" className="btn btn-style btn-primary mt-md-5 mt-4">Buy Now</a>
					</div>
				</div>
			</div>
			<div className="tab-pane fade" id="pills-team3" role="tabpanel" aria-labelledby="pills-team3-tab">
				<div className="team-grids row">
					<div className="col-lg-6">
						<img src="assets/images/3.png" className="img-fluid" alt="" />
					</div>
					<div className="col-lg-6 align-self mt-lg-0 mt-md-5 mt-4">
						<h4>Latte
                            <span>Mild & Milky - $11.90</span></h4>
						<p className="pt-3">Donec malesuada ex sit amet pretium sid ornare. Nulla congue scelerisque tellus, utpretium. Mauris suscipit
						nisi ut ipsum egestas, et velit convallis. Phasellus rhoncus tempus. </p>
                        <a href="#buy" className="btn btn-style btn-primary mt-md-5 mt-4">Buy Now</a>
					</div>
				</div>
			</div>
			<div className="tab-pane fade" id="pills-team4" role="tabpanel" aria-labelledby="pills-team4-tab">
				<div className="team-grids row">
					<div className="col-lg-6">
						<img src="assets/images/4.png" className="img-fluid" alt="" />
					</div>
					<div className="col-lg-6 align-self mt-lg-0 mt-md-5 mt-4">
						<h4>Cappuccino<span>Famously frothy - $9.00</span></h4>
						<p className="pt-3">Donec malesuada ex sit amet pretium sid ornare. Nulla congue scelerisque tellus, utpretium. Mauris suscipit
						nisi ut ipsum egestas, et velit convallis. Phasellus rhoncus tempus. </p>
                        <a href="#buy" className="btn btn-style btn-primary mt-md-5 mt-4">Buy Now</a>
					</div>
				</div>
			</div>

            
			<div className="tab-pane fade show" id="pills-team5" role="tabpanel" aria-labelledby="pills-team1-tab">
				<div className="team-grids row">
					<div className="col-lg-6">
						<img src="assets/images/1.png" className="img-fluid" alt="" />
					</div>
					<div className="col-lg-6 align-self mt-lg-0 mt-md-5 mt-4">
						<h4>Cortado
                            <span>Small & Luxurious - $15.00</span></h4>
						<p className="pt-3">Donec malesuada ex sit amet pretium sid ornare. Nulla congue scelerisque tellus, utpretium. Mauris suscipit
						nisi ut ipsum egestas, et velit convallis. Phasellus rhoncus tempus. </p>
                        <a href="#buy" className="btn btn-style btn-primary mt-md-5 mt-4">Buy Now</a>
					</div>
				</div>
			</div>
			<div className="tab-pane fade" id="pills-team2" role="tabpanel" aria-labelledby="pills-team6-tab">
				<div className="team-grids row">
					<div className="col-lg-6">
						<img src="assets/images/2.png" className="img-fluid" alt="" />
					</div>
					<div className="col-lg-6 align-self mt-lg-0 mt-md-5 mt-4">
						<h4>Flat White
                            <span>Rich & Velvety - $11.99</span></h4>
						<p className="pt-3">Donec malesuada ex sit amet pretium sid ornare. Nulla congue scelerisque tellus, utpretium. Mauris suscipit
						nisi ut ipsum egestas, et velit convallis. Phasellus rhoncus tempus. </p>
                        <a href="#buy" className="btn btn-style btn-primary mt-md-5 mt-4">Buy Now</a>
					</div>
				</div>
			</div>
			<div className="tab-pane fade" id="pills-team3" role="tabpanel" aria-labelledby="pills-team7-tab">
				<div className="team-grids row">
					<div className="col-lg-6">
						<img src="assets/images/3.png" className="img-fluid" alt="" />
					</div>
					<div className="col-lg-6 align-self mt-lg-0 mt-md-5 mt-4">
						<h4>Espresso <span>Short & Intense - $19.50</span></h4>
						<p className="pt-3">Donec malesuada ex sit amet pretium sid ornare. Nulla congue scelerisque tellus, utpretium. Mauris suscipit
						nisi ut ipsum egestas, et velit convallis. Phasellus rhoncus tempus. </p>
                        <a href="#buy" className="btn btn-style btn-primary mt-md-5 mt-4">Buy Now</a>
					</div>
				</div>
			</div>
			<div className="tab-pane fade" id="pills-team4" role="tabpanel" aria-labelledby="pills-team8-tab">
				<div className="team-grids row">
					<div className="col-lg-6">
						<img src="assets/images/4.png" className="img-fluid" alt="" />
					</div>
					<div className="col-lg-6 align-self mt-lg-0 mt-md-5 mt-4">
						<h4>Latte
                            <span>Mild & Milky - $08.50</span></h4>
						<p className="pt-3">Donec malesuada ex sit amet pretium sid ornare. Nulla congue scelerisque tellus, utpretium. Mauris suscipit
						nisi ut ipsum egestas, et velit convallis. Phasellus rhoncus tempus. </p>
                        <Link to="/Coffes" className="btn btn-style btn-primary mt-md-5 mt-4">Read more</Link>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
{/* <!-- //tabs team --> */}
<div class="w3l-text py-5">
    <div class="container py-lg-5 py-4">
        <div class="row text-inner">
            <div class="col-lg-8 pr-lg-5 align-self">
                <h3 class="title-big mb-4">Discover the Taste of Real Coffee</h3>
                <p>We make the delicious coffee for the coffee lovers. We are a team of dedicated coffee fans who
                    celebrate
                    exceptional coffee brands and roasters.</p>
                <a class="btn btn-style btn-primary mt-sm-5 mt-4 mr-lg-3 mr-1" href="#contact
                "> Contact Us</a>
                
             
            </div>
            <div class="col-lg-4 mt-lg-0 mt-4">
                <img src="assets/images/3.png" class="img-fluid" alt=""/>
            </div>
        </div>
    </div>
</div>
<section class="w3l-specification-6 py-5">
    {/* <!-- /specification-6--> */}
    <div class="specification-6-mian py-lg-5 py-md-4">
        <div class="container">
            <div class="align-counter-6-inf-cols row">
                <div class="counter-6-inf-right1 col-lg-6">
                    <h3 class="title-big">All your favourites, delivered straight to you</h3>
                    <p class="mt-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis, aliquid non?
                        Suscipit numquam
                        obcaecati necessitatibus voluptas. Molestias, sint atque aliquid magnam magni, fuga iste fugit
                        iusto maiores vero soluta voluptates?</p>
                    <a class="btn btn-style btn-primary mt-sm-5 mt-4" href="#order"> Start your Order</a>
                </div>
                <div class="counter-6-inf-left1 col-lg-6">

                </div>
            </div>
        </div>
    </div>
</section>

{/* coffees end */}



<section className="w3l-features-8" id="products">
    {/* <!-- /features --> */}
    <div className="features py-5">
        <div className="container py-lg-5 py-md-4 py-2">
            <h5 className="title-small text-center">Our Services</h5>
            <h3 className="title-big text-center mb-md-5 mb-4">Our Products</h3>
            <div className="fea-gd-vv text-center row">
                <div className="float-top col-lg-4 col-md-6">
                    <a href="#url"><img src="assets/images/1.jpg" className="img-responsive" alt=""/></a>
                    <div className="float-lt feature-gd">
                        <h3><a href="#url">Espresso Americano</a> </h3>
                        <p> Consectetur elit, sed do eiusmod tempor sed et dolor init</p>
                    </div>
                </div>
                <div className="float-top col-lg-4 col-md-6 mt-md-0 mt-5">
                    <a href="#url"><img src="assets/images/2.jpg" className="img-responsive" alt=""/></a>
                    <div className="float-lt feature-gd">
                        <h3><a href="#url">Cappuccino coffee</a> </h3>
                        <p> Consectetur elit, sed do eiusmod tempor sed et dolor init</p>
                    </div>
                </div>
                <div className="float-top col-lg-4 col-md-6 mt-lg-0 mt-5">
                    <a href="#url"><img src="assets/images/3.jpg" className="img-responsive" alt=""/></a>
                    <div className="float-lt feature-gd">
                        <h3><a href="#url">Cold brew coffee</a> </h3>
                        <p> Consectetur elit, sed do eiusmod tempor sed et dolor init</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- //features --> */}
</section>
 {/* <!-- /homeblock2-->  */}
<section className="w3l-homeblock2 py-5" id="services">
    <div className="container py-lg-5 py-md-4">
        <div className="grids-area-hny main-cont-wthree-fea row">
            <div className="col-lg-5 align-self">
                <span className="title-small">Blend Coffee</span>
                <h3 className="title-big mx-0"> Our Services.</h3>
                <p className="mt-3">We make the delicious coffee for the coffee lovers. We are a team of dedicated
                    coffee fans who celebrate exceptional coffee brands and roasters. Lorem ipsum viverra feugiat.
                    Pellen tesque libero ut justo, in ligula. Semper at.</p>
                <p className="mt-3">We make the delicious coffee for the coffee lovers. We are a team of dedicated
                    coffee fans who celebrate exceptional coffee brands and roasters, ipsum dolor.</p>
                <a className="btn btn-style btn-primary mt-sm-5 mt-4" href="services.html"> Read More</a>
            </div>
            <div className="col-lg-7 pl-lg-5 mt-lg-0 mt-5">
                <div className="row">
                    <div className="col-sm-6 grids-feature">
                        <div className="area-box">
                            <span className="fa fa-coffee"></span>
                            <h4><a href="#feature" className="title-head">Types of Coffee</a></h4>
                            <p>Vivamus a ligula quam. Ut blandit eu leo non. Duis sed dolor amet ipsum sit et init laore leo et.</p>
                        </div>
                    </div>
                    <div className="col-sm-6 grids-feature mt-sm-0 mt-5">
                        <div className="area-box">
                            <span className="fa fa-glass"></span>
                            <h4><a href="#feature" className="title-head">Bean Varieties</a></h4>
                            <p>Vivamus a ligula quam. Ut blandit eu leo non. Duis sed dolor amet ipsum sit et init laore leo et.</p>
                        </div>
                    </div>
                    <div className="col-sm-6 grids-feature mt-5 pt-lg-2">
                        <div className="area-box">
                            <span className="fa fa-pagelines"></span>
                            <h4><a href="#feature" className="title-head">Coffee & Pastry</a></h4>
                            <p>Vivamus a ligula quam. Ut blandit eu leo non. Duis sed dolor amet ipsum sit et init laore leo et.</p>
                        </div>
                    </div>
                    <div className="col-sm-6 grids-feature mt-5 pt-lg-2">
                        <div className="area-box">
                            <span className="fa fa-envira"></span>
                            <h4><a href="#feature" className="title-head">Coffe to go</a></h4>
                            <p>Vivamus a ligula quam. Ut blandit eu leo non. Duis sed dolor amet ipsum sit et init laore leo et.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
{/* <!-- //homeblock2--> */}
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

{/* contact */}
<section class="w3l-about-breadcrumb">
    <div class="breadcrumb-bg breadcrumb-bg-about py-5">
        <div class="container py-lg-4 py-md-3">
            <h2 class="title">Contact us</h2>
        </div>
    </div>
</section>
<div className="w3l-contact-info py-5" id="contact">
    <div className="container py-lg-5 py-md-4">
        <div className="align-self mt-lg-0 mt-md-5 mt-4">
            <div className="contact-infos">
                <div className="single-contact-infos">
                    <div className="icon-box"> <span className="fa fa-map-marker"></span></div>
                    <div className="text-box">
                        <h3 className="mb-3">Address info</h3>
                        <p>Arihant park,surendranagar,cheers cafe,India.</p>
                    </div>
                </div>
                <div className="single-contact-infos">
                    <div className="icon-box"> <span className="fa fa-clock-o"></span></div>
                    <div className="text-box">
                        <h3 className="mb-3">Opening hours</h3>
                        <p className=""> Monday – Friday : 9am - 6pm</p>
                        <p className=""> Saturday : 10am - 4pm</p>
                    </div>
                </div>
                <div className="single-contact-infos">
                    <div className="icon-box"> <span className="fa fa-envelope"></span></div>
                    <div className="text-box">
                        <h3 className="mb-3">Contact info</h3>
                        <p className=""><a href="tel:+1(21) 234 4567">+1(91) 7990480799</a></p>
                        <p className=""> <a href="mailto:info@support.com">moxit84@gmail.com</a></p>
                    </div>
                </div>
            </div>
        </div>
        <div className="row mt-5">
            <div className="col-lg-6 map">
                <iframe
                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2145.788744429195!2d71.63617173583461!3d22.735121577041873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959411a11ccd85b%3A0x9d81d02f759a8b07!2sSurendranagar%20Gate!5e0!3m2!1sen!2sin!4v1663496644738!5m2!1sen!2sin" 
                    frameborder="0" allowfullscreen=""></iframe>
            </div>
            <div className="col-lg-6 form-inner-cont mt-lg-0 mt-sm-5 mt-4">
                <form action="https://sendmail.w3layouts.com/submitForm" method="post" className="signin-form">
                    <div className="form-input">
                        <input type="text" name="w3lName" id="w3lName" placeholder="Your name"/>
                    </div>
                    <div className="form-input">
                        <input type="email" name="w3lSender" id="w3lSender" placeholder="Your email address"
                            required=""/>
                    </div>
                    <div className="form-input">
                        <textarea name="w3lMessage" id="w3lMessage" placeholder="Your message" required=""></textarea>
                    </div>
                    <div className="text-right">
                        <button type="submit" className="btn btn-style btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
  {/* contact end */}
   {/* <!-- blog --> */}
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
{/* cointainer end */}
</div>
    </>
  )
}
export default Home;