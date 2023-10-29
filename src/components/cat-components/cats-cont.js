import React from "react";
import Cat from "./cat";
function CatCont() {
	let cat = [];
	for (let i = 0; i < 4; i++) {
		cat.push(<Cat key={i} />);
	}
	return (
		<div className="cats-cont">
			<div className="container">{cat}</div>
		</div>
	);
}
export default CatCont;
