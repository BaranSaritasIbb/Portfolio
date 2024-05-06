import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashboardPage from '../pages/dashboard/Dashboard';
import DetailPage from '../pages/detailPage/DetailPage';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DashboardPage />} />
                <Route path="/detail" element={<DetailPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
