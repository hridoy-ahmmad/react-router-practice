import { Delete, Trash } from 'lucide-react';
import React, { useContext } from 'react';
import CartContext from '../Provider/CartContext';

const CartCard = ({ item }) => {
    const { carts, setCarts } = useContext(CartContext)
    const handleRemove = () => {
        const filterd = carts.filter(i => i.id !== item.id)
        setCarts(filterd)
    }
    return (
        <div className="max-w-3xl mx-auto p-4">
            {/* Table Header (Optional) */}
            {/* Cart Item Card */}
            <div className="flex items-center justify-between bg-white p-4 shadow-sm border border-gray-100 rounded-2xl mb-4 hover:shadow-md transition-shadow">

                {/* Left Side: Image & Name */}
                <div className="flex items-center gap-4">
                    <div className="avatar">
                        <div className="mask mask-squircle w-20 h-20">
                            <img
                                src={item.image}
                                alt={item.name}
                            />
                        </div>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg text-gray-800">{item.name}</h3>
                        <span className="badge badge-ghost badge-sm italic">{item.category}</span>
                    </div>
                </div>

                {/* Right Side: Price & Delete Action */}
                <div className="flex items-center gap-8">
                    <p className="text-xl font-semibold text-gray-700">{item.price}tk</p>

                    <button
                        onClick={handleRemove}
                        className="btn btn-ghost btn-circle text-error hover:bg-red-50"
                        title="Delete Item" >
                        <Trash />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartCard;