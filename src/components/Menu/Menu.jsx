import { Nav, NavDropdown, Form, Button, Navbar, Container } from 'react-bootstrap';
import  { Component } from 'react';
import {LinkContainer} from 'react-router-bootstrap'

import styles from './menu.module.css'

class Menu extends Component {
    render(){
        return (
            <div >
                <Navbar className={styles.div} bg="info" expand="xxl">
                    <Container fluid>
                        <LinkContainer to="/">
                            <Navbar.Brand className={styles.brand} href="#">FindWorka</Navbar.Brand>
                        </LinkContainer>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className={ [styles.menu, 'me-auto my-2 my-lg-0'].join(' ') }
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <LinkContainer to="/">
                                <Nav.Link>Home</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/books">
                                <Nav.Link>Books</Nav.Link>
                            </LinkContainer>
                            <NavDropdown title="Comments" id="navbarScrollingDropdown">
                            <LinkContainer to="/comment_add">
                                <NavDropdown.Item>
                                    Add Comments Anonymous
                                </NavDropdown.Item>
                            </LinkContainer>
                            <NavDropdown.Divider />
                            <LinkContainer to="/comments">
                                <NavDropdown.Item>
                                    View Comments From Database
                                </NavDropdown.Item>
                            </LinkContainer>
                            </NavDropdown>
                            <LinkContainer to="/character">
                                <Nav.Link>
                                    Character
                                </Nav.Link>
                            </LinkContainer>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            />
                            <Button variant="outline-primary">Search</Button>
                        </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

export default Menu;