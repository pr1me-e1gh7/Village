import React, {useState} from 'react';
import { Form, Modal, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
// import { ADD_PROFILE } from '../utils/mutations';


export default function SignupModal() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    password: '',
  });
  // const [addProfile, { error, data }] = useMutation(ADD_PROFILE);
  

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };  
  
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addProfile({
        variables: { ...formState },
      });

      Auth.login(data.addProfile.token);
    } catch (e) {
      console.error(e);
    }
  };
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
        </Button>
  
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>Login Here</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <input
              className="form-input"
              placeholder="Your username"
              name="name"
              type="text"
              value={formState.name}
              onChange={handleChange}
            />
            <input
              className="form-input"
              placeholder="Your email"
              name="email"
              type="email"
              value={formState.email}
              onChange={handleChange}
            />
            <input
              className="form-input"
              placeholder="******"
              name="password"
              type="password"
              value={formState.password}
              onChange={handleChange}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleFormSubmit}>Submit</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
render(<SignupModal />);
  
