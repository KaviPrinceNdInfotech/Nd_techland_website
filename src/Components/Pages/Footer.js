import React from 'react'
import logo from '../Image/logo.png'
import badge from "../Image/badges-a.png"
import badge1 from "../Image/badges-b.png"
import badge2 from '../Image/badges-c.png'
import badge3 from '../Image/badges-d.png'
function Footer() {
    return (
        <>
            <footer>
                <div className="footer-row1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="email-subs">
                                    <h3>Get New Insights Weekly</h3>
                                    <p>Get our latest article and new tech information directly in your mail.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 v-center">
                                <div className="email-subs-form">
                                    <form>
                                        <input type="email" placeholder="Email Your Address" name="emails" />
                                        <button type="submit" name="submit" className="lnk btn-main bg-btn">Subscribe <i
                                            className="fas fa-chevron-right fa-icon"></i><span className="circle"></span></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-row2">
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-lg-3 col-sm-6  ftr-brand-pp">
                                <a className="navbar-brand mt30 mb25 f-dark-logo" href="#"> <img src={logo}
                                    alt="Logo"  style={{width:"150px"}}/></a>
                                <a className="navbar-brand mt30 mb25 f-white-logo" href="#"> <img src={logo}
                                    alt="Logo"  style={{width:"150px"}}/></a>
                                <p>We make experience that are alluring, easy to utilize, and drive results for your organization. We are not your typical web development organization.</p>
                                <a href="#" className="btn-main bg-btn3 lnk mt20">Pay Online <i
                                    className="fas fa-chevron-right fa-icon"></i><span className="circle"></span></a>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <h5>Contact Us</h5>
                                <ul className="footer-address-list ftr-details">
                                    <li>
                                        <span><i className="fas fa-envelope"></i></span>
                                        <p>Email <span> <a href="mailto:info@ndtechland.com">info@ndtechland.com</a></span>
                                        </p>
                                    </li>
                                    <li>
                                        <span><i className="fas fa-phone-alt"></i></span>
                                        <p>Phone <span> <a href="tel: 0120 4354103"> 0120 4354103</a></span></p>
                                    </li>
                                    <li>
                                        <span><i className="fas fa-map-marker-alt"></i></span>
                                        <p>Address <span>

                                            C - 53, First Floor, Sector 2, Noida, Uttar Pradesh - 201301</span></p>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-2 col-sm-6">
                                <h5>Company</h5>
                                <ul className="footer-address-list link-hover">
                                    <li><a href="#">Contact</a></li>
                                    <li><a href="#">Customer's FAQ</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                    <li><a href="#">Terms and Conditions</a></li>
                                    <li><a href="#">N D infotech</a></li>
                                    <li><a href="#">N D Pest Control</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-4 col-sm-6 footer-blog-">
                                <h5>Latest Blogs</h5>
                                <div className="single-blog-">
                                    <div className="post-thumb"><a href="#"><img src="images/blog/blog-small.jpg" alt="blog" /></a>
                                    </div>
                                    <div className="content">
                                        <p className="post-meta"><span className="post-date"><i className="far fa-clock"></i>April 15,
                                            2020</span></p>
                                        <h4 className="title"><a href="blog-sngle.html">We Provide you Best &amp; Creative
                                            Consulting Service</a></h4>
                                    </div>
                                </div>
                                <div className="single-blog-">
                                    <div className="post-thumb"><a href="#"><img src="images/blog/blog-small.jpg" alt="blog" /></a>
                                    </div>
                                    <div className="content">
                                        <p className="post-meta"><span className="post-date"><i className="far fa-clock"></i>April 15,
                                            2020</span></p>
                                        <h4 className="title"><a href="#">We Provide you Best &amp; Creative
                                            Consulting Service</a></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-brands">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 v-center">
                                <h5 className="mb10">App & E-Commerce Development</h5>
                                <p>Web Portal Development, Mobile Application Development, E-Commerce Development, Digital Marketing</p>
                            </div>
                            <div className="col-lg-8 v-center">
                                <ul className="footer-badges-">
                                    <li><a href="#"><img src={badge} alt="badges" /></a></li>
                                    <li><a href="#"><img src={badge1} alt="badges" /></a></li>
                                    <li><a href="#"><img src={badge2} alt="badges" /></a></li>
                                    <li><a href="#"><img src={badge3} alt="badges" /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-row3">
                    <div className="copyright">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="footer-social-media-icons">
                                        <a href="https://in.linkedin.com/company/nd-techland" target="blank"><i className="fab fa-linkedin"></i></a>
                                        <a href="https://www.facebook.com/ndtechland/" target="blank"><i className="fab fa-facebook"></i></a>
                                        <a href="javascript:void(0)" target="blank"><i className="fab fa-twitter"></i></a>
                                        <a href="https://www.instagram.com/ndtechland/" target="blank"><i className="fab fa-instagram"></i></a>
                                        <a href="javascript:void(0)" target="blank"><i className="fab fa-youtube"></i></a>
                                     
                                    </div>
                                    <div className="footer-">
                                        <p>© 2022-2023. All Rights Reserved By  <a
                                            href="

                                        www.info@ndtechland.com" target="blank">ND Techland</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer