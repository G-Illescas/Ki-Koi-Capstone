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
                        <div class="hstack gap-3">
                            <div class="p-2 ms-auto"><a class="nav-link" href="/register">Register</a></div>
                            <div class="vr"></div>
                            <a class="btn p-2" variant="warning" href="/login">Login</a>
                        </div>
                    </div>
                </div>
            </Nav>
        </div>
    )
}

export default NavBar