import React from "react";
import img from "./../../assets/imges/lowercapsule_184x69.jpg";
import "@fortawesome/fontawesome-free/css/all.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindows } from "@fortawesome/free-brands-svg-icons";
function Box() {
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
								<div className="game-name">island of caliph</div>
								<div className="game-OS">
									<FontAwesomeIcon icon={faWindows} />
								</div>
								<div className="game-tags">
									<span>CRPGGrid-Based</span>, <span>MovementOpen</span>, <span>WorldRPG</span>
								</div>
							</div>
						</div>
						<div className="right">
							<div className="container">
								<div className="discount">-15%</div>
								<div className="real-price">
									<del className="real">$29.99</del>
									<div className="price">$8.99 USD</div>
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
export default Box;
