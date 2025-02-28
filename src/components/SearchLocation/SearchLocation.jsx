import React from 'react'
import { Modal, ModalBody, ModalHeader, ModalTitle } from 'react-bootstrap'

const SearchLocation = () => {
  return (
    <Modal show={show} onHide={close} centered>
      <ModalHeader closeButton>
        <ModalTitle className="hlocation">Search Location</ModalTitle>
      </ModalHeader>
      <ModalBody></ModalBody>
    </Modal>
  );
}

export default SearchLocation