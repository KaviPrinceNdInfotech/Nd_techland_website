import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import download from "../Image/download (2).png"
import axios from "axios"
function ContactUs() {

    const [fname, setFname] = useState("");
    const [email, setEmail] = useState("");
    const [contactNumber, setcontactNumber] = useState("");
    const [request, setRequest] = useState("");
    const [message, setMessage] = useState("");


    const contactus = async () => {
        console.log("contactus",33333333333333)
        const Enquiery = {
            fname, email, contactNumber, request, message
        }
        const data = await axios.post("http://localhost:4000/api/contactus", Enquiery);
        if (data.status === 201) {
            setFname("");
            setEmail("");
            setcontactNumber("");
            setRequest("");
            setMessage("");
        }
    }


    return (
        <>
            {/* <section className="breadcrumb-area banner-6">
                <div className="text-block">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 v-center">
                                <div className="bread-inner">
                                    <div className="bread-menu wow fadeInUp" data-wow-delay=".2s">
                                        <ul>
                                            <li><Link to="/">Home</Link></li>
                                            <li><a href="#">Contact</a></li>
                                        </ul>
                                    </div>
                                    <div className="bread-title wow fadeInUp" data-wow-delay=".5s">
                                        <h2>Contact</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            <div>
               <img src={download} alt="img" style={{backgroundSize:"cover",width:"100vw"}}/>

            </div>

            <section className="contact-page pad-tb">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 v-center">
                            <div className="common-heading text-l">
                                <span>Contact Now</span>
                                <h2 className="mt0 mb0">Have Question? Write a Message</h2>
                                <p className="mb60 mt20">We will catch you as early as we receive the message</p>
                            </div>
                            <div className="form-block">
                                <form id="contactForm" data-bs-toggle="validator" className="shake">
                                    <div className="row">
                                        <div className="form-group col-sm-6">
                                            <input type="text" id="name" placeholder="Enter name" required
                                                value={fname} onChange={(e) => setFname(e.target.value)}
                                                data-error="Please fill Out" />
                                            <div className="help-block with-errors"></div>
                                        </div>
                                        <div className="form-group col-sm-6">
                                            <input type="email" id="email" placeholder="Enter email" required
                                                value={email} onChange={(e) => setEmail(e.target.value)}
                                            />
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-sm-6">
                                            <input type="text" id="mobile" placeholder="Enter mobile" required
                                                value={contactNumber} onChange={(e) => setcontactNumber(e.target.value)}
                                                data-error="Please fill Out" />
                                            <div className="help-block with-errors"></div>
                                        </div>
                                        <div className="form-group col-sm-6">
                                            <select name="Dtype" id="Dtype" required value={request} onChange={(e) => setRequest(e.target.value)}>
                                                <option value="">Select Requirement</option>
                                                <option value="web">web</option>
                                                <option value="graphic">graphic</option>
                                                <option value="video">video</option>
                                            </select>
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <textarea id="message" rows="5" placeholder="Enter your message" required   value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                                        <div className="help-block with-errors"></div>
                                    </div>
                                    <button type="button" id="form-submit" className="btn lnk btn-main bg-btn" disabled={!fname} onClick={(e) => contactus()}>Submit <span
                                        className="circle"></span></button>
                                    <div id="msgSubmit" className="h3 text-center hidden"></div>
                                    <div className="clearfix"></div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-5 v-center">
                            <div className="contact-details">
                                <div className="contact-card wow fadeIn" data-wow-delay=".2s">
                                    <div className="info-card v-center">
                                        <span><i className="fas fa-phone-alt"></i> Phone:</span>
                                        <div className="info-body">
                                            <p>Assistance hours: Monday – Friday, 9 am to 5 pm</p>
                                            <a href="tel:+10000000000">

                                                (0120) 4354103</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="email-card mt30 wow fadeIn" data-wow-delay=".5s">
                                    <div className="info-card v-center">
                                        <span><i className="fas fa-envelope"></i> Email:</span>
                                        <div className="info-body">
                                            <p>Our support team will get back to in 24-h during standard business hours.</p>
                                            <a href="mailto:info@businessname.com">

                                                info@ndtechland.com</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="skype-card mt30 wow fadeIn" data-wow-delay=".9s">
                                    <div className="info-card v-center">
                                        <span><i className="fab fa-skype"></i> Skype:</span>
                                        <div className="info-body">
                                            <p>We Are Online: Monday – Friday, 9 am to 5 pm</p>
                                            <a href="skype:niwax.company?call">N D Techland</a>
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

export default ContactUs