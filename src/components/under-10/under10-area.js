import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import "@fortawesome/fontawesome-free/css/all.css";
import Under10CardsCont from "./under-10-cards-cont";
import Under10Card from "./under10-card";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

function Under10Area() {
	const arr = [];
	for (let i = 0; i < 2; i++) {
		arr.push(
			<SwiperSlide key={i}>
				<Under10CardsCont />
			</SwiperSlide>
		);
	}
	return (
		<div className="Under-10-area">
			<div className="container">
				<div className="cat-title">
					<div>UNDER $10 USD</div>
					<div>
						<div>UNDER $10 USD</div>
						<div>UNDER 5 USD</div>
					</div>
				</div>

				<Swiper modules={[Navigation, Autoplay, EffectFade, Pagination]} slidesPerView={1} slidesPerGroup={2} loop={true} allowTouchMove={false} navigation pagination={{ clickable: true }} onSwiper={(swiper) => console.log(swiper)} onSlideChange={() => console.log("slide change")}>
					{arr}
				</Swiper>
			</div>
		</div>
	);
}

export default Under10Area;
