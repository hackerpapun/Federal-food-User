import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Payment from './Payment'
import PaymentDetails from './PaymentDetails'

const PaymentPage = () => {
  return (
    <Container>
        <Row>
            <Col md={7}>
            <Payment/>
            </Col>
            <Col md={5}>
            <PaymentDetails/>
            </Col>
        </Row>
    </Container>
    
  )
}

export default PaymentPage
