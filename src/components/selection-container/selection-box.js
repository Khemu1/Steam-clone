import React from "react";
import Box from "./selection-boxs-container";
import Box2 from "./selection-boxs-container2";
import Box3 from "./selection-boxs-container3";
import Box4 from "./selection-boxs-container4";
import img from "./../../assets/imges/ico_info.png";
function SelectionBox() {
	const [activeButton, setActiveButton] = React.useState("New & Trending");
	let arr1 = [];
	for (let i = 0; i < 10; i++) {
		arr1.push(<Box />);
	}
	let arr2 = [];
	for (let i = 0; i < 10; i++) {
		arr2.push(<Box2 />);
	}
	let arr3 = [];
	for (let i = 0; i < 10; i++) {
		arr3.push(<Box3 />);
	}
	let arr4 = [];
	for (let i = 0; i < 10; i++) {
		arr4.push(<Box4 />);
	}
	const handleButtonClick = (buttonName) => {
		setActiveButton(buttonName);
	};
	return (
		<div className="buttons-selection-box">
			<div className="container">
				<div className="button-group">
					<div className="container">
						<button className={activeButton === "New & Trending" ? "active-button" : "non-active"} onClick={() => handleButtonClick("New & Trending")}>
							New & Trending
						</button>
						<button className={activeButton === "Top Sellers" ? "active-button" : "non-active"} onClick={() => handleButtonClick("Top Sellers")}>
							Top Sellers
						</button>
						<button className={activeButton === "Popular Upcoming" ? "active-button" : "non-active"} onClick={() => handleButtonClick("Popular Upcoming")}>
							Popular Upcoming
						</button>
						<button className={activeButton === "Specials" ? "active-button" : "non-active"} onClick={() => handleButtonClick("Specials")}>
							Specials
						</button>
					</div>
				</div>
				{activeButton === "New & Trending" && (
					<div className="selection-boxs-cont">
						<div className="cat-title">
							<div>
								See more:<span>new releases</span>
							</div>
						</div>
						<div className="container">{arr1}</div>
					</div>
				)}
				{activeButton === "Top Sellers" && (
					<div className="selection-boxs-cont">
						<div className="checkBox">
							<div className="container">
								<div>
									<label>
										<input type="checkbox" style={{ marginRight: "5px" }} />
									</label>
									Include free to play items
								</div>
								<div className="show-text">
									{" "}
									<img src={img} alt="" className="img-fluid" style={{ opacity: "90%" }} />
								</div>
							</div>
						</div>
						<div className="selection-boxs-cont">
							<div className="cat-title">
								<div>
									See more:<span>Top Sellers</span>
								</div>
							</div>
						</div>
						<div className="container">{arr2}</div>
					</div>
				)}
				{activeButton === "Popular Upcoming" && (
					<div className="selection-boxs-cont">
						<div className="cat-title">
							<div>
								See more:<span>Popular Upcoming</span>
							</div>
						</div>
						<div className="container">{arr3}</div>
					</div>
				)}
				{activeButton === "Specials" && (
					<div className="selection-boxs-cont">
						<div className="cat-title">
							<div>
								See more:<span>Specials</span>
							</div>
						</div>
						<div className="container">{arr4}</div>
					</div>
				)}
			</div>
		</div>
	);
}
export default SelectionBox;
