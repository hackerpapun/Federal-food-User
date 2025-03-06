import React from 'react'
import './SearchLocation.css';
import { Col, FormControl, FormGroup, Modal, ModalBody, ModalHeader, ModalTitle, Row } from 'react-bootstrap'

const SearchLocation = (show, close) => {
  return (
    <Modal show={show} onHide={close} centered>
      <ModalHeader closeButton>
        <ModalTitle className="hlocation">Search Location</ModalTitle>
      </ModalHeader>
      <ModalBody>
        <Row>
          <Col>
            <FormGroup>
              <FormControl type="text" placeholder="search" className='searchplaceholder'/>
              <Row
                className="text-center"
                style={{
                  borderBottom: "1px solid #ced4da",
                  justifyContent: "center",
                  display: "flex",
                }}
              ></Row>
            </FormGroup>
          </Col>
        </Row>
      </ModalBody>
    </Modal>
  );
}

export default SearchLocation