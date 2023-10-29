import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "@fortawesome/fontawesome-free/css/all.css";
import FeatCard from "./featured-data";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
function Veiw() {
	const featuredCards = []; // Create an array to hold the FeatCard components

	for (let i = 0; i < 5; i++) {
		featuredCards.push(
			<SwiperSlide key={i}>
				{" "}
				{/* Wrap each FeatCard in a SwiperSlide */}
				<FeatCard />
			</SwiperSlide>
		);
	}
	return (
		<div className="feat">
			<div className="container">
				<div className="feat-title">FEATURED & RECOMMENDED</div>
				<Swiper
					// install Swiper modules
					modules={[Navigation, Pagination, Autoplay]}
					spaceBetween={50}
					slidesPerView={1}
					autoplay={{ delay: 3000 }}
					loop={true}
					navigation
					pagination={{ clickable: true }}
					onSwiper={(swiper) => console.log(swiper)}
					onSlideChange={() => console.log("slide change")}>
					{featuredCards}
				</Swiper>
			</div>
		</div>
	);
}
export default Veiw;
