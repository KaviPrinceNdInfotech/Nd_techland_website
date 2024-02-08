import React from 'react'
import { Link } from 'react-router-dom'

function MobileAppPortal() {
    return (
        <>
        <section className="about-sec-app pad-tb pt60 dark-bg2">
		<div className="container">
			<div className="row">
				<div className="col-lg-6">
					<div className="common-heading text-l">
						<h2 className="mb30"><span className="text-second text-bold">N D Techland</span>Mobile App & Web Portal Development
						</h2>
						<p>Transform your thoughts into a strong reality utilizing our outstanding web development capabilities, while we assist enormous ventures with adaptable and high-performing web-based portals.</p>

						<p className="mt10">We can make high engaginging and high income model application Like tiktok and dream 11 or your own idea, We will take hassel of it, you can develop your Business with no specialized expertise.</p>
						<h2 className="mt10"> <span className="  text-bold ">Let's Start a New Project Together
							</span></h2>
					</div>
					<div className="cta-card mt40">
						<Link to="/contactus" className="btn-outline lnk">Request A Quote<i
								className="fas fa-chevron-right fa-icon"></i><span className="circle"></span></Link>
					</div>
				</div>
				<div className="col-lg-6">
					<div className="funfact">
						<div className="row">
							<div className="col-lg-4 col-md-6 col-sm-12 col-6">
								<div className="funfct srcl1">
									<img src="images/icons/startup.svg" alt="niwax app development template"/>
									<span className="services-cuntr counter">14</span><span className="services-cuntr">+</span>
									<p>Years Experience</p>
								</div>
							</div>
							<div className="col-lg-4 col-md-6 col-sm-12 col-6">
								<div className="funfct srcl2">
									<img src="images/icons/team.svg" alt="niwax app development template"/>
									<span className="services-cuntr counter">50+</span>
									<p>Talented Squad</p>
								</div>
							</div>
							<div className="col-lg-4 col-md-6 col-sm-12 col-6">
								<div className="funfct srcl3">
									<img src="images/icons/mobile.svg" alt="niwax app development template"/>
									<span className="services-cuntr counter">100+</span>
								
									<p>Apps Developed</p>
								</div>
							</div>
							<div className="col-lg-4 col-md-6 col-sm-12 col-6">
								<div className="funfct srcl4">
									<img src="images/icons/computers.svg" alt="niwax app development template"/>
									<span className="services-cuntr counter">400+</span><span className="services-cuntr"></span>
									<p>Projects Delivered</p>
								</div>
							</div>
							<div className="col-lg-4 col-md-6 col-sm-12 col-6">
								<div className="funfct srcl5">
									<img src="images/icons/world.svg" alt="niwax app development template"/>
									<span className="services-cuntr counter">100+</span><span className="services-cuntr"></span>
									<p>Cites Served</p>
								</div>
							</div>
							<div className="col-lg-4 col-md-6 col-sm-12 col-6">
								<div className="funfct srcl1">
									<img src="images/icons/deal.svg" alt="niwax app development template"/>
									<span className="services-cuntr counter">100</span><span className="services-cuntr">%</span>
									<p>Client Satisfaction</p>
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

export default MobileAppPortal