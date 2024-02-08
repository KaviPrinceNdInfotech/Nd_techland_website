import React from 'react'


import corporate from "../Image/images (8).jpg"
import bannerpost from "../Image/career.png"

function Careerpage() {
    return (
        <>

            <section className=''>
                <div style={{ backgroundImage: `url(${bannerpost})`, height: "70vh", backgroundRepeat: "no-repeat",backgroundSize:"cover" }}>


                </div>
            </section>

            <section className="about-agencys pad-tb block-1 dark-bg3">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-6">
                            <div className="common-heading text-l">
                                <h2 className="mb20">Career and Culture at N D Techland</h2>
                                <p>IT Sector is an exceptionally extending and cutthroat industry. Also, an all around the world regarded position is acquired exclusively by a mix of skilled people, effective techniques and steady outcomes. That is the mystery behind the great development paces of N D Techland and it's customers.</p>
                                <p>We're generally quick to meet gifted, amicable individuals. In the event that that seems like you, and you like the appearance of us as well, connect to us.</p>
                                <a href="#jobs" className="btn-main bg-btn2 lnk mt30"> View Opening <i className="fas fa-chevron-right fa-icon"></i><span className="circle"></span></a>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="image-block mb0 m-mt30">
                                <img src={corporate} alt="about" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="service-block pad-tb bg-gradient7">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="common-heading ptag">
                                <span>Welcome to N D Techland</span>
                                <h2>Perks To Work With N D Techland</h2>
                                <p className="mb30">One thing about benefits: everyone loves them. Casual leaves, paid leaves, incentives and outings are some of the standard advantages for employees.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-sm-6 mt30  wow fadeIn" data-wow-delay=".2s">
                            <div className="s-block wide-sblock">
                                <div className="s-card-icon"><img src="images/icons/teama.svg" alt="service" className="img-fluid" /></div>
                                <div className="s-block-content">
                                    <h4>Reliable Service. In House Team</h4>
                                    <p>In vel hendrerit nisi. Vestibulum eget risus velit.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 mt30 wow fadeIn" data-wow-delay=".5s">
                            <div className="s-block wide-sblock">
                                <div className="s-card-icon"><img src="images/icons/link.svg" alt="service" className="img-fluid" /></div>
                                <div className="s-block-content">
                                    <h4>Trusted by People Like You</h4>
                                    <p>In vel hendrerit nisi. Vestibulum eget risus velit.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 mt30 wow fadeIn" data-wow-delay=".8s">
                            <div className="s-block wide-sblock">
                                <div className="s-card-icon"><img src="images/icons/tech.svg" alt="service" className="img-fluid" /></div>
                                <div className="s-block-content">
                                    <h4>Complete Technical Competency</h4>
                                    <p>In vel hendrerit nisi. Vestibulum eget risus velit.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 mt30 wow fadeIn" data-wow-delay="1.1s">
                            <div className="s-block wide-sblock">
                                <div className="s-card-icon"><img src="images/icons/hi.svg" alt="service" className="img-fluid" /></div>
                                <div className="s-block-content">
                                    <h4>Friendly & Cordial in Nature</h4>
                                    <p>In vel hendrerit nisi. Vestibulum eget risus velit.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 mt30 wow fadeIn" data-wow-delay="1.4s">
                            <div className="s-block wide-sblock">
                                <div className="s-card-icon"><img src="images/icons/badge.svg" alt="service" className="img-fluid" /></div>
                                <div className="s-block-content">
                                    <h4>Excellent Quality Delivered on Time</h4>
                                    <p>In vel hendrerit nisi. Vestibulum eget risus velit.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 mt30 wow fadeIn" data-wow-delay="1.7s">
                            <div className="s-block wide-sblock">
                                <div className="s-card-icon"><img src="images/icons/tin.svg" alt="service" className="img-fluid" /></div>
                                <div className="s-block-content">
                                    <h4>Effective & Continuous Communication</h4>
                                    <p>In vel hendrerit nisi. Vestibulum eget risus velit.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="contact-page pad-tb" id="jobs">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="common-heading ptag">
                                <span>Jobs</span>
                                <h2>Current Openings</h2>
                                <p className="mb60"> Latest Jobs</p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="career-card-div">



                                <div className="accordion" id="accordionExample">

                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingOne">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-1" aria-expanded="true" aria-controls="collapseOne">
                                                Web & Visual Designer - 2 Post
                                            </button>
                                        </h2>
                                        <div id="collapse-1" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <div className="data-reqs">
                                                    <h5 className="pt20 pb20">Overview</h5>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                                    <h5 className="pt20 pb20">Required experience</h5>
                                                    <p>5 Years Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                                    <h4 className="pb20 pt20">Skills Required:</h4>
                                                    <ul className="list-ul ul-check">
                                                        <li>Deep familiarity with Core PHP and Laravel</li>
                                                        <li>Experience of Ajax &amp; Jquery</li>
                                                        <li>Good understanding of JSON &amp; third-party libraries and APIs</li>
                                                        <li>Should be able to understand entire development life cycle concept. (Design, build, deploy, test, deploy online &amp; support)</li>
                                                        <li>Strong knowledge in Web Services &amp; API's, LBS, Social Network Integration etc.</li>
                                                        <li>Strong knowledge in database (Mysql)</li>
                                                        <li>Good Knowledge in Google APIs</li>
                                                        <li>Good understanding of MVC concepts and design patterns</li>
                                                        <li>Strong object oriented programming and design skills</li>
                                                        <li>Knowledge in versioning Tools that includes like trunk, branch, export, import and copy will be an added advantage</li>
                                                    </ul>
                                                    <a href="#" className="btn-main bg-btn3 lnk mt20" data-bs-toggle="modal" data-bs-target="#modalform">Apply Now<i className="fas fa-chevron-right fa-icon"></i><span className="circle"></span></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingOne">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-2" aria-expanded="true" aria-controls="collapseOne">
                                                Head of UX and Design - 3 Post
                                            </button>
                                        </h2>
                                        <div id="collapse-2" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <div className="data-reqs">
                                                    <h5 className="pt20 pb20">Overview</h5>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                                    <h5 className="pt20 pb20">Required experience</h5>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                                    <h4 className="pb20 pt20">Skills Required:</h4>
                                                    <ul className="list-ul ul-check">
                                                        <li>Deep familiarity with Core PHP and Laravel</li>
                                                        <li>Experience of Ajax &amp; Jquery</li>
                                                        <li>Good understanding of JSON &amp; third-party libraries and APIs</li>
                                                        <li>Should be able to understand entire development life cycle concept. (Design, build, deploy, test, deploy online &amp; support)</li>
                                                        <li>Strong knowledge in Web Services &amp; API's, LBS, Social Network Integration etc.</li>
                                                        <li>Strong knowledge in database (Mysql)</li>
                                                        <li>Good Knowledge in Google APIs</li>
                                                        <li>Good understanding of MVC concepts and design patterns</li>
                                                        <li>Strong object oriented programming and design skills</li>
                                                        <li>Knowledge in versioning Tools that includes like trunk, branch, export, import and copy will be an added advantage</li>
                                                    </ul>
                                                    <a href="#" className="btn-main bg-btn3 lnk mt20" data-bs-toggle="modal" data-bs-target="#modalform">Apply Now<i className="fas fa-chevron-right fa-icon"></i><span className="circle"></span></a>
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

            <div className="popup-modals">
                <div className="modal" id="modalform">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header bg-danger">
                                <div className="common-heading">
                                    <h4 className="mt0 mb0 ">Post Your Resume</h4>
                                </div>
                                <button type="button" className="closes" data-bs-dismiss="modal">&times;</button>
                            </div>

                            <div className="modal-body pt40 pb60">
                                <div className="form-block fdgn2">
                                    <h4>Personal Details</h4>
                                    <form id="contact-form" method="post" action="#">
                                        <div className="fieldsets row">
                                            <div className="col-md-6 form-group"><input id="form_name" type="text" name="name" placeholder="Enter your name *" required="required" /> </div>
                                            <div className="col-md-6 form-group"><input id="form_email" type="email" name="email" placeholder="Enter your email *" required="required" /> </div>
                                        </div>
                                        <div className="fieldsets row">
                                            <div className="col-md-6 form-group"><input id="form_phone" type="text" name="phone" placeholder="Enter your Phone No *" required="required" />	</div>
                                            <div className="col-md-6 form-group"><input id="form_phone" type="text" name="phone" placeholder="City *" required="required" />	</div>

                                        </div>
                                        <div className="fieldsets form-group"> <textarea id="form_message" name="message" placeholder="Address *" rows="4" required="required"></textarea> </div>
                                        <h4>Qualification</h4>
                                        <div className="fieldsets row">
                                            <div className="col-md-6 form-group"><input id="form_phone" type="text" name="phone" placeholder="Degree *" required="required" />	</div>
                                            <div className="col-md-6 form-group">
                                                <select id="form_need" name="need" required="required">
                                                    <option value="">Select Post</option>
                                                    <option value="Graphic Design">Graphic Design</option>
                                                    <option value="Web Design">Web Design</option>
                                                    <option value="App Design">App Design</option>
                                                    <option value="Other">Other</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="fieldsets- row">
                                            <div className="col-md-12 form-group">
                                                <div className="custom-file">
                                                    <input type="file" className="custom-file-input mb0" id="customFile" />
                                                    <label className="custom-file-label" for="customFile">Choose file</label>
                                                </div>
                                                <p><small>Please upload maximum 5 files Only pdf, docx and doc files.</small></p>
                                            </div>
                                        </div>
                                        <div className="fieldsets mt20">
                                            <button type="button" className="lnk btn-main bg-btn">Post Here<span className="circle"></span></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Careerpage