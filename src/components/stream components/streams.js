import React from "react";
import StreamImg from "../../assets/imges/stream-img/download.jpg";
import playImg from "../../assets/imges/stream-img/play_icon80.png";
import groupImg from "../../assets/imges/stream-img/icon_viewers.png";
// import "@fortawesome/fontawesome-free/css/all.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUser } from "@fortawesome/free-solid-svg-icons";

function Stream() {
	return (
		<div className="stream">
			<div className="live">
				<div></div>
				<div>Live</div>
			</div>
			<div className="container">
				<div className="stream-img">
					<div>
						<img className="img-fluid" src={StreamImg} alt="" />
						<img src={playImg} alt="" className="img-fluid" />
					</div>
				</div>
				<div className="stream-title-viewrs">
					<div className="container">
						<div className="streamTitle">SWORD ART ONLINE Last Recollection</div>
						<div className="stream-viewrs">
							<div className="container">
								<div className="viewrs-icon">
									<img src={groupImg} alt="" className="img-fluid" />
								</div>
								<div className="viewrs-number">4,540</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Stream;
