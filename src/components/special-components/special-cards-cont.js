import React from "react";
import SpCard from "./special-card";
function SpCardCont() {
	let sp = [];
	for (let i = 0; i < 6; i++) {
		sp.push(<SpCard key={i} />);
	}
	return (
		<div className="sp-card-cont">
			<div className="container">{sp}</div>
		</div>
	);
}
export default SpCardCont;
