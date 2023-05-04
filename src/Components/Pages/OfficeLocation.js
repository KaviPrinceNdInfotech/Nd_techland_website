import React from 'react'
import office from '../Image/india-img.png'
import office1 from '../Image/italy.png'
import office2 from '../Image/paris.png'

function OfficeLocation() {
    return (
        <>
            <section className="our-office pad-tb">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="common-heading">
                                <span>Our Locations</span>
                                <h2>Our Office</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-sm-6 shape-loc wow fadeIn" data-wow-delay=".2s">
                            <div className="office-card hoshd">
                                <div className="landscp">
                                    <img src={office} alt="location" className="img-fluid" />
                                </div>
                                <div className="info-text-div">
                                    <h4>Noida</h4>
                                    <h6 className="mt10">Registered Office</h6>
                                    <p>S 97, Ground Floor, Sector 12, Noida, Uttar Pradesh 201301</p>
                                    <ul className="-address-list mt10">
                                        <li><a href="mailto:info@ndtechland.com"><i className="fas fa-envelope"></i>
                                        info@ndtechland.com</a></li>
                                        <li><a href="tel: 0120 4354103"><i className="fas fa-phone-alt"></i>  0120 4354103</a>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 shape-loc wow fadeIn" data-wow-delay=".4s">
                            <div className="office-card hoshd">
                                <div className="landscp">
                                    <img src={office1} alt="location" className="img-fluid" />
                                </div>
                                <div className="info-text-div">
                                    <h4>Patna</h4>
                                    <h6 className="mt10">Registered Office</h6>
                                    <p>Plot No L-1/63, South S.K Puri,Boring Road, Patna, Bihar 800001</p>
                                    <ul className="-address-list mt10">
                                        <li><a href="mailto:info@ndtechland.com"><i className="fas fa-envelope"></i>
                                        info@ndtechland.com</a></li>
                                        <li><a href="tel:+91 9999 179 132"><i className="fas fa-phone-alt"></i> +91 9999 179 132</a>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 shape-loc wow fadeIn" data-wow-delay=".6s">
                            <div className="office-card hoshd">
                                <div className="landscp">
                                    <img src={office2} alt="location" className="img-fluid" />
                                </div>
                                <div className="info-text-div">
                                    <h4>Noida</h4>
                                    <h6 className="mt10">Corporate Address</h6>
                                    <p>C-53, First Floor, Sector 2, Noida, Uttar Pradesh-201301</p>
                                    <ul className="-address-list mt10">
                                        <li><a href="mailto:info@ndtechland.com"><i className="fas fa-envelope"></i>
                                        info@ndtechland.com</a></li>
                                        <li><a href="tel:+91 9716 41 2565"><i className="fas fa-phone-alt"></i>+91 9716 41 2565</a>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default OfficeLocation