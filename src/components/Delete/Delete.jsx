import {useState} from 'react'
import { Modal, Row, Col, Button } from 'react-bootstrap'
import { FaQuestion } from "react-icons/fa6";
import './Delete.css';

const Delete = () => {
    const [show, setShow] = useState(true); 
    const handleClose = () => setShow(false);
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header className="hdelete">
        <Modal.Body className="bdelete text-center">
          <Row className=" justify-content-center">
            <Col xs={12} className="mb-3">
              <div className="icon-circle">
                <span className="question-mark">
                  <FaQuestion style={{fontSize:"50px"}}/>
                </span>
              </div>
            </Col>
            <Col xs={12} className="textdelete">
              <h4 className='heading5'>Are you sure ?</h4>
              <p className='paragraph5'>to delete this address</p>
            </Col>
            <Row className="btnpart">
              <Col>
                <Button className="yesbtn" type="button">
                  Yes
                </Button>
              </Col>
              <Col>
                <Button
                  className="cancelbtn2"
                  type="button"
                  onClick={handleClose}
                >
                  Cancel
                </Button>
              </Col>
            </Row>
          </Row>
        </Modal.Body>
      </Modal.Header>
    </Modal>
  );
}

export default Delete
