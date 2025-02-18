import React from 'react'
import './Orderhistory.css';
import { Col, Container, Row } from 'react-bootstrap';

const Orderhistory = () => {
  return (
    <Container>
        <Row>
            <Col>
            Order History
            </Col>
        
            <div>
                <div>
                <img className="order-icon" src='https://ultimate-grocery-api-capacitor.initappz.com/public/storage/images/5f045b5a4b5d3.jpg'/>
                </div>
                <div>
                    Items
                </div>
                <div>
                    Watermelon - 1.5 kg 160 $
                </div>

            </div>
        </Row>
    </Container>
  )
}

export default Orderhistory