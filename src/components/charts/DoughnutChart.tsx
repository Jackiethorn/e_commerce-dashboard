import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

export const DoughnutChart = ({ data }: any) => {

    ChartJS.register(ArcElement, Tooltip, Legend);

    const chartData = {
        labels: ['Shoes', 'Grocery', 'Other'],
        datasets: [
            {
                id: 144224,
                label: 'hey',
                data: data,
                backgroundColor: ['rgb(255, 99, 132, 0.2)',
                    'rgb(54, 162, 235, 0.2)',
                    'rgb(255, 205, 86, 0.2)'],
                borderColor: ['rgb(255, 99, 132, 1)',
                    'rgb(54, 162, 235, 1)',
                    'rgb(255, 205, 86, 1)'],
                hoverOffset: 6,
                borderWidth: 1,
                spacing: 3,
            },
        ],
    };

    // const config = {
    //     type: 'doughnut',
    //     data: data,
    //     options: {
    //         responsive: true,
    //         plugins: {
    //             legend: {
    //                 display: false,
    //             },
    //             title: {
    //                 display: true,
    //                 text: 'Chart.js Doughnut Chart'
    //             }
    //         }
    //     },
    // };
    return (
        <Doughnut data={chartData} />
    );
};