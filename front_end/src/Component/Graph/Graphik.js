import React from 'react'
import './Graphik.css'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Colors } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { BsBorderWidth } from 'react-icons/bs';

ChartJS.register(ArcElement, Tooltip, Legend);
const som = [75,20]
const data ={
    labels: (["Complet"]),
    datasets: [
        {
            label: "Tâches terminées",
            data: som,
            backgroundColor: [
                "#05A301",
                "rgba(54, 162, 235, 0.2)",
               
            ],
            borderColor: [
                "#05A301",
                "rgba(54, 162, 235, 0.2)",
            ], 
            borderWidth:1,
            hoverOffset: 4,
            cutout:"70%",
            animateRotate: true
        }, ]
}

const options = {
    plugins:{
        legend:{
            display: true,
            position: 'bottom',
            labels:{
                Colors: '#05A301',
                boxWidth:9,
                boxHeight:9,
                pointStyle: 'circle',
            usePointStyle: true

            }
        }
    },
    maintainAspectRatio: false
}

const  doughnutCenterText = {
    id: 'doughnutCenterText',
    beforeDraw: (chart) =>{
        const {ctx, width,height} = chart;
        ctx.restore();
        const  fontSize = (height / 190).toFixed(2);
        ctx.font = `${fontSize}em sans-serif`;
        ctx.textBaseline = 'middle'
        ctx.textAlign = 'center'

        const text = '75%'
        const textX = Math.round(width / 2);
        const textY = Math.round(height / 2.35);

        ctx.fillText(text, textX, textY)
        ctx.save();
    }
}




export default function Graphik() {
  return (
    <div className='Graphik'>
        <div className='graph'>
        <Doughnut data={data} options={options} plugins={[doughnutCenterText]}/>
        <Doughnut data={data} options={options} plugins={[doughnutCenterText]}/>
        <Doughnut data={data} options={options} plugins={[doughnutCenterText]}/>
        </div>
    </div>
  )
}
