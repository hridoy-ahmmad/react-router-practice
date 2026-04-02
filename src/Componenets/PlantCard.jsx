import React from 'react';
import { Link } from 'react-router';

const PlantCard = ({ item }) => {
    const { price, name, image, id } = item

    return (
        <div class="card bg-base-100  shadow-xl border border-gray-200">
            <figure class="px-4 pt-4">
                <img
                    src={image}
                    alt={name}
                    class="rounded-xl h-52 w-full object-cover" />
            </figure>
            <div class="card-body">
                <div class="flex justify-between items-start">
                    <div>
                        <h2 class="card-title text-xl font-bold text-gray-800">{name}</h2>
                    </div>
                    <div class="text-lg font-semibold text-green-600">
                        Price: {price} tk
                    </div>
                </div>
                <div class="card-actions justify-end mt-4">
                    <Link to={`/plant_details/${id}`} class="btn btn-primary btn-sm px-6">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default PlantCard;