import React from 'react';
import {
  Brush, Area, AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';


const data = [
  {
    name: '2550', budget: 174189.3,
  },
  {
    name: '2551', budget: 179672.4,
  },
  {
    name: '2552', budget: 201565.7,
  },
  {
    name: '2553', budget: 215258.6,
  },
  {
    name: '2554', budget: 208384.5,
  },
  {
    name: '2555', budget: 191415.1,
  },
  {
    name: '2556', budget: 180707.9,
  },
  {
    name: '2557', budget: 228796.6,
  },
  {
    name: '2558', budget: 185852.2,
  },
  {
    name: '2559', budget: 199174.1,
  },
  {
    name: '2560', budget: 217713.6,
  },
  {
    name: '2561', budget: 238246.9,
  },
  {
    name: '2562', budget: 242948,
  },
];

export default class FeatureBarChart extends React.Component {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/30763kr7/';

  render() {
    return (
      <AreaChart
        width={850}
        height={450}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis domain={[150000, 250000]}/>
        <Tooltip />
        <Legend />
        <Area type="monotone" dataKey="budget" stroke="#db5d7c" fill="	#d46f6f" activeDot={{ r: 8 }} />
        <Brush />
      </AreaChart>
    );
  }
}
