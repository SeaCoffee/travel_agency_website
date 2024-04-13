import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from 'react';
import Slider from 'react-slick';
import { Paper } from '@mui/material';

import './banners.css'




const CarouselComponent = ({ banners }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
    };

    return (
        <Slider {...settings}>
            {banners.map((banner, index) => (
                <Paper key={index} elevation={3}>
                    <img src={banner} alt={`Баннер ${index + 1}`} className="banner-img" />
                </Paper>
            ))}
        </Slider>
    );
};

export default CarouselComponent;
