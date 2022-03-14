// SideNav, only apparent once logged in
import React from 'react';
import { MDBIcon, MDBSideNavCat, MDBSideNavNav, MDBSideNav, MDBSideNavLink, MDBContainer, MDBRow, MDBBtn } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';

class SideNav {
    state = {
        isOpen: false
    }

    handleToggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    render() {
        const { isOpen } = this.state;
            return (
                <Router>
                    <MDBContainer>
                        <MDBRow>
                            <MDBBtn onClick={this.handleToggle}><MDBIcon icon="bars" size="5x" /></MDBBtn>
                        </MDBRow>
                        <MDBSideNav
                            logo="../assets/Village-HeartRed (96px)"
                            hidden
                            triggerOpening={isOpen}
                            breakWidth={1300}
                            className="bg-light"
                        >
                        <MDBSideNavNav>
                            {/* Profile page link */}
                            <MDBSideNavCat
                                name="Your Health"
                                id="Your Health"
                                icon="fas fa-user-alt"
                                path='/Profile' exact
                            >
                            </MDBSideNavCat>
                            {/* Village page link */}
                            <MDBSideNavCat
                                name="Your Village"
                                id="Your Village"
                                icon="fas fa-users"
                                path='/Village' exact
                            >
                            </MDBSideNavCat>
                            {/* World page link ICEBOXED - Full implementation on further development - for now using WHO website link */}
                            <MDBSideNavCat
                                name="Your World"
                                id="Your World"
                                icon="fas fa-globe-americas"
                                href="https://www.who.int/"
                                target="_blank"
                            >
                            </MDBSideNavCat>
                            {/* Sign Out - originally a Settings Modal (ICEBOXED) */}
                            <MDBSideNavCat
                                name="Sign Out"
                                id="Sign Out"
                                icon="fas fa-sign-out-alt"
                            >
                            </MDBSideNavCat>
                        </MDBSideNavNav>
                    </MDBSideNav>
                </MDBContainer>
            </Router>
        );
    }
}

export default SideNav