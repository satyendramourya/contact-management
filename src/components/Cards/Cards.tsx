// Importing React and the useQuery hook from react-query
import React from 'react';
import { useQuery } from 'react-query';

// Creating an interface for the WorldData object
interface WorldData {
    deaths: number;
    recovered: number;
    cases: number;
}

// Defining the Cards component as a functional component
const Cards: React.FC = () => {
    // Fetching data using the useQuery hook and setting it to the worldData constant
    const { data: worldData } = useQuery<WorldData>('worldData', async () => {
        const response = await fetch('https://disease.sh/v3/covid-19/all');
        const data = await response.json();
        return data;
    });

    // Rendering the component with the fetched data
    return (
        <div>
            {worldData && (
                <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-red-500 p-4 rounded-lg flex flex-row justify-between md:flex-col">
                        <h1 className="text-2xl text-white">Deaths</h1>
                        <h1 className="text-2xl font-semibold text-white">{worldData.deaths}</h1>
                    </div>
                    <div className="bg-green-500 p-4 rounded-lg flex flex-row justify-between md:flex-col">
                        <h1 className="text-xl text-white">Recovered</h1>
                        <h1 className="text-2xl font-semibold text-white">{worldData.recovered}</h1>
                    </div>
                    <div className="bg-blue-500 p-4 rounded-lg flex flex-row justify-between md:flex-col">
                        <h1 className="text-xl text-white">Cases</h1>
                        <h1 className="text-2xl font-semibold text-white">{worldData.cases}</h1>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cards;
