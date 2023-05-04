import React from 'react'
import banner from "../Image/app-img1.jpg"
import banner1 from "../Image/app-img2.jpg"
import banner2 from "../Image/app-img3.jpg"
import banner3 from "../Image/app-img4.jpg"
import banner4 from "../Image/app-img5.jpg"
import banner5 from "../Image/app-img6.jpg"

function OurWork() {
  return (
  <>
  <section className="portfolio-section pad-tb">
		<div className="container">
			<div className="row justify-content-center ">
				<div className="col-lg-8">
					<div className="common-heading">
						<span>Our Work</span>
						<h2 className="mb20">Our Latest Creative Work</h2>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-lg-4 col-sm-6 col mt40 wow fadeIn" data-wow-delay="0.2s">
					<div className="isotope_item up-hor">
						<div className="item-image">
							<a href="#"><img src={banner} alt="image" className="img-fluid" /> </a>
						</div>
						<div className="item-info-div shdo">
							<h4><a href="#">Pets Care & Training App</a></h4>
							<p>iOs, Android</p>
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-sm-6 mt40 wow fadeIn" data-wow-delay="0.4s">
					<div className="isotope_item up-hor">
						<div className="item-image">
							<a href="#"><img src={banner1} alt="image" className="img-fluid" /> </a>
						</div>
						<div className="item-info-div shdo">
							<h4><a href="#">Car Rental App</a></h4>
							<p>Graphic, Print</p>
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-sm-6 mt40 wow fadeIn" data-wow-delay="0.6s">
					<div className="isotope_item up-hor">
						<div className="item-image">
							<a href="#"><img src={banner2} alt="image" className="img-fluid" /> </a>
						</div>
						<div className="item-info-div shdo">
							<h4><a href="#">Event Management App</a></h4>
							<p>Graphic, Print</p>
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-sm-6 mt40 wow fadeIn" data-wow-delay="0.8s">
					<div className="isotope_item up-hor">
						<div className="item-image">
							<a href="#"><img src={banner3} alt="image" className="img-fluid" /> </a>
						</div>
						<div className="item-info-div shdo">
							<h4><a href="#">Restaurant App</a></h4>
							<p>iOs, Android</p>
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-sm-6 mt40 wow fadeIn" data-wow-delay="1s">
					<div className="isotope_item up-hor">
						<div className="item-image">
							<a href="#"><img src={banner4} alt="image" className="img-fluid" /> </a>
						</div>
						<div className="item-info-div shdo">
							<h4><a href="#">Restaurant / Hotel App</a></h4>
							<p>Graphic, Print</p>
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-sm-6 mt40 wow fadeIn" data-wow-delay="1.2s">
					<div className="isotope_item up-hor">
						<div className="item-image">
							<a href="#"><img src={banner5} alt="image" className="img-fluid" /> </a>
						</div>
						<div className="item-info-div shdo">
							<h4><a href="#">Super Mart App</a></h4>
							<p>Graphic, Print</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
  </>
  )
}

export default OurWork