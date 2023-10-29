import React from "react";
import img from "./../../assets/imges/popularheader_292x136.jpg";
function PopularCard() {
	let random = Math.floor(Math.random() * 10);
	return (
		<div className="popular-card">
			<div className="container ">
				<div className="popular-img">
					<img src={img} alt="" className="img-fluid" />
				</div>
				<div className="popular-price">
					<div className="container">
						<div className="price">${random} USD</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default PopularCard;
