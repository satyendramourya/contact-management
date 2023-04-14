import React from 'react';
import { useQuery } from 'react-query';
import LineGraph from '../LineGraph/LineGraph';

const ChartsAndMaps: React.FC = () => {


    return (
        <>
            {/* <div>
                <Line data={chartData} />
            </div>
            <div style={{ height: '500px', width: '100%' }}>
                <MapContainer center={[0, 0]} zoom={2} scrollWheelZoom={false}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    {countryMarkers}
                </MapContainer>
            </div> */}
            <h1>bla</h1>
            <div className=''>
                <h1>World Data</h1>
                {/* {worldData && (
                    <>
                        <p>Total Cases: {worldData.cases}</p>
                        <p>Total Deaths: {worldData.deaths}</p>
                        <p>Total Recovered: {worldData.recovered}</p>
                    </>
                )} */}

                <LineGraph />
            </div>
        </>
    );
};

export default ChartsAndMaps;
