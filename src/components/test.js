import React, { useState } from "react";

function ButtonGroup() {
	// Initialize a state variable to keep track of the active button.
	const [activeButton, setActiveButton] = useState(null);

	// Create a function to handle button clicks.
	const handleButtonClick = (buttonName) => {
		// Update the active button when a button is clicked.
		setActiveButton(buttonName);
	};

	return (
		<div className="button-group">
			<div className="container">
				<button className={activeButton === "button1" ? "active-button" : "non-active"} onClick={() => handleButtonClick("button1")}>
					New & Trending
				</button>
				<button className={activeButton === "button2" ? "active-button" : "non-active"} onClick={() => handleButtonClick("button2")}>
					Top Sellers
				</button>
				<button className={activeButton === "button3" ? "active-button" : "non-active"} onClick={() => handleButtonClick("button3")}>
					Popular Upcoming
				</button>
				<button className={activeButton === "button4" ? "active-button" : "non-active"} onClick={() => handleButtonClick("button4")}>
					Specials
				</button>
			</div>
		</div>
	);
}

export default ButtonGroup;
