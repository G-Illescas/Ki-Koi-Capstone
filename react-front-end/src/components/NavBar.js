import {React, useEffect, useState} from 'react';
import Nav from "react-bootstrap/Navbar";
import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();
const token = cookies.get("TOKEN");

const logout = () => {
    cookies.remove("TOKEN", {path: "/"});
    window.location.href = "/";
}

const NavBar = () => {
    const [message, setMessage] = useState("");
    
    useEffect(() => {
        const config = {
            method: "get",
            url: "http://localhost:5000/admin-endpoint",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        axios(config)
        .then((result) => {
            setMessage(result.data.message);
        })
        .catch((e) => {
            e = new Error();
        });
    }, []);

    if(message){return (
        <div className="sticky-top">
                <Nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">Navbar</a>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                <a className="nav-link" href="/product">Clothes</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" href="#">Merch</a>
                                </li>
                                <form className="d-flex" role="search">
                            </form>
                            </ul>
                            <div className="hstack gap-3">
                                <div className="p-2 ms-auto"><a className="nav-link" variant="success" href="/add">Add Product</a></div>
                                <div className="vr"></div>
                                <div className="p-2"><button className="nav-link" variant="danger" type="submit" onClick={() => logout()}>Logout</button></div>
                            </div>
                        </div>
                    </div>
                </Nav>
            </div>
        )
    }
    else {
        return (
            <div className="sticky-top">
                <Nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">Navbar</a>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                <a className="nav-link" href="/product">Clothes</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" href="#">Merch</a>
                                </li>
                                <form className="d-flex" role="search">
                            </form>
                            </ul>
                            <div className="hstack gap-3">
                                <div className="p-2 ms-auto"><a className="nav-link" href="/register">Register</a></div>
                                <div className="vr"></div>
                                <div className="p-2"><a className="nav-link" href="/login">Login</a></div>
                            </div>
                        </div>
                    </div>
                </Nav>
            </div>
        )
    }
}

export default NavBar