import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
// import Searchbox from '../componentsa/searchbox'
import { Route } from "react-router-dom";

const Header = () => {
  const field = JSON.parse(localStorage.getItem("field"));
  const id = JSON.parse(localStorage.getItem("id"));
  const collegename = JSON.parse(localStorage.getItem("collegename"));
  return (
    <div>
      <Navbar
        style={{ lineHeight: "0.1" }}
        bg='dark'
        variant='dark'
        expand='lg'
        collapseOnSelect
      >
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>Al-Track</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              {field == "alumni" ? (
                <>
                  <LinkContainer to={`/alumniprofile/${id}`}>
                    <Nav.Link>
                      <i className='fas fa-shopping-cart'></i>My profile
                    </Nav.Link>
                  </LinkContainer>
                  <LinkContainer to={`/followed2/${id}`}>
                    <Nav.Link>
                      <i className='fas fa-shopping-cart'>Followed students</i>
                    </Nav.Link>
                  </LinkContainer>
                  <LinkContainer to={`/studentscreen`}>
                    <Nav.Link>
                      <i className='fas fa-shopping-cart'>Other Almunis</i>
                    </Nav.Link>
                  </LinkContainer>
                </>
              ) : field == "student" ? (
                <>
                  <LinkContainer to={`/studentprofile/${id}`}>
                    <Nav.Link>
                      <i className='fas fa-shopping-cart'></i>My profile
                    </Nav.Link>
                  </LinkContainer>
                  <LinkContainer to={`/followed/${id}`}>
                    <Nav.Link>
                      <i className='fas fa-shopping-cart'>Followed alumnis</i>
                    </Nav.Link>
                  </LinkContainer>
                </>
              ) : (
                <LinkContainer to={`/collegeprofile/${id}`}>
                  <Nav.Link>
                    <i className='fas fa-shopping-cart'></i>My profile
                  </Nav.Link>
                </LinkContainer>
              )}
              <LinkContainer to={`/allstudents/${collegename}`}>
                <Nav.Link>
                  <i className='fas fa-shopping-cart'></i>All students
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to={`/allevents/${collegename}`}>
                <Nav.Link>
                  <i className='fas fa-shopping-cart'></i>All events
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
