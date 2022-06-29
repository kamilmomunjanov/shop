import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import CardSwiper from "./CardSwiper";

const Customers = () => {
    return (
        <section className="customers">
            <p className="customers__subtitle">Testimonials</p>
            <h2 className="customers__title">What Customers Say</h2>
            <div className="container">
                <div className="customers__box"></div>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={15}
                    slidesPerGroup={3}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[ Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide><CardSwiper/></SwiperSlide>
                    <SwiperSlide><CardSwiper/></SwiperSlide>
                    <SwiperSlide><CardSwiper/></SwiperSlide>
                </Swiper>
            </div>

        </section>
    );
};

export default Customers;