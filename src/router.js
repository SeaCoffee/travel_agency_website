import { createBrowserRouter } from 'react-router-dom';

import {HomePage} from "./components/pages/HomePage";
import {HotelDetailsPage} from "./components/pages/HotelDetailsPage";
import {ArticlePage} from "./components/pages/ArticlePage";
import {PopularResortsPage} from "./components/pages/PopularResortsPage";
import MainLayout from "./components/layouts/MainLayout";
import GeneralSearchPage from "./components/GeneralSearch/GeneralSearchPage";
import BusToursSearchPage from "./components/BusTourSearchPage/AdriaticTourSearchPage";
import {AboutServicesPage} from "./components/AboutServices/AboutServices";
import {UsefulArticlesPage} from "./components/pages/UsefulArticlesPage";
import AccordSearchPage from "./components/BusTourSearchPage/AccordTourSearchPage";





export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            { path: '/', element: <HomePage />, index: true },
            { path: 'general-search', element: <GeneralSearchPage /> },
            { path: 'bus-tours-search', element: <BusToursSearchPage  /> },
            { path: 'hotel', element: <HotelDetailsPage  /> },
            { path: 'useful', element: <UsefulArticlesPage  /> },
            { path: 'useful/:articleId', element: <ArticlePage  /> },
            { path: 'resorts', element: <PopularResortsPage  /> },
            { path: 'resorts/:articleId', element: <ArticlePage  /> },
            { path: 'services', element: <AboutServicesPage  /> },
            { path: 'accord', element: <AccordSearchPage  /> },
        ],
    },
]);

