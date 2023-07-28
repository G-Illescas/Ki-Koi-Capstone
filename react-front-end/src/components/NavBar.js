import React from 'react';
import Nav from "react-bootstrap/Navbar";

const NavBar = () => {
    return (
        <div class="sticky-top">
            <Nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/">Navbar</a>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                            <a class="nav-link" href="/product">Clothes</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="#">Merch</a>
                            </li>
                            <form class="d-flex" role="search">
                        </form>
                        </ul>
                        <a class="nav-link" href="#">Login</a>
                    </div>
                </div>
            </Nav>
        </div>
    )
}

export default NavBar