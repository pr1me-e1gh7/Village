function signupModal() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Launch static backdrop modal
        </Button>
  
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>Sign Up Here</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <input class="first-name">First Name:</input>
            <input class="last-name">Last Name:</input>
            <input class="email">Email:</input>
            <input class="username">Username:</input>
            <input class="password">Password:</input>
            <input class="confirm-password">Confirm Password:</input>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSubmit}>Submit</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  render(<signupModal />);