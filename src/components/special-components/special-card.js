import React from "react";
import img from "./../../assets/imges/dyinglight-header_ratio.jpg";
function SpCard() {
	return (
		<div className="sp-card">
			<div className="container">
				<div className="sp-img">
					<img src={img} alt="" className="img-fluid" />
				</div>
				<div className="sp-price-cont">
					<div className="sp-price">
						<div className="container">
							<div className="discount">-70%</div>
							<div className="real-price">
								<del className="real">$29.99</del>
								<div className="price">$8.99 USD</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default SpCard;
