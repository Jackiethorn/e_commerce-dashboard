import { Line } from "react-chartjs-2";
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

export const LineChart = ({ labels, data }: any) => {

    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
    );

    //TODO: MAKE DATA OBTAINMANT DYNAMIC
    const chartData = {
        labels: labels,
        datasets: [
            {
                id: 1442124,
                label: 'Refunds',
                data: data[0],
                fill: false,
                backgroundColor: 'rgba(208, 16, 16)',
                borderColor: 'rgba(208, 16, 16, 0.3)',
                tension: 0.4,
            },
            {
                id: 1234235442125,
                label: 'Earning',
                data: data[1],
                fill: false,
                backgroundColor: 'rgb(18, 166, 229)',
                borderColor: 'rgba(18, 166, 229, 0.3)',
                tension: 0.4,
            },
            {
                id: 1443242125,
                label: 'Order',
                data: data[2],
                fill: false,
                backgroundColor: 'rgb(18, 229, 27)',
                borderColor: 'rgba(18, 229, 27, 0.3)',
                tension: 0.4,
            }
        ],
    };

    const config = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
        },
    };

    return (
        <Line data={chartData} options={config} />
    );
}