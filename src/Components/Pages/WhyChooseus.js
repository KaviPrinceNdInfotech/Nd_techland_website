import React from 'react'
import { Link } from 'react-router-dom'
import poster1 from '../Image/poster1.jpg'

function WhyChooseus() {
    return (
        <>
            <section className="why-choos-lg pad-tb deep-dark">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="common-heading text-l">
                                <span>Why Choose Us</span>
                                <h2 className="mb20">Why N D Techland <span className="text-second text-bold">Ranked Top</span> Among The
                                    Leading Web & App Development Companies</h2>
                                <p>Our web & app development organization has been creating web & mobile applications for the custom business necessities of all our regarded customers. Our developer's abilities and experience and cutting edge technology will convey you with Robust Web Applications.</p>
                                <div className="itm-media-object mt40 tilt-3d">
                                    <div className="media">
                                        <div className="img-ab- base" data-tilt data-tilt-max="20" data-tilt-speed="1000"><img
                                            src="images/icons/computers.svg" alt="icon" className="layer" /></div>
                                        <div className="media-body">
                                            <h4>Streamlined Project Management</h4>
                                            <p>Streamline Project Management Processes with a Platform That Has It All. The quicker you can get your team fully operational, the simpler managing projects will turn into.</p>
                                        </div>
                                    </div>
                                    <div className="media mt40">
                                        <div className="img-ab- base" data-tilt data-tilt-max="20" data-tilt-speed="1000"><img
                                            src="images/icons/worker.svg" alt="icon" className="layer" /></div>
                                        <div className="media-body">
                                            <h4>A Dedicated Team of Experts</h4>
                                            <p>We have a dedicated team of skilled professionals who are always available to support your project needs from A to Z. These experts work closely with the clients to support them throughout their entire learinng journey.</p>
                                        </div>
                                    </div>
                                    <div className="media mt40">
                                        <div className="img-ab- base" data-tilt data-tilt-max="20" data-tilt-speed="1000"> <img
                                            src="images/icons/deal.svg" alt="icon" className="layer" /></div>
                                        <div className="media-body">
                                            <h4>Completion of Project in Given Time</h4>
                                            <p>Our experts are dedicated in each and every step of a project. From quality to timing, they keep everything in mind. That is why we always succeeded to deliver the project before promised time and we will always try keep this habit as it is.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div data-tilt data-tilt-max="5" data-tilt-speed="1000" className="single-image bg-shape-dez wow fadeIn"
                                data-wow-duration="2s"><img src={poster1} alt="image" className="img-fluid" />
                            </div>
                            <p className="text-center mt30">N D Techland always strive to come up what is best for our clients. From website design, web portals, mobile application to ecommerce websites, we only provide what is best and most profitable for your business.</p>
                            <div className="cta-card mt60 text-center">
                                <h3 className="mb20">Let's Start a <span className="text-second text-bold">New Project</span> Together
                                </h3>
                                <p>Having an idea to start an online business or need consultation to how to get your offline business on internet? Well, here we are providing free consultation and ideas. Book your space today.</p>

                                <Link to="/contactus">
                                    <button type='button' className="btn-outline lnk mt30">Request A Quote <i
                                        className="fas fa-chevron-right fa-icon"></i><span className="circle"></span>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default WhyChooseus