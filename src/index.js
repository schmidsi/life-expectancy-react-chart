import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import { csv as d3csv } from 'd3-request';

d3csv('./who-life-expectancy-by-country.csv', (data) => {
  const wrangledData = data
    .filter(d => d.Year === '2015')
    .map(d => ({
      country: d.Country,
      expectancy: parseFloat(d['Life expectancy at birth']),
    }))
    .sort((a, b) => (a.expectancy >= b.expectancy) ? -1 : 1)
    ;

  ReactDOM.render(
    <App data={wrangledData} />,
    document.getElementById('root'),
  );
});

