import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../../utils/auth';


export default function previousEntry() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Close
        </Button>
  
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>Previous Entry</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p> Date Added: </p>
            <text class="text-area">Notes</text>
          </Modal.Body>
          <Modal.Footer>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  render(<previousEntry />);