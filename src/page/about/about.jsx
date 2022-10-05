import React from 'react'
import { Link } from 'react-router-dom'
export default function About() {
  return (
    <>
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
    </>

  )
}
