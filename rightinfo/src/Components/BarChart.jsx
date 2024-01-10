import React from 'react'
import {Bar} from "react-chartjs-2";
import Chart from 'chart.js/auto';

const BarChart = () => {
  return (
    <Bar 
              data={{

                labels: dataEX?.map((ele) => ele.Supplier) || [],

                datasets:[{
                  label:"Companies",
                  data:{},
                  barPercentage: 1000,
                  barThickness: 6,
                  maxBarThickness: 8,
                  minBarLength: 2,
                }]
              }}
              height={400}
              width={600}
              options={{
                maintainAspectRatio:false,
                scales: {
                  x: {
                    type: 'category', 
                  },
                },
              }
            }
              />
  )
}

export default BarChart