import React from 'react';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';

import './App.css';


const App = props => (
  <div className="App">
    <BarChart width={400} height={2000} data={props.data} layout="vertical">
      <Bar dataKey="expectancy" fill="#8884d8" />
      <Tooltip />
      <XAxis type="number" dataKey="expectancy" />
      <YAxis interval={0} type="category" dataKey="country" />
    </BarChart>
  </div>
);

export default App;
