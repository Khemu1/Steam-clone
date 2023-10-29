import React from "react";
import img from "./../../assets/imges/SPECcapsule_184x69.jpg";
import "@fortawesome/fontawesome-free/css/all.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindows } from "@fortawesome/free-brands-svg-icons";
function Box4() {
	let random =Math.floor(Math.random()*100)
	let random2 =Math.floor(Math.random()*50)
	let random3 =Math.floor(Math.random()*30)
	return (
		<div className="slection-box">
			<div className="container">
				<div className="slection-box-img">
					<img className="img-fluid" src={img} alt="" />
				</div>
				<div className="slection-box-info">
					<div className="container">
						<div className="left">
							<div className="continer">
								<div className="game-name">Sea of Thieves</div>
								<div className="game-OS">
									<FontAwesomeIcon icon={faWindows} />
								</div>
								<div className="game-tags">
									<span>Multiplayer</span>, <span>Adventure</span>, <span>Open World</span>
								</div>
							</div>
						</div>
						<div className="right">
							<div className="container">
								{/* <div className="discount">-70%</div> */}
								<div className="real-price">
									{/* <del className="real">$29.99</del> */}
									<div className="price">${random3}</div>
								</div>
							</div>
						</div>
						{/* <div className="box-extra-info"></div> */}
					</div>
				</div>
			</div>
		</div>
	);
}
export default Box4;
