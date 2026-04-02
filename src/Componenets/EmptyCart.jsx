import React from 'react';
import { useNavigate } from 'react-router';

const EmptyCart = () => {
    const nevigate = useNavigate()
    return (
        <div className="flex flex-col items-center justify-center min-h-[400px] p-6 bg-base-100 rounded-3xl border-2 border-dashed border-gray-200 mt-10">

            {/* Animated Icon or Illustration */}
            <div className="bg-gray-50 p-8 rounded-full mb-6">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-20 w-20 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                </svg>
            </div>

            {/* Text Content */}
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Your Cart is Empty!
            </h2>
            <p className="text-gray-500 text-center max-w-sm mb-8">
                Looks like you haven't added any green friends to your cart yet.
                Start exploring our collection to find the perfect plant for your home.
            </p>

            {/* Call to Action Button */}
            <button onClick={() => nevigate('/')} className="btn btn-primary btn-wide rounded-full font-bold shadow-lg hover:shadow-xl transition-all">
                Return to Shop
            </button>

        </div>
    );
};

export default EmptyCart;