import React from "react";
import Stream from "./streams";

function StreamArea() {
	let arr = [];
	for (let i = 0; i < 6; i++) {
		arr.push(<Stream />);
	}
	return (
		<div className="stream-area">
			<div className="container">
				<div className="cat-title">
					<div>GAMES STREAMING NOW</div>
					<div>view all</div>
				</div>
				<div className="streams-cont">
					<div className="container">{arr}</div>
				</div>
			</div>
		</div>
	);
}
export default StreamArea;
