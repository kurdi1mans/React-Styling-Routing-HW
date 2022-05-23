import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import './Calculator.css'

export default function CalculatorScreen(props) {
  return (
    <div class="calculator-container">
      <Container>
          <Row>
              <Col className="calculator-screen" sm>0</Col>
          </Row>
          <Row>
              <Col onClick={props.buttonPressed} className="calculator-button" sm value="AC">AC</Col>
              <Col onClick={props.buttonPressed} className="calculator-button" sm value="+/-">+/-</Col>
              <Col onClick={props.buttonPressed} className="calculator-button" sm value="%">%</Col>
              <Col onClick={props.buttonPressed} className="calculator-button operation-button" sm value="÷">÷</Col>
          </Row>
          <Row>
              <Col onClick={props.buttonPressed} className="calculator-button" sm value="7">7</Col>
              <Col onClick={props.buttonPressed} className="calculator-button" sm value="8">8</Col>
              <Col onClick={props.buttonPressed} className="calculator-button" sm value="9">9</Col>
              <Col onClick={props.buttonPressed} className="calculator-button operation-button" sm value="×">×</Col>
          </Row>
          <Row>
              <Col onClick={props.buttonPressed} className="calculator-button" sm value="4">4</Col>
              <Col onClick={props.buttonPressed} className="calculator-button" sm value="5">5</Col>
              <Col onClick={props.buttonPressed} className="calculator-button" sm value="6">6</Col>
              <Col onClick={props.buttonPressed} className="calculator-button operation-button" sm value="-">-</Col>
          </Row>
          <Row>
              <Col onClick={props.buttonPressed} className="calculator-button" sm value="1">1</Col>
              <Col onClick={props.buttonPressed} className="calculator-button" sm value="2">2</Col>
              <Col onClick={props.buttonPressed} className="calculator-button" sm value="3">3</Col>
              <Col onClick={props.buttonPressed} className="calculator-button operation-button" sm value="+">+</Col>
          </Row>
          <Row>
              <Col onClick={props.buttonPressed} className="calculator-button" sm={6} value="0">0</Col>
              <Col onClick={props.buttonPressed} className="calculator-button" sm value=".">.</Col>
              <Col onClick={props.buttonPressed} className="calculator-button operation-button" sm value="=">=</Col>
          </Row>
      </Container>
    </div>
  )
}
