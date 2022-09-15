import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

export default function FullScreen() {
  return (
    <div>
        <Swiper
            spaceBetween={10}
            slidesPerView={5}
            navigation={true}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            >
            <SwiperSlide>
                <img className="img-fluid" src="https://via.placeholder.com/350x150"/>
            </SwiperSlide>
            <SwiperSlide>
                <img className="img-fluid" src="https://via.placeholder.com/350x150"/>
            </SwiperSlide>
            <SwiperSlide>
                <img className="img-fluid" src="https://via.placeholder.com/350x150"/>
            </SwiperSlide>
            <SwiperSlide>
                <img className="img-fluid" src="https://via.placeholder.com/350x150"/>
            </SwiperSlide>
            <SwiperSlide>
                <img className="img-fluid" src="https://via.placeholder.com/350x150"/>
            </SwiperSlide>
            <SwiperSlide>
                <img className="img-fluid" src="https://via.placeholder.com/350x150"/>
            </SwiperSlide>
            <SwiperSlide>
                <img className="img-fluid" src="https://via.placeholder.com/350x150"/>
            </SwiperSlide>
            <SwiperSlide>
                <img className="img-fluid" src="https://via.placeholder.com/350x150"/>
            </SwiperSlide>
            <SwiperSlide>
                <img className="img-fluid" src="https://via.placeholder.com/350x150"/>
            </SwiperSlide>
            <SwiperSlide>
                <img className="img-fluid" src="https://via.placeholder.com/350x150"/>
            </SwiperSlide>
            <SwiperSlide>
                <img className="img-fluid" src="https://via.placeholder.com/350x150"/>
            </SwiperSlide>
            <SwiperSlide>
                <img className="img-fluid" src="https://via.placeholder.com/350x150"/>
            </SwiperSlide>
            <SwiperSlide>
                <img className="img-fluid" src="https://via.placeholder.com/350x150"/>
            </SwiperSlide>
            <SwiperSlide>
                <img className="img-fluid" src="https://via.placeholder.com/350x150"/>
            </SwiperSlide>
            <SwiperSlide>
                <img className="img-fluid" src="https://via.placeholder.com/350x150"/>
            </SwiperSlide>
            <SwiperSlide>
                <img className="img-fluid" src="https://via.placeholder.com/350x150"/>
            </SwiperSlide>
        </Swiper>
    </div>
  )
}
