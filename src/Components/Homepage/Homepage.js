import React from 'react';
import { Button, Container, Form, FormControl, Navbar } from 'react-bootstrap';
import './Homepage.css';

import logo from '../../Images/Logo.png';
import { Link } from 'react-router-dom';



const Homepage = () => {
    return (
       
            <Container>

                <Navbar variant="dark">
                    <Navbar.Brand href="#home"><img className="logo" src={logo} alt="" /></Navbar.Brand>

                    <Navbar.Collapse id="basic-navbar-nav">


                        <Form inline>
                            <FormControl variant='white' type="text" placeholder="Search Your Destination...." className="mr-sm-2" />
                        </Form>

                        <Link className='ml-5' to="home">News</Link>
                        <Link className='ml-5' to="destination">Destination</Link>
                        <Link className='ml-5' to="blog">Blog</Link>
                        <Link className='ml-5' to="contact">Contact</Link>
                        <Button className='button'>Login</Button>
                    </Navbar.Collapse>
                </Navbar>

            </Container>

    );
};

export default Homepage;