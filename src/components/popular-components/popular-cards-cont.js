import React from "react";
import PopularCard from "./popular-card";
function PopularCont() {
	let pops = [];
	for (let i = 0; i < 4; i++) {
		pops.push(<PopularCard key={i} />);
	}
	return (
		<div className="popular-cont">
			<div className="container">{pops}</div>
		</div>
	);
}
export default PopularCont;
