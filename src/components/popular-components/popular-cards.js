import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import "@fortawesome/fontawesome-free/css/all.css";
import PopularCont from "./popular-cards-cont";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

function PopularCards() {
	const popCont = [];
	for (let i = 0; i < 4; i++) {
		popCont.push(
			<SwiperSlide key={i}>
				<PopularCont />
			</SwiperSlide>
		);
	}
	return (
		<div className="popular">
			<div className="container">
				<div className="cat-title">
					<div>POPULAR VR GAMES</div>
					<div>browes all</div>
				</div>
				<Swiper modules={[Navigation, Autoplay, EffectFade, Pagination]} slidesPerView={1} allowTouchMove={false} loop={true} effect={"fade"} navigation pagination={{ clickable: true }} onSwiper={(swiper) => console.log(swiper)} onSlideChange={() => console.log("slide change")}>
					{popCont}
				</Swiper>
			</div>
		</div>
	);
}

export default PopularCards;
