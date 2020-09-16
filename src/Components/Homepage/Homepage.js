import React from 'react';
import { Button, Container, Form, FormControl, Navbar } from 'react-bootstrap';
import './Homepage.css';

import logo from '../../Images/Logo.png';


const Homepage = () => {
    return (



        <section className="homepage">
             

            <div className='background'></div>
            <>
                    <Container>

                   <Navbar variant="dark">
                        <Navbar.Brand href="#home"><img className="logo" src={logo} alt=""/></Navbar.Brand>
                       
                        <Navbar.Collapse id="basic-navbar-nav">


                        <Form inline>
                        <FormControl variant='white' type="text" placeholder="Search Your Destination...." className="mr-sm-2" />
                        </Form>
                            
                            <Navbar.Brand className='ml-5' href="#home">News</Navbar.Brand>
                            <Navbar.Brand className='ml-5' href="#home">Destination</Navbar.Brand>
                            <Navbar.Brand className='ml-5' href="#home">Blog</Navbar.Brand>
                            <Navbar.Brand className='ml-5' href="#home">Contact</Navbar.Brand>
                            <Button className='button'>Login</Button>                            
                        </Navbar.Collapse>
                    </Navbar>


                    </Container>

                </>    
               

                

            
        </section>


    );
};

export default Homepage;