import React from 'react'
import one from "../Image/reviews-icon-1.png"
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
                                <h2>Over 1200+ Satisfied Clients and Growing</h2>
                            </div>
                            <div className="review-title-ref mt40">
                                <h4>Read More Reviews</h4>
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
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                                Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                                unknown printer took a galley of type and scrambled it to make a type specimen
                                                book.</p>
                                        </div>
                                        <div className="client-thumbs mt30">
                                            <div className="media v-center upset">
                                                <div className="user-image bdr-radius"><img src="images/user-thumb/girl.jpg"
                                                    alt="girl" className="img-fluid rounded-circle" /></div>
                                                <div className="media-body user-info v-center">
                                                    <h5>vishnu tiwari</h5>
                                                    <p>Founder at Itawa Real eState</p>
                                                    <i className="fas fa-quote-right posiqut"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="testimonial-card">
                                        <div className="tt-text">
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                                Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                                unknown printer took a galley of type and scrambled it to make a type specimen
                                                book.</p>
                                        </div>
                                        <div className="client-thumbs mt30">
                                            <div className="media v-center upset">
                                                <div className="user-image bdr-radius"><img src="images/user-thumb/girl.jpg"
                                                    alt="girl" className="img-fluid rounded-circle" /></div>
                                                <div className="media-body user-info v-center">
                                                    <h5>vishal mishra</h5>
                                                    <p>Founder at Itawa Real eState</p>
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