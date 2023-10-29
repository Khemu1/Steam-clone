import React from "react";
import img from "../assets/imges/page_bg_english.jpg";
import "@fortawesome/fontawesome-free/css/all.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons"; // Use the correct icon name

function Search() {
	return (
		<div className=" page">
			<div className="container">
				<header>
					<div className="container">
						<ul>
							<li>
								<a>your store</a>
								<ul className="dropdown">
									<div>
										<li>
											<a>home</a>
										</li>
										<li>
											<a>community recommendations</a>
										</li>
										<li>
											<a>recently viewed</a>
										</li>
										<li>
											<a>steam curators</a>
										</li>
									</div>
								</ul>
							</li>
							<li className="noteworthy">
								<a>new & noteworthy</a>
								<ul className="dropdown">
									<div>
										<li className="head">
											<a>Popular</a>
										</li>
										<li>
											<a>top sellers</a>
										</li>
										<li>
											<a>most played</a>
										</li>
										<div className="endLine-cont">
											<div className="endLine"></div>
										</div>
										<li>
											<a>new releases</a>
										</li>
										<li className="head">
											<a>new & updates</a>
										</li>
										<li>
											<a>recently updated</a>
										</li>
									</div>

									<div>
										<li className="head">
											<a>PROMOS & EVENTS</a>
										</li>
										<li>
											<a>Special Offers</a>
										</li>
										<li>
											<a>Sale Events</a>
										</li>
										<div className="endLine-cont">
											<div className="endLine"></div>
										</div>
										<li>
											<a>Steam Replay 2022</a>
										</li>
										<li>
											<a>Steam Next Fest</a>
										</li>
									</div>
								</ul>
							</li>
							<li>
								<a>categories</a>
								<ul className="dropdown" style={{ left: "-250px", maxWidth: "1051.440px" }}>
									<div>
										<li className="head">
											<a>SPECIAL SECTIONS</a>
										</li>
										<li>
											<a>free to play</a>
										</li>
										<li>
											<a>demos</a>
										</li>
										<li>
											<a>early access</a>
										</li>
										<div className="endLine-cont">
											<div className="endLine"></div>
										</div>
										<li>
											<a>steam deck</a>
										</li>
										<li>
											<a>great on deck</a>
										</li>
										<div className="endLine-cont">
											<div className="endLine"></div>
										</div>
										<li>
											<a>Controller-Friendly</a>
										</li>
										<li>
											<a>Remote Play</a>
										</li>
										<div className="endLine-cont">
											<div className="endLine"></div>
										</div>
										<li>
											<a>VR Titles</a>
										</li>
										<li>
											<a>VR Hardware</a>
										</li>
										<div className="endLine-cont">
											<div className="endLine"></div>
										</div>
										<li>
											<a>Software</a>
										</li>
										<li>
											<a>Soundtracks</a>
										</li>
										<div className="endLine-cont">
											<div className="endLine"></div>
										</div>
										<li>
											<a>macOS</a>
										</li>
										<li>
											<a>SteamOS + Linux</a>
										</li>
										<li>
											<a>For PC Cafés</a>
										</li>
									</div>

									<div>
										<li className="head">
											<a>GENRES</a>
										</li>
										<li>
											<a>Action</a>
										</li>
										<li>
											<a>Arcade & Rhythm</a>
										</li>
										<li>
											<a>Fighting & Martial Arts</a>
										</li>
										<li>
											<a>First-Person Shooter</a>
										</li>
										<li>
											<a>Hack & Slash</a>
										</li>
										<li>
											<a>Platformer & Runner</a>
										</li>
										<li>
											<a>Third-Person Shooter</a>
										</li>
										<li style={{ marginBottom: "8px" }}>
											<a>shmup</a>
										</li>
										<li>
											<a>Adventure</a>
										</li>
										<li>
											<a>Adventure RPG</a>
										</li>
										<li>
											<a>Casual</a>
										</li>
										<li>
											<a>Hidden Object</a>
										</li>
										<li>
											<a>Metroidvania</a>
										</li>
										<li>
											<a>Puzzle</a>
										</li>
										<li>
											<a>Story-Rich</a>
										</li>
										<li>
											<a>Visual Novel</a>
										</li>
									</div>
									<div>
										<li style={{ marginTop: "38px" }}>
											<a>Role-Playing</a>
										</li>
										<li>
											<a>Action RPG</a>
										</li>
										<li>
											<a>Adventure RPG</a>
										</li>
										<li>
											<a>JRPG</a>
										</li>
										<li>
											<a>Party-Based</a>
										</li>
										<li>
											<a>Rogue-Like</a>
										</li>
										<li>
											<a>Strategy RPG</a>
										</li>
										<li style={{ marginBottom: "8px" }}>
											<a>Turn-Based</a>
										</li>
										<li>
											<a>Simulation</a>
										</li>
										<li>
											<a>Building & Automation</a>
										</li>
										<li>
											<a>Dating</a>
										</li>
										<li>
											<a>Hobby & Job</a>
										</li>
										<li>
											<a>Life & Immersive</a>
										</li>
										<li>
											<a>Sandbox & Physics</a>
										</li>
										<li>
											<a>Space & Flight</a>
										</li>
										<li>
											<a>Farming & Crafting</a>
										</li>
									</div>
									<div>
										<li style={{ marginTop: "38px" }}>
											<a>Strategy</a>
										</li>
										<li>
											<a>Card & Board</a>
										</li>
										<li>
											<a>City & Settlement</a>
										</li>
										<li>
											<a>Grand & 4X</a>
										</li>
										<li>
											<a>Military</a>
										</li>
										<li>
											<a>Real-Time Strategy</a>
										</li>
										<li>
											<a>Tower Defense</a>
										</li>
										<li style={{ marginBottom: "8px" }}>
											<a>Turn-Based Strategy</a>
										</li>
										<li>
											<a>Sports & Racing</a>
										</li>
										<li>
											<a>All Sports</a>
										</li>
										<li>
											<a>Fishing & Hunting</a>
										</li>
										<li>
											<a>Individual Sports</a>
										</li>
										<li>
											<a>Racing</a>
										</li>
										<li>
											<a>Racing Sim</a>
										</li>
										<li>
											<a>Sports Sim</a>
										</li>
										<li>
											<a>Team Sports</a>
										</li>
									</div>
									<div>
										<li className="head">
											<a>THEMES</a>
										</li>
										<li>
											<a>Anime</a>
										</li>
										<li>
											<a>Horror</a>
										</li>
										<li>
											<a>Mystery & Detective</a>
										</li>
										<li>
											<a>Open World</a>
										</li>
										<li>
											<a>Sci-Fi & Cyberpunk</a>
										</li>
										<li>
											<a>Space</a>
										</li>
										<li>
											<a>Survival</a>
										</li>
										<li className="head" style={{ marginBlock: "22px" }}>
											<a>PLAYER SUPPORT</a>
										</li>
										<li>
											<a>Co-Operative</a>
										</li>
										<li>
											<a>LAN</a>
										</li>
										<li>
											<a>Local & Party</a>
										</li>
										<li>
											<a>MMO</a>
										</li>
										<li>
											<a>Multiplayer</a>
										</li>
										<li>
											<a>Online Competitive</a>
										</li>
										<li>
											<a>Singleplayer</a>
										</li>
									</div>
								</ul>
							</li>
							<li>
								<a>points shop</a>
							</li>
							<li>
								<a>news</a>
							</li>
							<li>
								<a> labs</a>
							</li>
						</ul>
						<div className="input-cont">
							<input type="text" placeholder="search" />
							<div className="glass-cont">
								<FontAwesomeIcon icon={faSearch} /> {/* Use the correct icon */}
							</div>
						</div>
					</div>
				</header>
			</div>
		</div>
	);
}

export default Search;
