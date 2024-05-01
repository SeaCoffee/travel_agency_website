import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layouts/MainLayout';
import {HomePage} from "./components/pages/HomePage";
import GeneralSearchPage from './components/GeneralSearch/GeneralSearchPage';
import BusToursSearchPage from './components/BusTourSearchPage/AdriaticTourSearchPage';
import {UsefulArticlesPage} from "./components/pages/UsefulArticlesPage";
import {ArticlePage} from "./components/pages/ArticlePage";
import {PopularResortsPage} from "./components/pages/PopularResortsPage";
import {AboutServicesPage} from "./components/AboutServices/AboutServices";
import AccordSearchPage from './components/BusTourSearchPage/AccordTourSearchPage';

export const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path="general-search" element={<GeneralSearchPage />} />
                    <Route path="bus-tours-search" element={<BusToursSearchPage />} />
                    <Route path="useful" element={<UsefulArticlesPage />} />
                    <Route path="useful/:articleId" element={<ArticlePage />} />
                    <Route path="resorts" element={<PopularResortsPage />} />
                    <Route path="resorts/:articleId" element={<ArticlePage />} />
                    <Route path="services" element={<AboutServicesPage />} />
                    <Route path="accord" element={<AccordSearchPage />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default App;




