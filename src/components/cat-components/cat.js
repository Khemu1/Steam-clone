import React from "react";
import img from "././../../assets/imges/racingCat.png";
function Cat() {
	return (
		<div className="cat">
			<div className="container">
				<div>
					<img src={img} alt="" className="img-fluid" />
				</div>
				<div className="cat-title">SC-FI & CYBERPUNK</div>
			</div>
		</div>
	);
}
export default Cat;
