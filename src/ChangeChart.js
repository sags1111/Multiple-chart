import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';

const ChangeChart = () => {
  const [data, setData] = useState({
    labels: ['Sagar', 'Samir', 'Raj', 'Akshay', 'nihal', 'Parekh', 'Om'],
    datasets: [
      {
        label: 'Old Marks:',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  });

  const handleToggleDataset = () => {
    setData({
      labels: ['Sagar', 'Samir', 'Raj', 'Akshay', 'nihal', 'Parekh', 'Om'],
      datasets: [
        {
          label: 'Modify Marks:',
          data: [91, 48, 40, 19, 86, 27, 90],
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1,
        },
      ],
    });
  };

  return (
    <div>
        <h2 className='App'>Student Maths Marks</h2>
      <button onClick={handleToggleDataset}>Click to Get New Marks:</button>
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
    </div>
  );
};

export default ChangeChart;
