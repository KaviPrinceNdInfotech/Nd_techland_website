import React from 'react'
import slider from "../Image/slider1.png"
import webservice from "../Image/images (8).jpg"
import webdesign1 from "../Image/images (9).jpg"
import webdesign2 from "../Image/images (10).jpg"
import webdesign3 from "../Image/images (11).jpg"
import webdesign4 from "../Image/images (12).jpg"
import webdesign5 from "../Image/images (9).jpg"
import webdesign6 from "../Image/download (3).jpg"
import techonology1 from "../Image/9.png"
import techonology2 from "../Image/8.png"
import techonology3 from "../Image/10.png"
import techonology4 from "../Image/11.png"
import techonology5 from "../Image/1.png"
import techonology6 from "../Image/6.png"
import techonology7 from "../Image/2.png"
import techonology from "../Image/7.png"

function WebApplication() {
  return (
    <div>
      <section  >
        <img className="d-block w-100" src={slider} alt="img" />
      </section>
      <section className="service pad-tb" >
        <div className="container">
          <div className="row">

            <div className="col-lg-8 block-1">
              <div className="common-heading text-l pl25">
                {/* <span>Overview</span> */}
                <h2>Creative Web Design & Development Service</h2>
                <p>We at N D Techland work in planning extraordinary sites for each business type. Regardless of whether you need a site to produce potential customers, an amazing internet business answer for support your online deals, an engaging greeting page or a site that controls your entire association, we can help. Our master and experienced website specialists will move toward your undertaking in a novel manner to guarantee that the plan we present to you will be unique, eye-catching and in particular effective. </p>
                <p>All that we do is tied in with finding out your site is a triumph and our way to deal with configuration is no special case. In case you're searching for a top notch site planning, N D Techland can help you. We center around making sites of excellent quality that are particular from your competitors.</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="image-block upset bg-shape wow fadeIn">
                <img src={webservice} alt="image" className="img-fluid" style={{ height: "300px" }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="techonology-used-">
        <div className="container">
          <ul className="h-scroll tech-icons">
            <li><a href="#"><img src={techonology1} alt="icon" className='h-75 w-75' /></a></li>
            <li><a href="#"><img src={techonology2} alt="icon" className='h-75 w-75' /></a></li>
            <li><a href="#"><img src={techonology3} alt="icon" className='h-75 w-75' /></a></li>
            <li><a href="#"><img src={techonology4} alt="icon" className='h-75 w-75' /></a></li>
            <li><a href="#"><img src={techonology} alt="icon"  className='h-75 w-75'/></a></li>
            <li><a href="#"><img src={techonology5} alt="icon" className='h-75 w-75'/></a></li>
            <li><a href="#"><img src={techonology6} alt="icon" className='h-75 w-75'/></a></li>
            <li><a href="#"><img src={techonology7} alt="icon" className='h-75 w-75'/></a></li>
          </ul>
        </div>
      </div>

      <section className="service-block bg-gradient6 pad-tb">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="common-heading ptag">

                <h2>Our Services</h2>
                <p className="mb30">We think big and have hands in all leading technology platforms to provide you wide array of services.</p>
              </div>
            </div>
          </div>

          <div className="row upset link-hover">
            <div className="col-lg-4 col-sm-6 mt30 wow fadeInUp" data-wow-delay=".2s">
              <div className="s-block">
                <div className="s-card-icon"><img src="images/icons/logo-and-branding.svg" alt="service" className="img-fluid" /></div>
                <h4>Web Development</h4>
                <p>We design for India's most attractive brands. Free Brand Consultation. Web designing. packaging Design. Logo Design. Idea Brochures. Brand Strategy.</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mt30 wow fadeInUp" data-wow-delay=".4s">
              <div className="s-block">
                <div className="s-card-icon"><img src="images/icons/service2.svg" alt="service" className="img-fluid" /></div>
                <h4>ERP Development</h4>
                <p>With responsive website designing services, you take out the requirement for multiple codes for saperate web pages and websites for various PCs, cell phones and tablets.</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mt30 wow fadeInUp" data-wow-delay=".6s">
              <div className="s-block">
                <div className="s-card-icon"><img src="images/icons/service3.svg" alt="service" className="img-fluid" /></div>
                <h4>CRM Development</h4>
                <p>A static website design empowers site to store requests and communicate at a speedy rate. With a static site, you won't ever stress over content updating again and again.</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mt30 wow fadeInUp" data-wow-delay=".8s">
              <div className="s-block">
                <div className="s-card-icon"><img src="images/icons/service4.svg" alt="service" className="img-fluid" /></div>
                <h4>E-Commmerce Website Development</h4>
                <p>Having a dynamic website is like; having the opportunity to make changes on it as and when required. Dynamic web designing has the capacity of turning the visitors to customers.</p>
              </div>
            </div>
            {/* <div className="col-lg-4 col-sm-6 mt30 wow fadeInUp" data-wow-delay="1s">
              <div className="s-block">
                <div className="s-card-icon"><img src="images/icons/service5.svg" alt="service" className="img-fluid" /></div>
                <h4>UI/UX Deisgning</h4>
                <p>Transform your PSD plans into responsive and bug free HTML sites with our PSD to HTML service - You'll be astonished how inexpensive is this service</p>
              </div>
            </div> */}
            <div className="col-lg-4 col-sm-6 mt30 wow fadeInUp" data-wow-delay="1.2s">
              <div className="s-block">
                <div className="s-card-icon"><img src="images/icons/service6.svg" alt="service" className="img-fluid" /></div>
                <h4>MLM Software</h4>
                <p>We offer website design services for any kind of online site. Our skilled group of developers bring the information on client conduct and business assumptions into each site upgrade to draw in the right audience.</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mt30 wow fadeInUp" data-wow-delay="1.2s">
              <div className="s-block">
                <div className="s-card-icon"><img src="images/icons/service6.svg" alt="service" className="img-fluid" /></div>
                <h4>Hospital management Software</h4>
                <p>We offer website design services for any kind of online site. Our skilled group of developers bring the information on client conduct and business assumptions into each site upgrade to draw in the right audience.</p>
              </div>
            </div>
         
          </div>
       
        </div>
      </section>

      <section className="service-block pad-tb " >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="common-heading ptag">
                <span>Process</span>
                <h2>Our Website Design & Development Process</h2>
                <p>Our design process follows a proven approach. We begin with a deep understanding of your needs and create a planning website.</p>
              </div>
            </div>
          </div>
          <div className="row upset justify-content-center mt60">
            <div className="col-lg-4 v-center order1">
              <div className="image-block1">
                <img src={webservice} alt="Process" className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-7 v-center order2">
              <div className="ps-block">
                <span  style={{background:"linear-gradient(to bottom, #33ccff 0%, #ff99cc 100%)"}}>1</span>
                <h3>Planning</h3>
                <p>Website development planning process involves a series of steps that need to be taken to create a successful website. Here is a breakdown of the content that should be considered in each step.Define is the Requirement definition step, where our Project coordinator, discusses the requirement with the client interface and decides on the function items that need to be covered in the current sprint. The result of this step is requirement traceabil.</p>
              </div>
            </div>
          </div>
          <div className="row upset justify-content-center mt60">
            <div className="col-lg-7 v-center order2">
              <div className="ps-block">
                <span style={{background:"linear-gradient(to bottom, #33ccff 0%, #ff99cc 100%)"}}>2</span>
                <h3>Design</h3>
                <p>The visual design includes elements such as color, typography, imagery, and layout.Design is the step where UI design, wire framing and DB application architecture design are carried out. This only focusses on the items that are included on the current sprint.</p>
              </div>
            </div>
            <div className="col-lg-4 v-center order1">
              <div className="image-block1">
                <img src={webdesign2} alt="Process" className="img-fluid" />
              </div>
            </div>
          </div>
          <div className="row upset justify-content-center mt60">
            <div className="col-lg-4 v-center order1">
              <div className="image-block1">
                <img src={webdesign3} alt="Process" className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-7 v-center order2">
              <div className="ps-block">
                <span  style={{background:"linear-gradient(to bottom, #33ccff 0%, #ff99cc 100%)"}}>3</span>
                <h3>Development</h3>
                <p> Website analytics can provide valuable insights into user behavior, traffic sources, and other metrics. This information can be used to improve the website's performance and user experience.Development is carried out for the requirements of the current sprint and along side the test cases are written for the current sprint. If the current sprint is going to modify some existing functionality, then test cases impacting older functionality are.SEO involves optimizing a website to improve its visibility and ranking on search engines. This includes keyword research, on-page optimization, and link building.</p>
              </div>
            </div>
          </div>
          <div className="row upset justify-content-center mt60">
            <div className="col-lg-7 v-center order2">
              <div className="ps-block">
                <span  style={{background:"linear-gradient(to bottom, #33ccff 0%, #ff99cc 100%)"}}>4</span>
                <h3>Testing</h3>
                <p>Website testing is the process of identifying and resolving issues and errors in a website to ensure that it is functioning properly and providing a positive user experience. Here are some key considerations for website testing.This is where completed modules are tested thoroughly. Dissecting the application and testing all individual components and and integration as well.</p>
              </div>
            </div>
            <div className="col-lg-4 v-center order1">
              <div className="image-block1">
                <img src={webdesign4} alt="Process" className="img-fluid" />
              </div>
            </div>
          </div>
          <div className="row upset justify-content-center mt60">
            <div className="col-lg-4 v-center order1">
              <div className="image-block1">
                <img src={webdesign5} alt="Process" className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-7 v-center order2">
              <div className="ps-block">
                <span  style={{background:"linear-gradient(to bottom, #33ccff 0%, #ff99cc 100%)"}}>5</span>
                <h3>Launch</h3>
                <p>Launching a website can be an exciting and nerve-wracking process. Here are some key considerations for launching a website.Final testing,Domain name and hosting,Content management,SEO optimization,Analytics tracking,Backups,Promotion,Monitoring and etc.</p>
              </div>
            </div>
          </div>
          <div className="row upset justify-content-center mt60">
            <div className="col-lg-7 v-center order2">
              <div className="ps-block">
                <span  style={{background:"linear-gradient(to bottom, #33ccff 0%, #ff99cc 100%)"}}>6</span>
                <h3>Maintenance</h3>
                <p>Website maintenance is crucial for keeping your website up-to-date, secure, and functioning smoothly. Here are some key considerations for website maintenance.Regular backups,Security updates,Content updates,Broken links,Software updates,Website speed,Regular testing and etc.</p>
              </div>
            </div>
            <div className="col-lg-4 v-center order1">
              <div className="image-block1">
                <img src={webdesign6} alt="Process" className="img-fluid" />
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
                <span>We Deliver Our Best</span>
                <h2>Why Choose N D Techland</h2>
                <p className="mb30">Following are some proven key factors which help us to get more and more customer consistantly.</p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6 mt30  wow fadeIn" data-wow-delay=".2s">
              <div className="s-block wide-sblock">
                <div className="s-card-icon"><img src="images/icons/teama.svg" alt="service" className="img-fluid" /></div>
                <div className="s-block-content">
                  <h4>Reliable Service. In House Team</h4>
                  <p>Instead of ourself, our services speaks louder.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mt30 wow fadeIn" data-wow-delay=".5s">
              <div className="s-block wide-sblock">
                <div className="s-card-icon"><img src="images/icons/link.svg" alt="service" className="img-fluid" /></div>
                <div className="s-block-content">
                  <h4>Trusted by People Like You</h4>
                  <p>Our long customer list is an example of our trusted relation.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mt30 wow fadeIn" data-wow-delay=".8s">
              <div className="s-block wide-sblock">
                <div className="s-card-icon"><img src="images/icons/tech.svg" alt="service" className="img-fluid" /></div>
                <div className="s-block-content">
                  <h4>Complete Technical Competency</h4>
                  <p>In terms of technicality, we provide the best.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mt30 wow fadeIn" data-wow-delay="1.1s">
              <div className="s-block wide-sblock">
                <div className="s-card-icon"><img src="images/icons/hi.svg" alt="service" className="img-fluid" /></div>
                <div className="s-block-content">
                  <h4>Friendly & Cordial in Nature</h4>
                  <p>With professionality we also maintain a friendly and cordial environment.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mt30 wow fadeIn" data-wow-delay="1.4s">
              <div className="s-block wide-sblock">
                <div className="s-card-icon"><img src="images/icons/badge.svg" alt="service" className="img-fluid" /></div>
                <div className="s-block-content">
                  <h4>Excellent Quality Delivered on Time</h4>
                  <p>Efficient but effective project delivered within timeline, is our key of customer's trust.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mt30 wow fadeIn" data-wow-delay="1.7s">
              <div className="s-block wide-sblock">
                <div className="s-card-icon"><img src="images/icons/tin.svg" alt="service" className="img-fluid" /></div>
                <div className="s-block-content">
                  <h4>Effective & Continuous Communication</h4>
                  <p>From starting of the project to it's end, we keep updated our client at each and every step.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="-cta-btn mt70">
            <div className="free-cta-title v-center wow zoomInDown" data-wow-delay="1.8s">
              <p>Let's Start a <span>New Project</span> Together</p>
              <a href="/contactus" className="btn-main bg-btn2 lnk">Inquire Now<i className="fas fa-chevron-right fa-icon"></i><span className="circle"></span></a>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default WebApplication