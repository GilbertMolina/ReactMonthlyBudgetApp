import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, Button, Navbar, Nav, NavDropdown, FormControl } from 'react-bootstrap'

import './App.css';

export const App = () => {
  return (
    <>
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">
        <img
          alt=""
          src="/images/budget.svg"
          width="30"
          height="30"
          className="d-inline-block align-top mr-2"
        />
        Monthly Budget
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Salary Detail</Nav.Link>
          <Nav.Link href="#link">Montly Budget</Nav.Link>
          <Nav.Link href="#link">Remaining Money</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
    <Container className="mt-4">
      <h1>React Monthly Budget</h1>
    </Container>
    </>
  );
}