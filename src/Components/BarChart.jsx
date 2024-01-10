import React, { useState } from "react";
import {Bar} from "react-chartjs-2";
import Chart from 'chart.js/auto';

const BarChart = ({dataset}) => {
    var emission=`Emissions(in CO2e);
    `
    const [dataEX,setDataEX]=useState({
        labels: ['2022',"2023"],
        datasets: [{
          label: 'companies',
          data: dataset?.map((ele)=> ele.Emissions),
        }],
      });


  return (
    <Bar data={dataEX}
              />
  )
}

export default BarChart