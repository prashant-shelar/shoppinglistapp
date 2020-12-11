import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

export const TodoNavbar = () => {
    return (<>
        <Navbar bg="primary">
            <Nav className="mr-auto">
                <ul  className="my-2">
                    <span style={{ color: "Tomato" }}>
                        <i class="fa fa-list fa-2x"></i>
                        <span className="text-light">{10}</span>
                    </span>
                </ul>
            </Nav>
        </Navbar>

    </>)
} 