import React from 'react'
import digital from "../Image/digital.png"
import { Link } from 'react-router-dom'

function DigitalMarketing() {
  return (
    <div>
      <section >
        <img class="d-block w-100" src={digital} alt="img" />
      </section>
      <>

        {/*End Hero*/}
        {/*Start About*/}
        <section className="about-agency pad-tb">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 v-center">
                <div className="image-block">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5ZmMOPzpJlUlVgTA2YqFAaJ6Vc0A0FvhouA&usqp=CAU"
                    alt="about"
                    className="img-fluid no-shadow"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="common-heading text-l">
                  <span>GROW TRAFFIC &amp; INCREASE REVENUE</span>
                  <h2>Serving All Your Digital Marketing Needs</h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text
                    ever since the 1500s, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book. Lorem Ipsum is
                    simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum is simply dummy text of the printing and typesetting
                    industry. is simply dummy text of the printing and typesetting
                    industry.{" "}
                  </p>
               
                    <button type='button' className="btn-main bg-btn lnk mt30">
                      Learn More <i className="fas fa-chevron-right fa-icon" />
                      <span className="circle" />
                    </button>
                 
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*End About*/}
        {/*Start Service*/}
        <section className="service-section service-2 pad-tb">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="common-heading">
                  <span>Services We’re Provided</span>
                  <h2 className="mb30">Our Digital Marketing Services</h2>
                </div>
              </div>
            </div>
            <div className="row upset link-hover">
              <div
                className="col-lg-6 col-sm-6 mt30 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div
                  className="wide-block service-img1"
                  data-tilt=""
                  data-tilt-max={2}
                  data-tilt-speed={600}
                >
                  <div className="block-space-">
                    <span>PPC</span>
                    <h4>Digital Media &amp; PPC Advertising</h4>
                    <Link to="/digitalservice">
                      Learn More <i className="fas fa-chevron-right fa-icon" />
                      </Link>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-6 col-sm-6 mt30  wow fadeInUp"
                data-wow-delay=".4s"
              >
                <div
                  className="wide-block service-img2"
                  data-tilt=""
                  data-tilt-max={2}
                  data-tilt-speed={600}
                >
                  <div className="block-space-">
                    <span>MARKETING </span>
                    <h4>Content Marketing Service</h4>
                    <a href="javascript:void(0)">
                      Learn More <i className="fas fa-chevron-right fa-icon" />
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-6 col-sm-6 mt30  wow fadeInUp"
                data-wow-delay=".6s"
              >
                <div
                  className="wide-block service-img3"
                  data-tilt=""
                  data-tilt-max={2}
                  data-tilt-speed={600}
                >
                  <div className="block-space-">
                    <span>SEO</span>
                    <h4>Search Engine Optimization</h4>
                    <a href="javascript:void(0)">
                      Learn More <i className="fas fa-chevron-right fa-icon" />
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-6 col-sm-6 mt30  wow fadeInUp"
                data-wow-delay=".6s"
              >
                <div
                  className="wide-block service-img3"
                  data-tilt=""
                  data-tilt-max={2}
                  data-tilt-speed={600}
                >
                  <div className="block-space-">
                    <span>SEO</span>
                    <h4>Search Engine Optimization</h4>
                    <a href="javascript:void(0)">
                      Learn More <i className="fas fa-chevron-right fa-icon" />
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-6 col-sm-6 mt30  wow fadeInUp"
                data-wow-delay=".6s"
              >
                <div
                  className="wide-block service-img3"
                  data-tilt=""
                  data-tilt-max={2}
                  data-tilt-speed={600}
                >
                  <div className="block-space-">
                    <span>SEO</span>
                    <h4>Search Engine Optimization</h4>
                    <a href="javascript:void(0)">
                      Learn More <i className="fas fa-chevron-right fa-icon" />
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-6 col-sm-6 mt30  wow fadeInUp"
                data-wow-delay=".8s"
              >
                <div
                  className="wide-block service-img4"
                  data-tilt=""
                  data-tilt-max={2}
                  data-tilt-speed={600}
                >
                  <div className="block-space-">
                    <span>WEB DESIGN</span>
                    <h4>Website Design &amp; Development</h4>
                    <a href="javascript:void(0)">
                      Learn More <i className="fas fa-chevron-right fa-icon" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="work-category pad-tb tilt3d">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 v-center">
                <div className="common-heading text-l">
                  <span>Industries we work for</span>
                  <h2>Helping Businesses in All Domains</h2>
                  <p>
                    Successfully delivered digital products Lorem Ipsum is simply dummy
                    text of the printing and typesetting industry.
                  </p>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="work-card-set">
                  <div className="icon-set wow fadeIn" data-wow-delay=".2s">
                    <div className="work-card cd1">
                      <div className="icon-bg">
                        <img src="images/icons/icon-1.png" alt="Industries" />
                      </div>
                      <p>Social Networking</p>
                    </div>
                  </div>
                  <div className="icon-set wow fadeIn" data-wow-delay=".4s">
                    <div className="work-card cd2">
                      <div className="icon-bg">
                        <img src="images/icons/icon-2.png" alt="Industries" />
                      </div>
                      <p>Digital Marketing</p>
                    </div>
                  </div>
                  <div className="icon-set wow fadeIn" data-wow-delay=".6s">
                    <div className="work-card cd3">
                      <div className="icon-bg">
                        <img src="images/icons/icon-3.png" alt="Industries" />
                      </div>
                      <p>Ecommerce Development</p>
                    </div>
                  </div>
                  <div className="icon-set wow fadeIn" data-wow-delay=".8s">
                    <div className="work-card cd4">
                      <div className="icon-bg">
                        <img src="images/icons/icon-4.png" alt="Industries" />
                      </div>
                      <p>Video Service</p>
                    </div>
                  </div>
                  <div className="icon-set wow fadeIn" data-wow-delay="1s">
                    <div className="work-card cd5">
                      <div className="icon-bg">
                        <img src="images/icons/icon-5.png" alt="Industries" />
                      </div>
                      <p>Banking Service</p>
                    </div>
                  </div>
                  <div className="icon-set wow fadeIn" data-wow-delay="1.2s">
                    <div className="work-card cd6">
                      <div className="icon-bg">
                        <img src="images/icons/icon-6.png" alt="Industries" />
                      </div>
                      <p>Enterprise Service</p>
                    </div>
                  </div>
                  <div className="icon-set wow fadeIn" data-wow-delay="1.4s">
                    <div className="work-card cd7">
                      <div className="icon-bg">
                        <img src="images/icons/icon-7.png" alt="Industries" />
                      </div>
                      <p>Education Service</p>
                    </div>
                  </div>
                  <div className="icon-set wow fadeIn" data-wow-delay="1.6s">
                    <div className="work-card cd8">
                      <div className="icon-bg">
                        <img src="images/icons/icon-8.png" alt="Industries" />
                      </div>
                      <p>Tour and Travels</p>
                    </div>
                  </div>
                  <div className="icon-set wow fadeIn" data-wow-delay="1.8s">
                    <div className="work-card cd9">
                      <div className="icon-bg">
                        <img src="images/icons/icon-9.png" alt="Industries" />
                      </div>
                      <p>Health Service</p>
                    </div>
                  </div>
                  <div className="icon-set wow fadeIn" data-wow-delay="2s">
                    <div className="work-card cd10">
                      <div className="icon-bg">
                        <img src="images/icons/icon-10.png" alt="Industries" />
                      </div>
                      <p>Event &amp; Ticket</p>
                    </div>
                  </div>
                  <div className="icon-set wow fadeIn" data-wow-delay="2.2s">
                    <div className="work-card cd11">
                      <div className="icon-bg">
                        <img src="images/icons/icon-11.png" alt="Industries" />
                      </div>
                      <p>Restaurant Service</p>
                    </div>
                  </div>
                  <div className="icon-set wow fadeIn" data-wow-delay="2.4s">
                    <div className="work-card cd12">
                      <div className="icon-bg">
                        <img src="images/icons/icon-12.png" alt="Industries" />
                      </div>
                      <p>Business Consultant</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="-cta-btn mt70">
            <div
              className="free-cta-title v-center  wow zoomInDown"
              data-wow-delay=".9s"
            >
              <p>
                Let's Start A <span>New Project Together</span>
              </p>
              <a href="#" className="btn-main bg-btn2 lnk">
                Request A Quote <i className="fas fa-chevron-right fa-icon" />
                <span className="circle" />
              </a>
            </div>
          </div>
        </section>

      </>


    </div>
  )
}

export default DigitalMarketing