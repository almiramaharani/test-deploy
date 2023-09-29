import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import heroImage from "../assets/hero-img.png";
import businessMan from "../assets/business-man.png";
import "./LandingPage.css";
import Header from "../components/Header";

import "bootstrap/dist/css/bootstrap.min.css";

function LandingPage() {
	useEffect(() => {
		const isLoggedIn = localStorage.getItem("isLoggedIn");
		if (isLoggedIn === null) {
			localStorage.setItem("isLoggedIn", "false");
		}
	}, []);

	return (
		<>
			<Header />
			<div id="carouselExampleIndicators" className="carousel slide">
				<div className="carousel-indicators">
					<button
						type="button"
						data-bs-target="#carouselExampleIndicators"
						data-bs-slide-to="0"
						className="active"
						aria-current="true"
						aria-label="Slide 1"
					></button>
					<button
						type="button"
						data-bs-target="#carouselExampleIndicators"
						data-bs-slide-to="1"
						aria-label="Slide 2"
					></button>
				</div>
				<div className="carousel-inner">
					<div className="carousel-item active">
						<div className="bg-container">
							<div className="container">
								<div className="col-body">
									<h1 id="title">
										Better Solutions For Your
										<br />
										Business
									</h1>
									<p id="desc">
										We are team talented designers making websites with
										<br />
										Bootstrap
									</p>
									<div className="btn-container">
										<button className="btn-start">Let's Get Started!</button>
										<a href="#" className="link-vid">
											Watch the Video
										</a>
									</div>
								</div>
								<div className="column-img">
									<img src={heroImage} alt="Hero Image" />
								</div>
							</div>
						</div>
					</div>
					<div className="carousel-item">
						<div
							style={{ backgroundColor: "rgb(16 25 40)", padding: "100px 0" }}
						>
							<div className="container">
								<div className="col-body">
									<h1 id="title">Grow Your Business with Us!</h1>
									<p id="desc">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
										do eiusmod tempor incididunt ut labore et dolore magna
										aliqua. Ut enim ad minim veniam
									</p>
									<div className="btn-container">
										<button className="btn-start">Get In Touch</button>
									</div>
								</div>
								<div className="car2-img">
									<img src={businessMan} alt="Business Man Image" />
								</div>
							</div>
						</div>
					</div>
				</div>
				<button
					className="carousel-control-prev"
					type="button"
					data-bs-target="#carouselExampleIndicators"
					data-bs-slide="prev"
				>
					<span
						className="carousel-control-prev-icon"
						aria-hidden="true"
					></span>
					<span className="visually-hidden">Previous</span>
				</button>
				<button
					className="carousel-control-next"
					type="button"
					data-bs-target="#carouselExampleIndicators"
					data-bs-slide="next"
				>
					<span
						className="carousel-control-next-icon"
						aria-hidden="true"
					></span>
					<span className="visually-hidden">Next</span>
				</button>
			</div>

			<div className="col-footer newsletter-container">
				<h3 id="join-footer">Click Here to Add Product</h3>
				<Link to="/create-product">
					<button className="btn-start" style={{ marginTop: "12px" }}>
						Add Product
					</button>
				</Link>
			</div>

			{/* footer */}
			<div className="footer">
				<div className="col-footer">
					<div className="col-footer newsletter-container">
						<h3 id="join-footer">Join Our Newsletter</h3>
						<p id="desc-news">
							Tamen quem nulla quae legam multos aute sint culpa legam noster
							magna
						</p>
						<div className="input-container">
							<input type="text" className="input-text" />
							<button className="subs-button">Subscribe</button>
						</div>
					</div>
					<div className="company-container-wrapper">
						<div className="company-container">
							<div className="column-footer">
								<div id="company-name">ARSHA</div>
								<div className="address">A108 Adam Street</div>
								<div style={{ paddingLeft: "5px" }} className="address">
									New York, NY 535022
								</div>
								<div
									style={{ paddingLeft: "5px", paddingBottom: "10px" }}
									className="address"
								>
									United States
								</div>

								<div className="address">
									<span style={{ fontWeight: "bold" }}>Phone: </span> +1 5589
									55488 55
								</div>
								<div className="address">
									<span style={{ fontWeight: "bold" }}>Email: </span>{" "}
									info@example.com
								</div>
							</div>
							<div className="column-footer">
								<div className="col-title-footer">Useful Links</div>
								<a className="links" href="#">
									Home
								</a>
								<a className="links" href="#">
									About Us
								</a>
								<a className="links" href="#">
									Services
								</a>
								<a className="links" href="#">
									Terms of service
								</a>
								<a className="links" href="#">
									Privacy policy
								</a>
							</div>
							<div className="column-footer">
								<div className="col-title-footer">Our Services</div>
								<a className="links" href="#">
									Web Design
								</a>
								<a className="links" href="#">
									Web Development
								</a>
								<a className="links" href="#">
									Product Management
								</a>
								<a className="links" href="#">
									Marketing
								</a>
								<a className="links" href="#">
									Graphic Design
								</a>
							</div>
							<div className="column-footer">
								<div className="col-title-footer">Our Social Networks</div>
								<p id="desc-networks">
									Cras fermentum odio eu feugiat lide par
									<br />
									naso tierra videa magna derita valies
								</p>
								<div className="btn-sosmed-container">
									<button className="btn-sosmed"></button>
									<button className="btn-sosmed"></button>
									<button className="btn-sosmed"></button>
									<button className="btn-sosmed"></button>
									<button className="btn-sosmed"></button>
								</div>
							</div>
						</div>
					</div>
					<div className="container-footer bg-footer">
						<p
							style={{
								color: "white",
								marginBlockStart: "0",
								marginBlockEnd: "0",
							}}
						>
							© Copyright <span style={{ fontWeight: "bold" }}>Arsha</span>. All
							Rights Reserved
						</p>
						<p
							style={{ color: "white", marginBlockStart: 0, marginBlockEnd: 0 }}
						>
							Designed by{" "}
							<span style={{ color: "#47B2E4" }}>BootstrapMade</span>
						</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default LandingPage;
