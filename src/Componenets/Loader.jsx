import React from 'react';
import { BeatLoader } from 'react-spinners';

const Loader = () => {
    return (
        <div className='flex h-screen justify-center items-center'>
            <BeatLoader
                color="#f40000"
                loading
                margin={4}
                radius={8}
                speedMultiplier={2}
                width={5}
            />
        </div>
    );
};

export default Loader;