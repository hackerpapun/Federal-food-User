import React,{useState} from 'react'
import { Modal, Row, Col, Button } from 'react-bootstrap'
import './Delete.css';

const Delete = () => {
    const [show, setShow] = useState(true); 
    const handleClose = () => setShow(false);
  return (
    <Modal show={show} onHide={handleClose} centered className="deletepage">
        <Modal.Header closebutton className="hdelete">
            <Modal.Body className='text-center'>
                <Row className="justify-content-center">
                    <Col xs={12} className='mb-3'>
                    <div className='icon-circle'>
                        <span className='question-mark'>?</span>
                    </div>
                    </Col>
                    <Col xs={12}>
                    <h4>Are you sure ?</h4>
                    <p className='text-muted'>to delete this address</p>
                    </Col>
                    <Row className='btnpart'>
                        <Col>
                        <Button className="yesbtn" type="button">Yes</Button>
                        </Col>
                        <Col>
                        <Button className="cancelbtn" type="button" onClick={handleClose}>Cancel</Button>
                        </Col>
                    </Row>

                </Row>
            </Modal.Body>

        </Modal.Header>

    </Modal>
  )
}

export default Delete
