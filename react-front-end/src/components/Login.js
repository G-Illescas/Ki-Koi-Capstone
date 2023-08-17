import {React, useState} from 'react';
import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [login, setLogin] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const config = {
            method: "post",
            url: "http://localhost:5000/login",
            data: {
                email,password,
            },
        };
        axios(config)
        .then((result) => {
            setLogin(true);
            cookies.set("TOKEN", result.data.token, {
                path: "/",
            });
            window.location.href="/admin";
        })
        .catch((e) => {
            e = new Error();
            setLogin(false)
        });
    }

    return (
        <>
            <h1>Login</h1>
            <form className="row g-3">
                <div className="col-md-4">
                    <label for="validationDefault01" className="form-label">Email</label>
                    <input type="email" name="email" value={email} className="form-control" id="validationDefault01" required onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="col-md-4">
                    <label for="validationDefault02" className="form-label">Password</label>
                    <input type="password" className="form-control" id="validationDefault02" required onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className="col-12">
                    <button className="btn btn-primary" variant="primary" type="submit" onClick={(e) => handleSubmit(e)}>Submit form</button>
                </div>
                {login === true && (
                    <p className='text-success'>User was logged in</p>
                )}
                {login === false && (
                    <p className='text-danger'>Error during login</p>
                )}
            </form>
        </>
    )
}

export default Login