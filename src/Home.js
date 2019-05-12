import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button , Navbar, Nav , NavDropdown, DropdownButton, Dropdown } from 'react-bootstrap';

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: null,
      dropdownSelectedItem: 'Select A Game'
    }
  }

  getSelectedLink(item, event) {
      this.setState({
        selectedItem: item
      });
  }

  getDropDownItem(item, event) {
    this.setState({
      dropdownSelectedItem: item
    });
  }

  render() {
    return (
      <div className="home">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark"
          onSelect={(selectedKey, event) => this.getSelectedLink(selectedKey, event)}>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#features" eventKey="feature">Features</Nav.Link>
              <Nav.Link href="#pricing" eventKey="price">Pricing</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1" eventKey="action"> Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2" eventKey="another action">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3" eventKey="something">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4" eventKey="separated link">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets" eventKey="deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <DropdownButton id="dropdown-basic-button" title={this.state.dropdownSelectedItem}
          onSelect={(eventKey: any, event: Object) => {this.getDropDownItem(eventKey, event)}}>
          <Dropdown.Item href="#/action-1" eventKey="Cricket">Cricket</Dropdown.Item>
          <Dropdown.Item href="#/action-2" eventKey="Football">Football</Dropdown.Item>
          <Dropdown.Item href="#/action-3" eventKey="Tennis">Tennis</Dropdown.Item>
        </DropdownButton>

        <span>{this.state.selectedItem}</span>
      </div>
    )
  }
}
