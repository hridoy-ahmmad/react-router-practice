import React from 'react';
import Nav from '../Componenets/Nav';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div>
            <Nav />
            <Outlet />
        </div>
    );
};

export default MainLayout;