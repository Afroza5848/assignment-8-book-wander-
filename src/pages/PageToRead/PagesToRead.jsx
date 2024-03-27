//import React from 'react';

import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, } from 'recharts';
import { useEffect, useState } from 'react';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
};

const TriangleBar = (props) => {
  // eslint-disable-next-line react/prop-types
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};


const PagesToRead = () => {
  const [reChart, setReChart] = useState([]);
  // const {localData} = useLocalStorage();
  useEffect(() => {
    const getReadBookDataChart = JSON.parse(localStorage.getItem('books'))
    const mapChart = getReadBookDataChart.map(chartData => {
      const chartObj = {
        name: chartData.bookName,
        totalPage: chartData.totalPages
      }
      return chartObj;
    })
    setReChart(mapChart);
  }, [])
  // console.log();
  return (
    <div className='md:flex justify-center items-center my-12'>
      <BarChart
        width={800}
        height={400}
        data={reChart}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Bar dataKey="totalPage" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
          {reChart.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
          ))}
        </Bar>
        <Tooltip></Tooltip>
        <Legend></Legend>

      </BarChart>
    </div>

  );
};

export default PagesToRead;