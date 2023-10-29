import React from "react";
import Navbar from "./navbar";
import Search from "./search-bar-area";
import Veiw from "./featured-components/featured ";
import Sp from "./special-components/special";
import Cats from "./cat-components/cats";
import BrowseSteam from "./browse-steam-components/browse-team";
import PopularCards from "./popular-components/popular-cards";
import Presonlized from "./presonlized";
import SelectionBox from "./selection-container/selection-box";
import StreamArea from "./stream components/stream-area";
import Under10Area from "./under-10/under10-area";
function Website() {
	return (
		<div className="parent">
			<div className="container-fluid">
				<div className="upper">
					<div className="container-fluid">
						<Navbar />
						<Search />
						<Veiw />
						<div className="event"></div>
						<Sp />
						<Cats />
						<Presonlized />
						<BrowseSteam />
						<PopularCards />
					</div>
				</div>
				<div className="lower">
					<div className="container">
						<SelectionBox />
						<StreamArea />
						<Under10Area />
					</div>
				</div>
			</div>
		</div>
	);
}
export default Website;
