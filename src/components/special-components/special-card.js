import React from "react";
import img from "./../../assets/imges/dyinglight-header_ratio.jpg";
function SpCard() {
	let random =Math.floor(Math.random()*100)
	let random2 =Math.floor(Math.random()*50)
	let random3 =Math.floor(Math.random()*30)
	return (
		<div className="sp-card">
			<div className="container">
				<div className="sp-img">
					<img src={img} alt="" className="img-fluid" />
				</div>
				<div className="sp-price-cont">
					<div className="sp-price">
						<div className="container">
							<div className="discount">-{random3}%</div>
							<div className="real-price">
								<del className="real">${random2}</del>
								<div className="price">${random} USD</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default SpCard;
