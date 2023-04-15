import React from 'react';
import { LineGraph, Cards, Map } from '../index';

const ChartsAndMaps: React.FC = () => {
    return (
        <div className='flex flex-col gap-4  mt-11 md:mt-8'>
            <h1 className='m-4 font-semibold text-gray-600 text-center '>World Data</h1>
            <Cards />
            <LineGraph />
            <Map />
        </div>
    );
};

export default ChartsAndMaps;
