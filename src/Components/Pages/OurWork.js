import React from 'react'
import banner from "../Image/PS.png"
import banner1 from "../Image/car rental.png"
import banner2 from "../Image/Voit.png"
import banner3 from "../Image/Resturant.png"
import banner4 from "../Image/Beauty.png"
import banner44 from "../Image/Fitness.png"
import banner5 from "../Image/Travel (2).png"
import banner55 from "../Image/Travel (1).png"
import banner51 from "../Image/CRM.png"

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
							<h4><a href="#">Health Care App</a></h4>
							
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
						
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-sm-6 mt40 wow fadeIn" data-wow-delay="0.6s">
					<div className="isotope_item up-hor">
						<div className="item-image">
							<a href="#"><img src={banner2} alt="image" className="img-fluid" /> </a>
						</div>
						<div className="item-info-div shdo">
							<h4><a href="#">E-commerce App</a></h4>
						
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
						
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-sm-6 mt40 wow fadeIn" data-wow-delay="1s">
					<div className="isotope_item up-hor">
						<div className="item-image">
							<a href="#"><img src={banner44} alt="image" className="img-fluid" /> </a>
						</div>
						<div className="item-info-div shdo">
							<h4><a href="#">Gym & fitness App</a></h4>
						
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-sm-6 mt40 wow fadeIn" data-wow-delay="1.2s">
					<div className="isotope_item up-hor">
						<div className="item-image">
							<a href="#"><img src={banner5} alt="image" className="img-fluid" /> </a>
						</div>
						<div className="item-info-div shdo">
							<h4><a href="#">Grocery App</a></h4>
							
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-sm-6 mt40 wow fadeIn" data-wow-delay="1.2s">
					<div className="isotope_item up-hor">
						<div className="item-image">
							<a href="#"><img src={banner4} alt="image" className="img-fluid" /> </a>
						</div>
						<div className="item-info-div shdo">
							<h4><a href="#">Beauty & Saloon App</a></h4>
							
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-sm-6 mt40 wow fadeIn" data-wow-delay="1.2s">
					<div className="isotope_item up-hor">
						<div className="item-image">
							<a href="#"><img src={banner55} alt="image" className="img-fluid" /> </a>
						</div>
						<div className="item-info-div shdo">
							<h4><a href="#">Travel App</a></h4>
							
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-sm-6 mt40 wow fadeIn" data-wow-delay="1.2s">
					<div className="isotope_item up-hor">
						<div className="item-image">
							<a href="#"><img src={banner51} alt="image" className="img-fluid" /> </a>
						</div>
						<div className="item-info-div shdo">
							<h4><a href="#">CRM App</a></h4>
							
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