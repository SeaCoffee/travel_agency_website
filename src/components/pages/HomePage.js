import {MainMenu} from "../MainMenu/MainMenu";
import CarouselComponent from "../BannerCarousel/BannerCarousel";
import {TourRequestForm} from "../TourRequestForm/TourRequestForm";
import ContactButtons from "../ContactButtons/ContactButtons";

import banner1 from '../banners/banner1.jpg';
import banner2 from '../banners/banner2.jpg';
import banner3 from '../banners/banner3.jpg';
import banner4 from '../banners/banner4.jpg';
import banner5 from '../banners/banner5.jpg';
import banner6 from '../banners/banner6.jpg';
import banner7 from '../banners/banner7.jpg';
import banner8 from '../banners/banner8.jpg';
import banner9 from '../banners/banner9.jpg';
import banner10 from '../banners/banner10.jpg';
import banner11 from '../banners/banner11.jpg';
import banner12 from '../banners/banner12.jpg';
import banner13 from '../banners/banner13.jpg';
import banner14 from '../banners/banner14.jpg';
import banner15 from '../banners/banner15.jpg';
import banner16 from '../banners/banner16.jpg';
import banner17 from '../banners/banner17.jpg';
import banner18 from '../banners/banner18.jpg';
import banner19 from '../banners/banner19.jpg';
import banner20 from '../banners/banner20.jpg';
import banner21 from '../banners/banner21.jpg';

import OutlinedCardComponent from "../InfoCards/infoCards";
import {CountrieslSearchPage} from "./CountrieslSearchPage";
import AdriaticToursSearchPage from "../BusTourSearchPage/AdriaticTourSearchPage";




export const HomePage = () => {
    const banners1 = [banner1, banner2, banner3, banner4, banner5, banner6, banner7, banner8, banner9];
    const banners2 = [banner10, banner11, banner12, banner13, banner14, banner15, banner16, banner17, banner18, banner19, banner20, banner21];

    return (
        <div>
            <OutlinedCardComponent/>
            <ContactButtons/>
            <TourRequestForm/>
            <CarouselComponent banners={banners1} />
            <CountrieslSearchPage />
            <CarouselComponent banners={banners2} />
            <AdriaticToursSearchPage />

        </div>
    );
};