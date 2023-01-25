import React from 'react'
import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Home.scss"
import "./styles.css"

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
const HeroSec = () => {
    return (
        <div className='hero-sec'>
           
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='img'>
                    </div>
                    <div className='img-desc'>
                        <h3>Floral</h3>
                        <h1>Excellent bouquets for you</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='second-img'>
                    </div>
                    <div className='img-desc'>
                        <h3>Floral</h3>
                        <h1>Excellent bouquets for you</h1>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default HeroSec
