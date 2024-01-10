import React from 'react';
import { Chart } from 'react-chartjs-2';




const BarChart = ({dataset}) => {
  
const uniqueMonths = Array.from(new Set(dataset.map(entry => entry['Month '])));
const labels = uniqueMonths.map(month => month.substring(0, 3));

const uniqueSuppliers = Array.from(new Set(dataset.map(entry => entry['Supplier '])));
const uniqueYears = Array.from(new Set(dataset.map(entry => entry['Year '])));

const colorMap = {};
const colors = [];

function generateColors(count) {
  
  for (let i = 0; i < count; i++) {
    const hue = (360 / count) * i;
    colors.push(`hsl(${hue}, 70%, 50%)`);
  }
  return colors;
}


uniqueSuppliers.forEach((supplier, index) => {
  colorMap[supplier] = colors[index % generateColors(labels.length)];
});

const datasets = [
  {
    label: 'Emissions 2022',
    backgroundColor: 'rgb(75, 192, 192)',
    data: uniqueMonths.map(month => dataset.find(e => e['Month '] === month && e['Year '] === 2022)?.['Emissions(in CO2e)'] || 0),
  },
  {
    label: 'Emissions 2023',
    backgroundColor: 'rgb(255, 99, 132)',
    data: uniqueMonths.map(month => dataset.find(e => e['Month '] === month && e['Year '] === 2023)?.['Emissions(in CO2e)'] || 0),
  },
  {
    label: 'R/E 2022',
    borderColor: 'rgb(255, 205, 86)',
    data: uniqueMonths.map(month => dataset.find(e => e['Month '] === month && e['Year '] === 2022)?.['R/E'] || 0),
    type: 'line',
    yAxisID: 'R/E',
  },
  {
    label: 'R/E 2023',
    borderColor: 'rgb(54, 162, 235)',
    data: uniqueMonths.map(month => dataset.find(e => e['Month '] === month && e['Year '] === 2023)?.['R/E'] || 0),
    type: 'line',
    yAxisID: 'R/E',
  },
];

const data = {
  labels,
  datasets,
};

const options = {
  scales: {
    y: [
      {
        id: 'Emissions',
        type: 'linear',
        position: 'left',
        beginAtZero: true,
        max: 9000,
        stepSize: 1000,
        title: {
          display: true,
          text: 'Total Emissions (in CO2e)',
        },
      },
      {
        id: 'R/E',
        type: 'linear',
        position: 'right',
        beginAtZero: true,
        title: {
          display: true,
          text: 'Revenue to Emissions Ratio (R/E)',
        },
      },
    ],
  },
  plugins: {
    legend: {
      onClick: (e, legendItem, legend) => {
        const index = legendItem.datasetIndex;
        const chart = legend.chart;
        chart.getDatasetMeta(index).hidden = !chart.getDatasetMeta(index).hidden;
        chart.update();
      },
    },
  },
};
  return (
    <div className='barDiv'>
      <h2>Monthly Emissions Bar Chart</h2>
      <Chart type="bar" data={data} options={options} />
    </div>
  );
};

export default BarChart;
