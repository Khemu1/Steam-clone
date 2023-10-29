import React from "react";
import Under10Card from "./under10-card";
function Under10CardsCont() {
	let pops = [];
	for (let i = 0; i < 4; i++) {
		pops.push(<Under10Card key={i} />);
	}
	return (
		<div className="Under10-CardsCont-cont">
			<div className="container">{pops}</div>
		</div>
	);
}
export default Under10CardsCont;
