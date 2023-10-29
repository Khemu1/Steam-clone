import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import "@fortawesome/fontawesome-free/css/all.css";
import CatCont from "./cats-cont";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

function Cats() {
	const catCont = [];
	for (let i = 0; i < 5; i++) {
		catCont.push(
			<SwiperSlide key={i}>
				<CatCont />
			</SwiperSlide>
		);
	}
	return (
		<div className="cats">
			<div className="container">
				<div className="cat-title">
					<div>BROWSE BY CATEGORY</div>
				</div>
				<Swiper modules={[Navigation, Autoplay, EffectFade, Pagination]} slidesPerView={1} spaceBetween={50} allowTouchMove={false} loop={true} navigation pagination={{ clickable: true }} onSwiper={(swiper) => console.log(swiper)} onSlideChange={() => console.log("slide change")}>
					{catCont}
				</Swiper>
			</div>
		</div>
	);
}

export default Cats;
