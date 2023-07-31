import {React, useState} from 'react';
import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [login, setLogin] = useState(false);

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
        });
    }

    return (
        <>
            <h1>Login</h1>
            <form class="row g-3">
                <div class="col-md-4">
                    <label for="validationDefault01" class="form-label">Email</label>
                    <input type="email" name="email" value={email} class="form-control" id="validationDefault01" required onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div class="col-md-4">
                    <label for="validationDefault02" class="form-label">Password</label>
                    <input type="password" class="form-control" id="validationDefault02" required onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div class="col-12">
                    <button class="btn btn-primary" variant="primary" type="submit" onClick={(e) => handleSubmit(e)}>Submit form</button>
                </div>
                {login ? (
                    <p className='text-success'>User is logged in</p>
                ) : (
                    <p className='text-danger'>Login failed</p>
                )}
            </form>
        </>
    )
}

export default Login