import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import "@fortawesome/fontawesome-free/css/all.css";
import SpCardCont from "./special-cards-cont";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

function Sp() {
	const SpCardsCont = [];
	for (let i = 0; i < 5; i++) {
		SpCardsCont.push(
			<SwiperSlide key={i}>
				<SpCardCont />
			</SwiperSlide>
		);
	}
	return (
		<div className="sp">
			<div className="container">
				<div className="cat-title">
					<div>SPECIAL OFFERS</div>
					<div>browse more</div>
				</div>
				<Swiper modules={[Navigation, Autoplay, EffectFade, Pagination]} effect="fade" spaceBetween={0} slidesPerView={`auto`} allowTouchMove={false} loop={true} navigation pagination={{ clickable: true }} onSwiper={(swiper) => console.log(swiper)} onSlideChange={() => console.log("slide change")}>
					{SpCardsCont}
				</Swiper>
			</div>
		</div>
	);
}

export default Sp;
