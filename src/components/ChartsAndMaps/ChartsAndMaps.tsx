// Importing React library and necessary components from the index file
import React from 'react';
import { LineGraph, Cards, Map } from '../index';

// Defining a functional component named ChartsAndMaps
const ChartsAndMaps: React.FC = () => {
    // Return the JSX content to be rendered
    return (
        // A div element with flex layout and gap-4 spacing between its children
        <div className='flex flex-col gap-4  mt-11 md:mt-8'>
            {/* A header with a title, some margins, and some styling */}
            <h1 className='m-4 font-semibold text-gray-600 text-center '>World Data</h1>
            {/* A component that renders card-based data */}
            <Cards />
            {/* A component that renders a line graph */}
            <LineGraph />
            {/* A component that renders a world map */}
            <Map />
        </div>
    );
};

// Exporting the ChartsAndMaps component as the default export of this module
export default ChartsAndMaps;