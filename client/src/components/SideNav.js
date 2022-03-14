// SideNav, only apparent once logged in
import React from "react";
import { Nav } from "react-bootstrap";
// import { withRouter } from "react-router";
// import '../pages/style/Dashboard.css'

function Side ({ name, ...props }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
        <>
            <Button onClick={handleShow} className="me-2"
            style={{ height:35, width:35 }}
            bgColor="#FFFFFF">
                <img src="../assets/Village-HeartRed (96px)"></img>
            </Button>
            
            <Offcanvas show={show} onHide={handleClose} {...props}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Welcome to Village</Offcanvas.Title>
            </Offcanvas.Header>
            
            <Offcanvas.Body>
                <Nav className="col-md-12 d-none d-md-block bg-light sidebar"
                activeKey="/Profile"
                onSelect={selectedKey => alert(`selected ${selectedKey}`)}>
                    <div className="sidebar-sticky"></div>
                    {/* Profile page link */}
                    <Nav.Item>
                        <Nav.Link href="/Profile">Your Health</Nav.Link>
                    </Nav.Item>
                    
                    {/* Village page link */}
                    <Nav.Item>
                        <Nav.Link href="/Village">Your Village</Nav.Link>
                    </Nav.Item>

                    {/* World page link ICEBOXED - Full implementation on further development */}
                    <Nav.Item>
                        <Nav.Link href="https://www.who.int/">Your World</Nav.Link>
                    </Nav.Item>
                    
                    
                    {/* Add Sign Out below */}
                    <></>
                </Nav>

            </Offcanvas.Body>
            </Offcanvas>
      </>
    );
  }
  
function NavPlacement() {
    return (
        <>
            {['start'].map((placement, idx) => (
            <Side key={idx} placement={placement} name={placement} />
            ))}
        </>
    );
}
  
  render(<NavPlacement />);

// const SideNav = withRouter(Side);
export default SideNav