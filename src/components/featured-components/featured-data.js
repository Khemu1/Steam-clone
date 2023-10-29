import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindows } from "@fortawesome/free-brands-svg-icons";

import headImg from "../../assets/imges/header.jpg";
import img1 from "../../assets/imges/1.jpg";
import img2 from "../../assets/imges/2.jpg";
import img3 from "../../assets/imges/3.jpg";
import img4 from "../../assets/imges/4.jpg";

function FeatCard() {
	let random= Math.floor(Math.random()*150)
	return (
		<div className="fe-box">
			<div className="container">
				<div className="head-img">
					<img src={headImg} alt="" />
				</div>
				<div className="right-box">
					<div className="container">
						<h2>Mortal Kombat 1</h2>
						<div className="other-pics">
							<div className="other-img">
								<img src={img1} alt="" className="img-fluid" />
							</div>
							<div className="other-img">
								<img src={img2} alt="" className="img-fluid" />
							</div>
							<div className="other-img">
								<img src={img3} alt="" className="img-fluid" />
							</div>
							<div className="other-img">
								<img src={img4} alt="" className="img-fluid" />
							</div>
						</div>
						<div className="avi-type">
							<h3>Now Available</h3>
							<p>Best seller</p>
						</div>
						<div className="money-icons">
							<div>{random}$ USD</div>
							<div>
								<span>
									<FontAwesomeIcon icon={faWindows} />
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default FeatCard;
