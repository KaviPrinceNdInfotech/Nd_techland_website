import React from 'react'
import {Link} from 'react-router-dom'
import badge from "../Image/badges-a.png"
import badge1 from "../Image/badges-b.png"
import badge2 from '../Image/badges-c.png'
import badge3 from '../Image/badges-d.png'

function RelationShip() {
	return (
		<>
			<section className="badges-section pad-tb">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-8">
							<div className="common-heading w-tdxt">
								<span>WE MAKE RELATIONSHIPS</span>
								<h2>Ranked as #1 Top Web & App Development Companies</h2>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-3 col-md-6 col-6 wow fadeIn" data-wow-delay=".2s">
							<div className="badges-content">
								<img src={badge} alt="budges" className="img-fluid" />
								<p>ABC DEF Industry Leader</p>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-6 wow fadeIn" data-wow-delay=".4s">
							<div className="badges-content">
								<img src={badge1} alt="budges" className="img-fluid" />
								<p>Best eCommerce Development Company</p>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-6 wow fadeIn" data-wow-delay=".6s">
							<div className="badges-content">
								<img src={badge2} alt="budges" className="img-fluid" />
								<p>ABC DEF High Performer Winner</p>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-6 wow fadeIn" data-wow-delay=".8s">
							<div className="badges-content">
								<img src={badge3} alt="budges" className="img-fluid" />
								<p>Top App Developer 2019-20</p>
							</div>
						</div>
					</div>
					<div className="-cta-btn mt70">
						<div className="free-cta-title v-center wow fadeInUp" data-wow-delay="1s">
							<p>We <span>Promise.</span> We <span>Deliver.</span></p>
							<Link to="/contactus">
							<button type="button" className="btn-main bg-btn2 lnk">Let's Work Together<i
								className="fas fa-chevron-right fa-icon"></i><span className="circle"></span>
							</button>
							</Link>
							
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default RelationShip