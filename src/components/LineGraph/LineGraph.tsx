import React from 'react'
import { useQuery } from 'react-query';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);


type HistoricalData = {
    cases: Record<string, number>;
    deaths: Record<string, number>;
    recovered: Record<string, number>;
};



ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement)
const GRAPH_API_URL = 'https://disease.sh/v3/covid-19/historical/all?lastdays=all';

const LineGraph = () => {

    const { data: graphData } = useQuery<HistoricalData>('worldData', () =>
        fetch(GRAPH_API_URL).then((res) => res.json())
    );
    console.log('graphData', graphData);

    const chartData = {
        labels: Object.keys(graphData?.cases || {}),
        datasets: [
            {
                label: 'Cases',
                data: Object.values(graphData?.cases || {}),
                borderColor: 'rgba(0, 0, 255, 0.5)',
                backgroundColor: 'rgba(0, 0, 255, 0.5)',
                fill: true,
            },
            {
                label: 'Recovered',
                data: Object.values(graphData?.recovered || {}),
                borderColor: 'rgba(0, 255, 0, 0.5)',
                backgroundColor: 'rgba(0, 255, 0, 0.5)',
                fill: true,
            },
            {
                label: 'Deaths',
                data: Object.values(graphData?.deaths || {}),
                borderColor: 'rgba(255, 0, 0, 0.5)',
                backgroundColor: 'rgba(255, 0, 0, 0.5)',
                fill: true,
            },
        ],
    };



    return (
        <div>
            <h1 className='bg-pink-300'>line icon</h1>
            <Line data={chartData} />
        </div>
    );
};

export default LineGraph;
