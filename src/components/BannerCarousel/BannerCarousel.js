import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';


import './banners.css'


import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';



const CarouselComponent = ({ banners }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedBanner, setSelectedBanner] = useState(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // предположим, что мобильная версия это < 768px

    const toggleModal = (banner) => {
        if (isMobile) {
            setSelectedBanner(banner);
            setModalIsOpen(!modalIsOpen);
        }
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);

        // Очистка подписки
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <Swiper
                modules={[Autoplay, Pagination]}
                spaceBetween={30}
                slidesPerView={3}
                loop={true}
                autoplay={{
                    delay: 3700,
                    disableOnInteraction: false
                }}
                pagination={{
                    clickable: true
                }}
                style={{ width: '95%', zIndex: 1 }}
            >
                {banners.map((banner, index) => (
                    <SwiperSlide key={index}>
                        <img src={banner} alt={`Баннер ${index + 1}`} style={{ width: '100%', height: '100%' }} onClick={() => toggleModal(banner)} />
                    </SwiperSlide>
                ))}
            </Swiper>
            {isMobile && (
                <div style={{ // Родительский контейнер для модального окна
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={() => setModalIsOpen(false)}
                        contentLabel="Модальное окно с баннером"
                        style={{
                            overlay: {
                                backgroundColor: 'rgba(0, 0, 0, 0.75)',
                                zIndex: 1000,

                            },
                            content: {
                                marginLeft: '-20px',
                                marginTop:'200px',
                                width: '90vw',
                                maxWidth: '600px',
                                height: '90vw',
                                maxHeight: '600px',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                border: 'none',
                                background: 'white',
                                borderRadius: '10px',
                                outline: 'none',
                                padding: '20px',
                                overflow: 'hidden'
                            }
                        }}
                    >
                        <img src={selectedBanner} alt="Выбранный баннер" style={{ width: '100%', height: 'auto' }} onClick={() => setModalIsOpen(false)} />
                    </Modal>
                </div>
            )}
        </>
    );

};

export default CarouselComponent;
