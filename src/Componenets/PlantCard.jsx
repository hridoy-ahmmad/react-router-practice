import React from 'react';

const PlantCard = ({ item }) => {
    console.log(item);
    const { price, name, image, description, category } = item

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
                        <h2 class="card-title text-xl font-bold text-gray-800">Mango Tree</h2>
                        <div class="badge badge-secondary badge-outline mt-1 italic text-xs">Fruit Tree</div>
                    </div>
                    <div class="text-lg font-semibold text-green-600">
                        Price: {price} tk
                    </div>
                </div>
                <div class="card-actions justify-end mt-4">
                    <button class="btn btn-primary btn-sm px-6">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default PlantCard;