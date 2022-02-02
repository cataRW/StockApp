import React, {useEffect} from 'react'
import { Chart } from "react-google-charts";

export default function StockDataChart(props) {
  let data = [[{ type: "date" }, "Price in USD($)"], ...props.data]

  return (
    <Chart
      chartType="LineChart"
      width='100%'
      height='400px'
      data={data}
      options={{
        lineWidth: '3',
        lineColor: 'red',
        title: `${props.nameOfStock} price`,
        titlePosition: 'in',
        chartArea: { left: '0', top: '0', right: '0', buttom: 0},
      }}
      loader= <div>loading... </div>
    />
  );
}
