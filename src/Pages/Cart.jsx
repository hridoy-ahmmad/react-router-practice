import React, { useContext } from 'react';
import CartContext from '../Provider/CartContext';
import CartCard from '../Componenets/CartCard';

const Cart = () => {
    const { carts } = useContext(CartContext)
    console.log(carts);

    return (
        <div>
            <h2 className="text-2xl font-bold mb-6">Shopping Cart</h2>
            {
                carts.map(item => <CartCard key={item.id} item={item} />)
            }
        </div>
    );
};

export default Cart;