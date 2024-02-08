import React from 'react'
import poster from "../Image/bannerposter.png"

function TopRatedApp() {
    return (
        <>
            <section className="hero-card-web mobile-app-">
                <div className="hero-main-rp container-fluid">
                    <div className="row">
                        <div className="col-lg-6 v-center">
                            <div className="hero-heading-sec2 niwax" data-rellax-speed="3">
                                <h1 className="wow fadeIn" data-wow-delay="0.2s">Top Rated Mobile App Development Company</h1>
                                <p className="wow fadeIn" data-wow-delay="0.4s">
                                    N D Techland is one of the most creative and experienced mobile app development companies in India, we provide you with the best-in-className, industry-focused functional Mobile apps.

                                </p>
                                <div className="content-sec  d-flex mt30 v-center text-w wow fadeIn" data-wow-delay="0.6s">
                                    <div className="mr25"><a href="/contactus" className="btn-main bg-btn4 lnk">GET STARTED<i
                                        className="fas fa-chevron-right fa-icon"></i><span className="circle"></span></a></div>
                                  
                                </div>
                               
                            </div>
                        </div>
                        <div className="col-lg-6 v-center">
                            <div className="app-hero-bnr wow fadeIn" data-wow-delay="0.4s"> <img
                                src={poster} alt="ndtechland mobile app development company"
                                className="img-fluid " style={{ width: "1000px" }} /> </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="weworkfor pt20 pb20 dark-bg2">
                <div className="container">
                    <div className="logo-weworkfor owl-carousel">
                        <div className="items"><img src="https://images.unsplash.com/photo-1681239063386-fc4a373c927b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2NXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="niwax html template" className="img100w" />
                        </div>
                        <div className="items"><img src="https://images.unsplash.com/photo-1681239063386-fc4a373c927b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2NXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="niwax html template" className="img100w" />
                        </div>
                        <div className="items"><img src="https://images.unsplash.com/photo-1681239063386-fc4a373c927b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2NXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="niwax html template" className="img100w" />
                        </div>
                        <div className="items"><img src="https://images.unsplash.com/photo-1681239063386-fc4a373c927b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2NXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="niwax html template" className="img100w" />
                        </div>
                        <div className="items"><img src="https://images.unsplash.com/photo-1681239063386-fc4a373c927b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2NXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="niwax html template" className="img100w" />
                        </div>
                        <div className="items"><img src="https://images.unsplash.com/photo-1681239063386-fc4a373c927b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2NXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="niwax html template" className="img100w" />
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default TopRatedApp