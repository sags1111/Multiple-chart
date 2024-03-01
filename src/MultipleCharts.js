import React, { useState } from 'react';
import { Line, Bar } from 'react-chartjs-2';

const MultipleCharts = () => {
  const [data, setData] = useState({
    chartType: 'line',
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'First-Sagar',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: 'blue',
        borderColor: 'black',
        borderWidth: 1,
      },
    ],
  });

  const handleToggleChartType = () => {
    const newChartType = data.chartType === 'line' ? 'bar' : 'line';
    setData({ ...data, chartType: newChartType });
  };

  const handleToggleDataset = () => {
    setData({
      ...data,
      datasets: [
        {
          label: 'Dataset 2',
          data: [28, 48, 40, 19, 86, 27, 90],
          backgroundColor: 'green',
          borderColor: 'red',
          borderWidth: 1,
        },
      ],
    });
  };

  return (
    <div>
      <button onClick={handleToggleChartType}>Repeat</button>
      <button onClick={handleToggleDataset}>Non-Repeat</button>
      {data.chartType === 'line' ? (
        <Line
          data={data}
          options={{
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
            },
          }}
        />
      ) : (
        <Bar
          data={data}
          options={{
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
            },
          }}
        />
      )}
    </div>
  );
};

export default MultipleCharts;
