import React, { useState } from 'react';
import Nav from '../Componenets/Nav';
import { Outlet, useNavigation } from 'react-router';
import Loader from '../Componenets/Loader';
import CartContext from '../Provider/CartContext';

const MainLayout = () => {
    const navigation = useNavigation()
    const [carts, setCarts] = useState([])

    return (
        <CartContext.Provider value={{ carts, setCarts }} >
            <div>
                <Nav />
                {
                    navigation?.state === 'loading' ? <Loader /> : <Outlet />
                }

            </div>
        </CartContext.Provider>
    );
};

export default MainLayout;