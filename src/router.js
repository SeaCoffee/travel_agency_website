import { createBrowserRouter } from 'react-router-dom';

import {HomePage} from "./components/pages/HomePage";
import {TourDetailsPage} from "./components/pages/TourDetailsPage";
import {HotelDetailsPage} from "./components/pages/HotelDetailsPage";
import {ArticlePage} from "./components/pages/ArticlePage";
import {ArticlesPage} from "./components/pages/ArticlesPage";
import MainLayout from "./components/layouts/MainLayout";
import {GroupArticlesPage} from "./components/pages/GroupArticlesPage";
import {ServicesPage} from "./components/pages/ServicesPage";
import GeneralSearchPage from "./components/GeneralSearch/GeneralSearchPage";
import BusToursSearchPage from "./components/BusTourSearchPage/BusTourSearchPage";
import {AboutServicesPage} from "./components/AboutServices/AboutServices";
import {PopularResorts} from "./components/PopularResorts/PopularResorts";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            { path: '/', element: <HomePage />, index: true },
            {
                path: 'general-search',
                element: <GeneralSearchPage />
            },
            {
                path: 'bus-tours-search',
                element: <BusToursSearchPage />
            },
            {
                path: '/articles/category/:category',
                element: <GroupArticlesPage />
            },
            { path: 'hotel', element: <HotelDetailsPage /> },
            { path: 'articles', element: <ArticlesPage /> },
            { path: 'article/:articleId', element: <ArticlePage /> },
            { path: 'services', element: <AboutServicesPage /> },
            {path: 'popular', element: <PopularResorts/> },
        ],
    },
]);
