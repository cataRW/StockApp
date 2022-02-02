import React, {useState} from 'react'
import Search from './stocksComp/search'
import Chart from './stocksComp/chart'
import 'bootstrap/dist/css/bootstrap.min.css';

const API_key = '65W7M279BQSRQ383'

export default function StocksApp() {
  const[stockInfo, setStockInfo] = useState({})

  const updateStockInfo = (info) => {
    setStockInfo(info)
  }


  if(stockInfo.symbol != undefined) {
    return(
      <>
        <Search getInfo={updateStockInfo} apiKey={API_key} />
        <Chart info={stockInfo} apiKey={API_key} />
      </>
    )
  }

  return <Search getInfo={updateStockInfo} apiKey={API_key} />
}
