import React from 'react'
import {ListGroup, Input, InputGroup} from 'react-bootstrap'


export default function ListOfStocks(props) {

  const show = (e) => {
    let[symbol, name] = e.target.name.split('-')
    props.setNewOption({symbol: symbol, name: name})
  }

  let stopIndex = props.stockData.length > 5 ? 5 : props.stockData.length
  let optionList = props.stockData.slice(0, stopIndex).map((item, index) => {
    return (
      <ListGroup.Item
        action variant ='light'
        key={index}
        name={`${item[`1. symbol`]}-${item[`2. name`]}`}
        onClick={show}
      >
        {item[`2. name`]}
      </ListGroup.Item>
    )
  })

  return (
    <ListGroup variant="flush">
      {optionList}
    </ListGroup>
  )
}
