import React from 'react'
import "./ProfileSidebar.css"
import { Col, Container, Row, Card, ListGroup } from 'react-bootstrap'

const ProfileSidebar = () => {
  return (
<Container>
    <Row>
        <Col md={3}>
         <Card className="sidebar-card">
         ACTIVITY
            <Card.Body className="sidebar-list">
              <ListGroup  >
                <ListGroup.Item>Profile</ListGroup.Item>
                <ListGroup.Item>Order History</ListGroup.Item>
                <ListGroup.Item>My Address</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
    </Row>
</Container>
)
}

export default ProfileSidebar