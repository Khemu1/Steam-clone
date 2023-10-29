import React from "react";
function Navbar() {
	return (
		<nav>
			<div className="container">
				<div className="nav-buttons">
					<a className="logo">
						<img className="img-fluid" src="https://store.akamai.steamstatic.com/public/shared/images/header/logo_steam.svg?t=962016" alt="" />
					</a>
					<ul>
						<li>
							<a href="#">store</a>
							<ul className="dropdown">
								<li>
									<a href="#">home</a>
								</li>
								<li>
									<a href="#">discovery queue</a>
								</li>
								<li>
									<a href="#">wishlist</a>
								</li>
								<li>
									<a href="#">points shop</a>
								</li>
								<li>
									<a href="#">news</a>
								</li>
								<li>
									<a href="#">stats</a>
								</li>
							</ul>
						</li>
						<li>
							<a href="#">Community</a>
							<ul className="dropdown">
								<li>
									<a href="#">home</a>
								</li>
								<li>
									<a href="#">discussions</a>
								</li>
								<li>
									<a href="#">workshop</a>
								</li>
								<li>
									<a href="#">market</a>
								</li>
								<li>
									<a href="#">broadcast</a>
								</li>
							</ul>
						</li>
						<li>about</li>
						<li>support</li>
					</ul>
				</div>
				<div className="login-buttons">
					<ul>
						<li> install Steam</li>
						<li> login</li>
						<li> language</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
export default Navbar;
