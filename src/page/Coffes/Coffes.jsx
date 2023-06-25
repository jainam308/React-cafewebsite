import React from 'react'
import { Link } from 'react-router-dom';
import Coffescomponent from '../../components/Coffescomponent/Coffescomponent';
;
export default function Coffes() {
  return (
    <> 
  <section className="team py-5 bg-dark" id="team">
	<div className="container py-lg-5 py-md-4 py-2">
		<ul className="nav nav-pills" id="pills-tab1" role="tablist">
			 <Coffescomponent  class="nav-link" id="pills-team1-tab" href="#pills-team1"  aria="true" imgname="assets/images/1.png" />
			<Coffescomponent   class="nav-link"id="pills-team2-tab" href="#pills-team2" aria="true" imgname="assets/images/2.png" />
			<Coffescomponent  class="nav-link"id="pills-team3-tab" href="#pills-team3"   aria="true" imgname="assets/images/3.png" />
			 <Coffescomponent class="nav-link"id="pills-team4-tab" href="#pills-team4"   aria="true" imgname="assets/images/4.png" />
			 <Coffescomponent  class="nav-link "id="pills-team1-tab" href="#pills-team1"  aria="false" imgname="assets/images/1.png" />
			<Coffescomponent  class="nav-link "id="pills-team2-tab" href="#pills-team2"   aria="false"imgname="assets/images/2.png" />
			<Coffescomponent  class="nav-link "id="pills-team3-tab" href="#pills-team3"   aria="false"imgname="assets/images/3.png" />
			<Coffescomponent  class="nav-link "id="pills-team4-tab" href="#pills-team4"   aria="false"imgname="assets/images/4.png" />   
	</ul>
    <div className="tab-content" id="pills-tabContent1">
			<div className="tab-pane fade show active" id="pills-team1" role="tabpanel" aria-labelledby="pills-team1-tab">
				<div className="team-grids row">
					<div className="col-lg-6">
						<img src="assets/images/1.png" className="img-fluid" alt="" />
					</div>
					<div className="col-lg-6 align-self mt-lg-0 mt-md-5 mt-4">
						<h4>Espresso <span>Short & Intense - 300Rupees</span></h4>
						<p className="pt-3">Espresso is a coffee-brewing method of Italian origin, in which a small amount of nearly boiling water is forced under 9–10 bars of pressure through finely-ground coffee beans. </p>
                        <a href="#buy" className="btn btn-style btn-primary mt-md-5 mt-4">Buy Now</a>
					</div>
						</div>
						</div>
			<div className="tab-pane fade show active" id="pills-team2" role="tabpanel" aria-labelledby="pills-team2-tab">
				<div className="team-grids row">
					<div className="col-lg-6">
						<img src="assets/images/2.png" className="img-fluid" alt="" />
					</div>
					<div className="col-lg-6 align-self mt-lg-0 mt-md-5 mt-4">
						<h4>Americano <span> Simple and smooth - 350Rupee</span></h4>
						<p className="pt-3">Donec malesuada ex sit amet pretium sid ornare. Nulla congue scelerisque tellus, utpretium. Mauris suscipit
						nisi ut ipsum egestas, et velit convallis. Phasellus rhoncus tempus. </p>
                        <a href="#buy" className="btn btn-style btn-primary mt-md-5 mt-4">Buy Now</a>
					</div>
					</div>	
					</div>
			<div className="tab-pane fade show active" id="pills-team3" role="tabpanel" aria-labelledby="pills-team3-tab">
				<div className="team-grids row">
					<div className="col-lg-6">
						<img src="assets/images/3.png" className="img-fluid" alt="" />
					</div>
					<div className="col-lg-6 align-self mt-lg-0 mt-md-5 mt-4">
						<h4>Latte
                            <span>Mild & Milky - 500Rupee</span></h4>
						<p className="pt-3">Donec malesuada ex sit amet pretium sid ornare. Nulla congue scelerisque tellus, utpretium. Mauris suscipit
						nisi ut ipsum egestas, et velit convallis. Phasellus rhoncus tempus. </p>
                        <a href="#buy" className="btn btn-style btn-primary mt-md-5 mt-4">Buy Now</a>
					</div>
					     </div>
						       </div>
	
			<div className="tab-pane fade show active" id="pills-team4" role="tabpanel" aria-labelledby="pills-team4-tab">
				<div className="team-grids row">
					<div className="col-lg-6">
						<img src="assets/images/4.png" className="img-fluid" alt="" />
					</div>
					<div className="col-lg-6 align-self mt-lg-0 mt-md-5 mt-4">
						<h4>Cappuccino<span>Famously frothy - 150Rupee</span></h4>
						<p className="pt-3">Donec malesuada ex sit amet pretium sid ornare. Nulla congue scelerisque tellus, utpretium. Mauris suscipit
						nisi ut ipsum egestas, et velit convallis. Phasellus rhoncus tempus. </p>
                        <a href="#buy" className="btn btn-style btn-primary mt-md-5 mt-4">Buy Now</a>
					</div>	
					</div>	
					</div>   
					 </div>
					 </div>
</section>
{/* <!-- //tabs team --> */}
<div className="w3l-text py-5">
    <div className="container py-lg-5 py-4">
        <div className="row text-inner">
            <div className="col-lg-8 pr-lg-5 align-self">
                <h3 className="title-big mb-4">Discover the Taste of Real Coffee</h3>
                <p>We make the delicious coffee for the coffee lovers. We are a team of dedicated coffee fans who
                    celebrate
                    exceptional coffee brands and roasters.</p>
                <Link className="btn btn-style btn-primary mt-sm-5 mt-4 mr-lg-3 mr-1" to="/Contact"> Contact Us</Link>
            </div>
            <div className="col-lg-4 mt-lg-0 mt-4">
                <img src="assets/images/3.png" className="img-fluid" alt=""/>
            </div> </div>  </div></div>
<section className="w3l-specification-6 py-5">
    {/* <!-- /specification-6--> */}
    <div className="specification-6-mian py-lg-5 py-md-4">
        <div className="container">
            <div className="align-counter-6-inf-cols row">
                <div className="counter-6-inf-right1 col-lg-6">
                    <h3 className="title-big">All your favourites, delivered straight to you</h3>
                    <p className="mt-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis, aliquid non?
                        Suscipit numquam
                        obcaecati necessitatibus voluptas. Molestias, sint atque aliquid magnam magni, fuga iste fugit
                        iusto maiores vero soluta voluptates?</p>
                    <a className="btn btn-style btn-primary mt-sm-5 mt-4" href="#order"> Start your Order</a>
                </div>
                <div className="counter-6-inf-left1 col-lg-6">
                </div>
            </div>
        </div>
		 </div>
</section>


{/* coffees end */}

  </>
  )
}
