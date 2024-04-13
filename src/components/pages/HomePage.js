import {MainMenu} from "../MainMenu/MainMenu";
import CarouselComponent from "../BannerCarousel/BannerCarousel";
import {TourRequestForm} from "../TourRequestForm/TourRequestForm";
import ContactButtons from "../ContactButtons/ContactButtons";
import Footer from "../Footer/Footer";

import banner1 from '../banners/banner1.jpg';
import banner2 from '../banners/banner2.jpg';
import banner3 from '../banners/banner3.jpg';
import banner4 from '../banners/banner4.jpg';
import banner5 from '../banners/banner5.jpg';
import banner6 from '../banners/banner6.jpg';


export const HomePage = () => {
    const banners1 = [banner1, banner2, banner3];
    const banners2 = [banner4, banner5, banner6];

    return (
        <div>
            <ContactButtons/>
            <CarouselComponent banners={banners1} />
            <TourRequestForm/>
            <MainMenu />
            <CarouselComponent banners={banners2} />
        </div>
    );
};