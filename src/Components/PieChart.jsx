import React from 'react';
import { Pie } from 'react-chartjs-2';

const PieChart = ({dataset}) => {

    const groupedData = dataset.reduce((acc, entry) => {
        const supplier = entry['Supplier '];
        acc[supplier] = (acc[supplier] || 0) + entry['Emissions(in CO2e)'];
        return acc;
      }, {});

      function generateColors(count) {
        const colors = [];
        for (let i = 0; i < count; i++) {
          const hue = (360 / count) * i;
          colors.push(`hsl(${hue}, 70%, 50%)`);
        }
        return colors;
      }
    const labels = Object.keys(groupedData);
    const data = Object.values(groupedData);
    const colors = generateColors(labels.length);

        const pieData = {
        labels,
        datasets: [
            {
            data,
            backgroundColor: colors,
            },
        ],
        };

const options = {
  plugins: {
    legend: {
      position: 'bottom',
    },
  },
};

      
  return (
    <div>
    <h2>Emissions by Companies Pie Chart</h2>
    <Pie data={pieData} options={options} />
  </div>
  )
  }

export default PieChart










