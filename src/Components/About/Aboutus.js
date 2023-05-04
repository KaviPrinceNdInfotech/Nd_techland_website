import React from 'react'
import { Link } from 'react-router-dom'
import about from '../Image/company-about.png'

function Aboutus() {
    return (
        <>
            <section className="breadcrumb-area banner-1" data-background="images/banner/9.jpg">
                <div className="text-block">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 v-center">
                                <div className="bread-inner">
                                    <div className="bread-menu">
                                        <ul>
                                            <li><Link to="/">Home</Link></li>
                                            <li><a href="#">About Us</a></li>
                                        </ul>
                                    </div>
                                    <div className="bread-title">
                                        <h2>About Company</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-agency pad-tb block-1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 v-center">
                            <div className="about-image">
                                <img src={about} alt="about us" className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="common-heading text-l ">
                                <span>About Us</span>
                                <h2>About N D Techland</h2>
                                <p>N D Techland(sister concern of N D Infotech) is appraised as one of the top web development agencies in India by different industry magazines and survey destinations. We have a correct mix of grant winning designers, master web designers which make us a special one-stop answer for many our customers, spread across 80+ nations. we're obsessed on quality. We depend on our portfolio to work together and consistently guarantee that every one of our web or mobile deliverable is remarkable and world class. </p>
                                <p>As a best web development organization in India, we have devoted group of expert developers and designers, making amazing and creative websites. We utilize ultra clean and bold design style to give standard based markup code to your website that brag excellent Google result positions, help increment changes. As Web Development company, we accept that a decent online presence begins with an incredible site. Your business site isn't only a virtual portrayal of your organization profile. But it reflects your business targets and objectives.</p>
                            </div>
                            <div className="row in-stats small about-statistics">
                                <div className="col-lg-4 col-sm-4">
                                    <div className="statistics">
                                        <div className="statnumb counter-number">
                                            <span className="counter">450</span>
                                            <p>Happy Clients</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-4">
                                    <div className="statistics">
                                        <div className="statnumb">
                                            <span className="counter">95</span><span>k</span>
                                            <p>Hours Worked</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-4">
                                    <div className="statistics mb0">
                                        <div className="statnumb counter-number">
                                            <span className="counter">850</span>
                                            <p>Projects Done</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="why-choose pad-tb">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="common-heading">
                                <span>We Are Awesome</span>
                                <h2 className="mb30">Why Choose Us</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row upset">
                        <div className="col-lg-3 col-sm-6 mt30">
                            <div className="s-block up-hor">
                                <div className="s-card-icon"><img src="images/icons/research.svg" alt="service" className="img-fluid" /></div>
                                <h4>Reasearch and Analysis</h4>
                                <p>Our research and developmment team always up to find what's best for a website.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 mt30">
                            <div className="s-block up-hor">
                                <div className="s-card-icon"><img src="images/icons/chat.svg" alt="service" className="img-fluid" /></div>
                                <h4>Negotiation and power</h4>
                                <p>Negotiation is not a priority if you got powerfull and best quality products.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 mt30">
                            <div className="s-block up-hor">
                                <div className="s-card-icon"><img src="images/icons/monitor.svg" alt="service" className="img-fluid" /></div>
                                <h4>Creative and innovative solutions</h4>
                                <p>We always provide most innovative and creative ideas to our clients.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 mt30">
                            <div className="s-block up-hor">
                                <div className="s-card-icon"><img src="images/icons/trasparency.svg" alt="service" className="img-fluid" /></div>
                                <h4>Trasparency and ease of work</h4>
                                <p>From start to end of the project, everything is transparent and every step is in knowledge of our clients.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Aboutus