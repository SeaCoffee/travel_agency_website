import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import MainLayout from "./components/layouts/MainLayout";

export const App = () => {
    return (
        <RouterProvider router={router} />
    );
};

export default App;



