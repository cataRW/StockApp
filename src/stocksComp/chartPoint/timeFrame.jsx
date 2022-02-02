import React from 'react'
import {Nav, NavDropdown} from 'react-bootstrap'

export default function TimeFrame(props) {

  const getTimeFrameData = (option) => {
    let [numberOffUnitTime, unitTime, timeSeries] = option.split('-')
    let numberForRetriveData = numberOffUnitTime * unitTime

    props.getData({
      timeSeries: timeSeries,
      numberForRetriveData: numberForRetriveData
    })
  }

  return(
    <Nav activeKey = '' onSelect={getTimeFrameData} className='mt-5'>
      <Nav.Item>
        <Nav.Link className='mx-5' eventKey="1-30-DAILY" style={{color:"black"}}> 1M </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className='mx-5' eventKey="3-30-DAILY" style={{color:"black"}}> 3M </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className='mx-5' eventKey="6-30-DAILY" style={{color:"black"}}> 6M </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className='mx-5' eventKey="1-48-WEEKLY" style={{color:"black"}}> 1Y </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className='mx-5' eventKey="2-48-WEEKLY" style={{color:"black"}}> 2Y </Nav.Link>
      </Nav.Item>
    </Nav>
  )
}
