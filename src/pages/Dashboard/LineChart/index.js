import React, { Component } from 'react'
import { Line } from 'react-chartjs-2'
import { Gap } from '../../../components';

export default class LineChart extends Component {
    constructor(props){
        super(props);

        this.state = {
            data: {
                labels: ["10","20","30","40","50"],
                datasets: [
                    {
                        label: "Lulusan S1",
                        backgroundColo: "rgba(255, 0, 255, 0.75)",
                        data: [12, 7, 8, 90, 3]
                    },
                    {
                        label: "Lulusan SMK",
                        backgroundColor: "rgba(0, 255, 0, 0.75)",
                        data: [6, 4, 21, 30, 41]
                    }
                ]
            }
        }
    }

    setGradientColor = (canvas, color) => {
        const ctx = canvas.getContext('2d');
        const gradient = ctx.createLinearGradient(0,0, 0, 400);
        gradient.addColorStop(0, color)
        gradient.addColorStop(0.95, "rgba(103, 255, 194, 0.15)");
        return gradient
    } 

    getChartData = canvas => {
        const data = this.state.data;
        if(data.datasets){
            let colors = ["rgba(255, 100, 155, 1)","rgba(0, 255, 175, 1)"];
            data.datasets.forEach((set, i) => {
                set.backgroundColor = this.setGradientColor(canvas, colors[i]);
                set.borderColor = "white";
                set.borderWidth = 2;

            });
        }
        return data
    }
    render() {
        return (
            <div style={{position: "relative", width: 500, height: 550}}>
            <Gap height={100} />
            <Line 
            options={{
                responsive: true
            }}
            data={this.getChartData}
            />
        </div>
        )
    }
}
