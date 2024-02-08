import React from 'react'
import image from "../Image/download.png"
import download5 from "../Image/download (5).jpg"
import image2 from "../Image/images (5).jpg"
import image3 from "../Image/What-is-Digital-Marketing.png"
import image4 from "../Image/images (6).jpg"
import image7 from "../Image/images (7).jpg"
import { Link } from 'react-router-dom'
// import "../css/wave.css"


function Blog() {
    return (
        <>
            <section className="hero-section hero-digital-agency-1 branding-agency video-bg-" id="home">
                <video className="full-video" data-mask="3" src="images/hero/home-digital-agency-2.mp4" autoplay="" muted=""
                    loop=""></video>
                <div className="text-block niwax" data-rellax-speed="-3">
                    <div className="container">
                        <div className="row justify-content-center text-center">
                            <div className="col-lg-9 v-center">
                                <div className="header-heading">
                                    <h1 className="wow fadeInUp text-effect-1" data-wow-delay=".2s">We Build Scalable & Smart
                                        Solution</h1>
                                    <p className="wow fadeInUp" data-wow-delay=".4s">We understand that investing in website development services can be a significant investment for any business.
                                    </p>
                                    <Link to="/contactus">
                                        <button type="button" className="btn-main bg-btn4 lnk wow fadeInUp" data-wow-delay=".6s">GET STARTED<i
                                            className="fas fa-chevron-right fa-icon"></i><span className="circle"></span></button>
                                    </Link>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

         
            <section className="blog-page pad-tb">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="pr--100">
                                <div className="isotope_item vrbloglist">
                                    <div className="item-image">
                                        <a href="#"><img src={image} alt="blog" className="img-fluid" /> </a>
                                        <span className="category-blog"><a href="#">Reactjs</a> <a href="#">php/laravel</a></span>
                                    </div>
                                    <div className="item-info blog-info">
                                        <div className="entry-blog">
                                            <span className="bypost"><a href="#"><i className="fas fa-user"></i>By Admin</a></span>
                                            <span className="posted-on">
                                                <a href="#"><i className="fas fa-clock"></i> Sep 2, 2023</a>
                                            </span>
                                            <span><a href="#"><i className="fas fa-comment-dots"></i> (23)</a></span>
                                        </div>
                                        <h4><a href="#">Website Development</a></h4>
                                        <p>At our company, we pride ourselves on providing the best website development services available. We understand that in today's digital age, having a strong online presence is essential for any business looking to succeed. That's why we have a team of experts who specialize in creating customized website designs and development solutions tailored to your unique business needs.</p>
                                    </div>
                                </div>
                                <div className="isotope_item vrbloglist">
                                    <div className="item-image">
                                        <a href="#"><img src={image2} alt="blog" className="img-fluid" /> </a>
                                        <span className="category-blog"><a href="#">iOs</a> <a href="#">Android</a><a href="#">Hybrid</a></span>
                                    </div>
                                    <div className="item-info blog-info">
                                        <div className="entry-blog">
                                            <span className="bypost"><a href="#"><i className="fas fa-user"></i> By Admin</a></span>
                                            <span className="posted-on">
                                                <a href="#"><i className="fas fa-clock"></i> Dec 12, 2023</a>
                                            </span>
                                            <span><a href="#"><i className="fas fa-comment-dots"></i> (45)</a></span>
                                        </div>
                                        <h4><a href="#"> Hybrid Mobile App Development</a></h4>
                                        <p>At our company, we are proud to provide the best mobile application development services available. We understand that in today's digital age, having a mobile app for your business is essential for reaching your target audience and staying ahead of the competition. That's why we have a team of expert mobile app developers who specialize in creating customized mobile applications tailored to your unique business needs.</p>
                                    </div>
                                </div>
                                <div className="isotope_item vrbloglist">
                                    <div className="item-image">
                                        <a href="#"><img src={image3} alt="blog" className="img-fluid" /> </a>
                                        <span className="category-blog"><a href="#">iOs</a> <a href="#">Android</a></span>
                                    </div>
                                    <div className="item-info blog-info">
                                        <div className="entry-blog">
                                            <span className="bypost"><a href="#"><i className="fas fa-user"></i> Tom Black</a></span>
                                            <span className="posted-on">
                                                <a href="#"><i className="fas fa-clock"></i> Dec, 2023</a>
                                            </span>
                                            <span><a href="#"><i className="fas fa-comment-dots"></i> (23)</a></span>
                                        </div>
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
                                    <h3 className="mb30">Recent post</h3>
                                    <div className="media">
                                        <div className="post-image bdr-radius">
                                            <a href="#"><img src={download5} alt="girl" className="img-fluid" /></a>
                                        </div>
                                        <div className="media-body post-info">
                                            <h5>Stock Market App Development - Time, Cost, Features</h5>
                                            <p>September 24, 2023</p>
                                        </div>
                                    </div>
                                    {/* <div className="media">
                                        <div className="post-image bdr-radius">
                                            <a href="#"><img src="images/blog/blog-small2.jpg" alt="girl" className="img-fluid" /></a>
                                        </div>
                                        <div className="media-body post-info">
                                            <h5><a href="#">Stock Market App Development - Time, Cost, Features</a></h5>
                                            <p>june 26, 2023</p>
                                        </div>
                                    </div>
                                    <div className="media">
                                        <div className="post-image bdr-radius">
                                            <a href="#"><img src="images/blog/blog-small.jpg" alt="girl" className="img-fluid" /></a>
                                        </div>
                                        <div className="media-body post-info">
                                            <h5><a href="#">Stock Market App Development - Time, Cost, Features</a></h5>
                                            <p>March 12, 2023</p>
                                        </div>
                                    </div> */}
                                </div>

                                <div className="recent-post widgets mt60">
                                    <h3 className="mb30">Blog Category</h3>
                                    <div className="blog-categories">
                                        <ul>
                                            <li>
                                                <a href="#">Business <span className="categories-number">(2)</span></a>
                                            </li>
                                            <li>
                                                <a href="#">Financial <span className="categories-number">(3)</span></a>
                                            </li>
                                            <li>
                                                <a href="#">Uncategorized <span className="categories-number">(4)</span></a>
                                            </li>
                                            <li>
                                                <a href="#">Web Design <span className="categories-number">(3)</span></a>
                                            </li>
                                            <li>
                                                <a href="#">WordPress <span className="categories-number">(5)</span></a>
                                            </li>
                                        </ul>
                                    </div>
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

                                <div className="offer-image mt60">
                                    <img src={image7} alt="offer" className="img-fluid" />
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Blog