// Import required libraries and components
import React from 'react'
import { useQuery } from 'react-query';
import { ChartOptions } from 'chart.js';
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

// Register ChartJS components
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

// Define a type for historical data
type HistoricalData = {
    cases: Record<string, number>;
    deaths: Record<string, number>;
    recovered: Record<string, number>;
};

// Define the API endpoint URL
const GRAPH_API_URL = 'https://disease.sh/v3/covid-19/historical/all?lastdays=all';

// Define the LineGraph component
const LineGraph = () => {
    // Fetch data from the API endpoint using react-query
    const { data: graphData } = useQuery<HistoricalData>('graphData', () =>
        fetch(GRAPH_API_URL).then((res) => res.json())
    );
    // Log the fetched data for debugging purposes
    console.log('graphData', graphData);

    // Prepare the chart data
    const chartData = {
        labels: Object.keys(graphData?.cases || {}),
        datasets: [
            {
                label: 'Cases',
                data: Object.values(graphData?.cases || {}),
                borderColor: 'rgba(0, 0, 255, 0.5)',
                fill: true,
            },
            {
                label: 'Recovered',
                data: Object.values(graphData?.recovered || {}),
                borderColor: 'rgba(0, 255, 0, 0.5)',
                fill: true,
            },
            {
                label: 'Deaths',
                data: Object.values(graphData?.deaths || {}),
                borderColor: 'rgba(255, 0, 0, 0.5)',
                fill: true,
            },
        ],
    };

    // Prepare the chart options
    const chartOptions: ChartOptions<"line"> = {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
            legend: {
                position: "bottom",
            },
            title: {
                display: true,
                text: "Sales Data",
            },
        },
    };

    // Render the LineGraph component with the Line component from react-chartjs-2
    return (
        <div className='h-[60vh]'>
            <Line data={chartData} options={chartOptions} />
        </div>
    );
};

// Export the LineGraph component as default
export default LineGraph;
