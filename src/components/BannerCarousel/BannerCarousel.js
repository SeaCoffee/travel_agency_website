import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from 'react';
import Slider from 'react-slick';
import { Paper } from '@mui/material';

import './banners.css'
import LazyLoad from 'react-lazyload';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';





const CarouselComponent = ({ banners }) => {
    return (
        <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}  // Расстояние между слайдами
            slidesPerView={3}  // Количество слайдов, видимых одновременно
            loop={true}
            autoplay={{
                delay: 3700,
                disableOnInteraction: false
            }}
            pagination={{
                clickable: true
            }}
            style={{ width: '95%' }}  // Убедитесь, что слайдер занимает желаемую ширину
        >
            {banners.map((banner, index) => (
                <SwiperSlide key={index}>
                    <img src={banner} alt={`Баннер ${index + 1}`} style={{ width: '100%', height: '100%' }}/>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};


export default CarouselComponent;
