import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';


export default function previousEntry() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    // What goes here?
    // const handleSubmit = () => "";

  
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
            <Modal.Title>Comment</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p> What would you like to say?: </p>
            <input type="text"> </input>
          </Modal.Body>
          <Modal.Footer>
              <Button class="submitComment"> Submit Comment</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  render(<previousEntry />);