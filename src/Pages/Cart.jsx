import React, { useContext } from 'react';
import CartContext from '../Provider/CartContext';
import CartCard from '../Componenets/CartCard';
import EmptyCart from '../Componenets/EmptyCart';

const Cart = () => {
    const { carts } = useContext(CartContext)
    console.log(carts);

    return (
        <div>
            <h2 className="text-2xl font-bold mb-6 text-center my-5">Shopping Cart</h2>
            {
                carts.length === 0 ? <EmptyCart/> : carts.map(item => <CartCard key={item.id} item={item} />)
            }
        </div>
    );
};

export default Cart;