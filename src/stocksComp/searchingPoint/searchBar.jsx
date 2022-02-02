import React, {useState} from 'react'
import {FormControl, Button, Input, InputGroup} from 'react-bootstrap'

export default function SearchBar(props) {
  const[userInput, updateUserInput] = useState('')

  const trackingUserInput = (e) => {
    updateUserInput(e.target.value)
  }

  const updateStockName = () => {
    props.updateSearch(userInput)
  }

  return(
    <InputGroup className="mb-3">
      <FormControl
        placeholder="Stock name here..."
        className='w-25 p-3 mt-3'
        onChange={trackingUserInput}
      />
      <Button className='mt-3' variant="light" onClick={updateStockName}>Search</Button>
    </InputGroup>
  )
}
