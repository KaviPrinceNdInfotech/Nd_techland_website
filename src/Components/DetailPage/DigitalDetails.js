import React from 'react'
import image3 from "../Image/What-is-Digital-Marketing.png"
import image4 from "../Image/images (6).jpg"



function DigitalDetails() {
    return (
        <>
            <section className="blog-page pad-tb " >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="pr--100">


                                <div className="isotope_item vrbloglist">
                                    <div className="item-image">
                                        <a href="#"><img src={image3} alt="blog" className="img-fluid" /> </a>
                                        {/* <span className="category-blog"><a href="#">iOs</a> <a href="#">Android</a></span> */}
                                    </div>
                                    <div className="item-info blog-info">

                                        <h4><a href="#">
                                            Digital Marketing & Web SEO ,Internet Marketing</a></h4>
                                        <p>
                                            Our services are designed to be flexible and scalable, so no matter the size or industry of your business, we can create a digital marketing strategy that works for you. We're committed to delivering results, and our team of experts is always up to date with the latest digital marketing trends and best practices.
                                            We understand that investing in digital marketing services can be a significant investment for any business. That's why we're committed to providing exceptional service at an affordable price. We'll work with you to create a custom plan that fits your budget and delivers the results you need to succeed.

                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 m-mt30">
                            <div className="sidebar">

                                <div className="offer-image">
                                    <img src={image4} alt="offer" className="img-fluid" />
                                </div>




                                <div className="recent-post widgets mt60">
                                    <h3 className="mb30">Most Used Tags</h3>
                                    <div className="tabs">
                                        <a href="#">webdesign</a>
                                        <a href="#">design </a>
                                        <a href="#">graphicdesign </a>
                                        <a href="#">website </a>
                                        <a href="#">marketing </a>
                                        <a href="#">branding </a>
                                        <a href="#">webdevelopment </a>
                                        <a href="#">webdesigner </a>
                                        <a href="#">graphicdesign </a>
                                        <a href="#">website </a>
                                        <a href="#">marketing </a>
                                        <a href="#">branding </a>
                                    </div>
                                </div>



                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section className="portfolio-page pb-tab ">
                <div className="container border-bottom">

                    <div className="row mt60 ">
                        <div className="col-lg-12 col-sm-12 wptbb">
                            <div className="pbwide shadow bg-gradient1">
                                <div className="portfolio-item-info-tt">
                                    <div className="logowide mb20">
                                        <img
                                            src="images/client/customer-logo-5.png"
                                            alt="logo"
                                            className="img-fluid"
                                        />
                                    </div>
                                    <div className="widebloktag">
                                        <span>SEO</span> <span>PPC</span> <span>SMO</span>{" "}
                                    </div>
                                    <h3 className="mt30 mb30">
                                        Digital Marketing  &amp; Web SEO ,Internet Marketing
                                    </h3>
                                    <ul className="info-list-ul">
                                        <li>Product Strategy</li>
                                        <li>Product UI/UX Design</li>
                                        <li>Branding Design</li>
                                        <li>Design System</li>
                                    </ul>

                                </div>
                                <div className="portfolio-wide-image">
                                    <div className="img-wide-blocktt tilt-outer">
                                        <div
                                            className="innerwidedevice tilt-inner"
                                            data-tilt=""
                                            data-tilt-max={4}
                                            data-tilt-speed={1000}
                                            data-tilt-perspective={2000}
                                        >
                                            <div className="desktopblock shadow1">
                                                <img
                                                    src="images/portfolio/portfolio-wide-1.jpg"
                                                    alt="img"
                                                    className="img-fluid"
                                                />{" "}
                                            </div>
                                            <div className="mobileblock shadow1">
                                                <img
                                                    src="images/portfolio/portfolio-wide-1a.jpg"
                                                    alt="img"
                                                    className="img-fluid"
                                                />{" "}
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

export default DigitalDetails
