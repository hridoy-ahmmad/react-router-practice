import React from 'react';
import Nav from '../Componenets/Nav';
import { Outlet, useNavigation } from 'react-router';
import Loader from '../Componenets/Loader';

const MainLayout = () => {
    const navigation = useNavigation()

    return (
        <div>
            <Nav />
            {
                navigation?.state === 'loading' ? <Loader /> : <Outlet />
            }

        </div>
    );
};

export default MainLayout;