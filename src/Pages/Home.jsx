import React from 'react';
import Nav from '../Componenets/Nav';
import { useLoaderData } from 'react-router';
import PlantCard from '../Componenets/plantCard';

const Home = () => {
    const { plants } = useLoaderData()
    console.log(plants);

    return (
        <div className='max-w-7xl mx-auto p-3'>
            <h1 className='text-xl font-bold my-5'>All Plants</h1>
            <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-5'>
                {
                    plants.map(item => <PlantCard key={item.id} item={item} />)
                }
            </div>
        </div>
    );
};

export default Home;