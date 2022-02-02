import React, {useState, useEffect} from 'react'
import StockDataChart from './chartPoint/stockDataChart'
import TimeFrame from './chartPoint/timeFrame'
import {Container, Spinner} from 'react-bootstrap'


export default function Chart(props) {
  const[dataForRequest, updateDataForRequest] = useState({timeSeries:'DAILY', numberForRetriveData:30})
  const[dataForChart, updateDataForChart] = useState([])

  const getTimeFrameData = (data) => {
    updateDataForRequest(data)
  }

  const getDataForChart = (data, stop) => {
    let keys = Object.keys(data)
    let dataKeys = Object.keys(data[keys[1]])
    let dataForChart = []

    for(let i = 0; i < stop; ++i) {
      let date = new Date(dataKeys[i])
      let price = parseFloat(data[keys[1]][dataKeys[i]]['4. close'])
      dataForChart.push([date, price])
    }
    return dataForChart
  }

  useEffect(() => {
    let request = `https://www.alphavantage.co/query?function=TIME_SERIES_${dataForRequest.timeSeries}&symbol=${props.info.symbol}${dataForRequest.numberForRetriveData > 100 ? `&outputsize=full` : ``}&apikey=${props.apiKey}`
    fetch(request)
      .then(data => data.json())
      .then(data => {
        let numberOfData = dataForRequest.numberForRetriveData
        let dataForChart = getDataForChart(data, numberOfData)
        updateDataForChart(dataForChart)
      })
  }, [dataForRequest.numberForRetriveData, props.info.symbol])

  if(!dataForChart.length > 0) {
    const style = { position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)", fontSize: '20px' }
    return (
      <div style={style}>
        <span> Please, wait a second</span>
        <Spinner animation="border" variant="black" />
      </div>
    )
  }

  return(
    <Container fluid>
      <TimeFrame getData={getTimeFrameData} />
      <StockDataChart data={dataForChart} nameOfStock={props.info.name}/>
    </Container>
  )
}
