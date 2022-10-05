import React from 'react'
import { Link } from 'react-router-dom'

export default function Contact() {
  return (
    <>    
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
                        <p className=""><a href="tel:+1(21) 234 4567">+(91) 7990480799</a></p>
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


    </>
  )
}
