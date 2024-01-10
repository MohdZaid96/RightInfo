import React from 'react';

const Table = ({ dataset }) => {
  const generateTableData = () => {
    const tableData = {};

    dataset.forEach((entry) => {
      const supplier = entry['Supplier '];
      const year = entry['Year '];

      if (!tableData[supplier]) {
        tableData[supplier] = {};
      }

      if (!tableData[supplier][year]) {
        tableData[supplier][year] = [];
      }

      tableData[supplier][year].push({
        month: entry['Month '],
        emissions: entry['Emissions(in CO2e)'] || 0,
        re: entry['R/E'] || 0,
        yoy: entry['YOY R/E Change'] || 0,
      });
    });

    return tableData;
  };

  const tableData = generateTableData();

  return (
    <div>
      <h2>Supplier Wise Data Table</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Supplier</th>
            <th>Year</th>
            <th>Month</th>
            <th>Emission</th>
            <th>R/E</th>
            <th>YOY R/E Change (%)</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(tableData).map((supplier) =>
            Object.keys(tableData[supplier]).map((year) =>
              tableData[supplier][year].map((data, index) => (
                <tr key={`${supplier}-${year}-${data.month}-${index}`}>
                  <td>{supplier}</td>
                  <td>{year}</td>
                  <td>{data.month}</td>
                  <td>{data.emissions}</td>
                  <td>{data.re}</td>
                  <td>
                    {data.yoy > 0 ? (
                      <span style={{ color: 'green' }}>
                        +{data.yoy.toFixed(2)}% &uarr;
                      </span>
                    ) : (
                      <span style={{ color: 'red' }}>
                        {data.yoy.toFixed(2)}% &darr;
                      </span>
                    )}
                  </td>
                </tr>
              ))
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
