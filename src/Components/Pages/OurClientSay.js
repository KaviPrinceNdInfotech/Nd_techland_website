import React from 'react'
import one from "../Image/reviews-icon-1.png"
import testimonials from "../Image/Testimonials.jpg"
import two from "../Image/reviews-icon-2.png"
import three from "../Image/reviews-icon-3.png"

function OurClientSay() {
    return (
        <>
            <section className="testinomial-section-app bg-none pad-tb">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="common-heading text-l">
                                <span>What our clients say about ND Techland.</span>

                            </div>

                            <div className="row mt30 justify-content-center">
                                <a href="#" target="blank" className="wow fadeIn col-lg-4 col-4" data-wow-delay=".2s"><img
                                    src={one} alt="review" className="img-fluid" /></a>
                                <a href="#" target="blank" className="wow fadeIn col-lg-4 col-4" data-wow-delay=".4s"><img
                                    src={two} alt="review" className="img-fluid" /></a>
                                <a href="#" target="blank" className="wow fadeIn col-lg-4 col-4" data-wow-delay=".6s"><img
                                    src={three} alt="review" className="img-fluid" /></a>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="pl50">
                                <div className="shape shape-a1"><img src="images/shape/shape-3.svg" alt="shape" /></div>
                                <div className="testimonial-card-a tcd owl-carousel">
                                    <div className="testimonial-card">
                                        <div className="tt-text">
                                            <p>"Partnering with ND Techland Pvt. Ltd. has been a game-changer for our business. Their team's expertise in IT solutions has streamlined our processes and boosted productivity across the board. Their dedication to client satisfaction sets them apart, making them our trusted technology partner.</p>
                                        </div>
                                        <div className="client-thumbs mt30">
                                            <div className="media v-center upset">
                                                <div className="user-image bdr-radius"><img src={testimonials}
                                                    alt="girl" className="img-fluid rounded-circle" /></div>
                                                <div className="media-body user-info v-center">
                                                    <h5>Abhishek Pathak</h5>
                                                    
                                                    <i className="fas fa-quote-right posiqut"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="testimonial-card">
                                        <div className="tt-text">
                                            <p>"ND Techland Pvt. Ltd. has been instrumental in transforming our digital infrastructure. Their innovative solutions and unwavering support have significantly enhanced our operational efficiency. We're thrilled with their professionalism and commitment to excellence."</p>
                                        </div>
                                        <div className="client-thumbs mt30">
                                            <div className="media v-center upset">
                                                <div className="user-image bdr-radius"><img src={testimonials}
                                                    alt="girl" className="img-fluid rounded-circle" /></div>
                                                <div className="media-body user-info v-center">
                                                    <h5>Gaurav Kumar</h5>
                                                   
                                                    <i className="fas fa-quote-right posiqut"></i>
                                                </div>
                                            </div>
                                        </div>
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

export default OurClientSay