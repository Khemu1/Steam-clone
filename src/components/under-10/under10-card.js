import React from "react";
import img from "../../assets/imges/lowercapsule_184x69.jpg";

function Under10Card() {
	return (
		<div className="under10-card">
			<div className="container">
				<div className="under-10-img">
					<img src={img} alt="" className="img-fluid" />
				</div>
				<div className="under-10-card-price">
					<div className="container">
						<div className="discount">-60%</div>
						<div className="under-10-price">
							<del className="real">$17.99</del>
							<div className="price">$7.19 USD</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Under10Card;
