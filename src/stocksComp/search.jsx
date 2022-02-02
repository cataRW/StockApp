import React, {useState, useEffect} from 'react'
import SearchBar from './searchingPoint/searchBar.jsx'
import ListOfStocks from './searchingPoint/listOfStocks.jsx'
import {Container} from 'react-bootstrap'


export default function Search(props) {
  const [stockData, setStockData] = useState([])
  const [searchedOfUser, setSearchedOfUser] = useState('')
  const [stockInfo, setStockInfo] = useState({})

  const  updateSearchedOfUser = (search) => {
    setSearchedOfUser(search)
  }

  const setInfoAboutOption = (info) => {
    setStockInfo(info)
    setStockData([])
  }

  useEffect(() => {
    if(searchedOfUser.length > 0) {
      fetch(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${searchedOfUser}&apikey=${props.apiKey}`)
        .then(stocks => {
           return stocks.json()
        })
        .then(stocks => {
          setStockData(stocks.bestMatches)
        })
        .catch((err) => console.log(err))
      }
    }
  ,[searchedOfUser])

  useEffect(() => 
    props.getInfo(stockInfo)
  ,[stockInfo])

  return (
    <Container style={{width: 540}} >
      <SearchBar updateSearch={updateSearchedOfUser} />
      <ListOfStocks setNewOption={setInfoAboutOption} stockData={stockData} />
    </Container>
  )
}
