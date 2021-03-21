import React from 'react'
import { Bar } from 'react-chartjs-2';
import { Gap } from '../../../components';

const BarChart = () => {
    return (
        <div>
            <Gap height={50} />
            <Bar 
            data={{
                labels:['Januari', 'Februari', 'Maret', 'April', 'Mei', "Juny"],
                datasets: [{
                    label: "# votes",
                    data: [12, 19, 2, 17, 12, 22, 4],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                },
                {
                    label: 'Quantity',
                    data: [47, 54, 37, 22, 12],
                    backgroundColor: 'orange',
                    borderColor: 'red'
                }
            ]
            }}
            height={300} width={400}
            options={{
                maintainAspectRatio: false,
                scales: {
                    yAxes: [
                        {
                            ticks: {
                                beginAtZero: true,
                            }
                        }
                    ]
                }
            }}
            />
        </div>
    )
}

export default BarChart
