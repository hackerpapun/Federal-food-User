import React from 'react';
import { Carousel, Card, Button, Container, Row, Col } from 'react-bootstrap';

const items = [
  {
    img: 'https://via.placeholder.com/150',
    title: 'Bisleri',
    size: '5 ltr',
    oldPrice: '30$',
    newPrice: '28.5$',
    discount: '5%'
  },
  {
    img: 'https://via.placeholder.com/150',
    title: 'Sona masoori rice',
    size: '20 kg',
    oldPrice: '1500$',
    newPrice: '1350$',
    discount: '10%'
  },
  {
    img: 'https://via.placeholder.com/150',
    title: 'Apple',
    size: '1 kg',
    newPrice: '120$',
  },
  {
    img: 'https://via.placeholder.com/150',
    title: 'Kashmiri Cherry',
    size: '100 kg',
    oldPrice: '100$',
    newPrice: '95$',
    discount: '5%'
  },
  {
    img: 'https://via.placeholder.com/150',
    title: 'Banana',
    size: '1 pcs',
    oldPrice: '10$',
    newPrice: '5$',
    discount: '50%'
  }
];

function Cards() {
  return (
    <Container>
      <Carousel>
        {items.map((item, index) => (
          <Carousel.Item key={index}>
            <Row className="justify-content-center">
              <Col md={4}>
                <Card>
                  <Card.Img variant="top" src={item.img} />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>
                      {item.size} <br />
                      {item.oldPrice && <span style={{ textDecoration: 'line-through' }}>{item.oldPrice}</span>} {' '}
                      <strong>{item.newPrice}</strong>
                    </Card.Text>
                    {item.discount && <Button variant="danger">{item.discount} OFF</Button>}
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
}

export default Cards;
