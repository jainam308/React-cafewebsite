import React from 'react'
import { Link } from 'react-router-dom'

export default function Serviceandproducts(){
  return (
    <>
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
                <a className="btn btn-style btn-primary mt-sm-5 mt-4" href="Coffes.html"> Read More</a>
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
    </>
  )
}
