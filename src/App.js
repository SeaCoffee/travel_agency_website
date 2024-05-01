import React from 'react';
import { HashRouter as Router, RouterProvider } from 'react-router-dom';
import { router } from './router';

export const App = () => {
    return (
        <Router>
            <RouterProvider router={router} />
        </Router>
    );
};

export default App;



