import {React, useState} from 'react';
import axios from "axios";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [register, setRegister] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const config = {
            method: "post",
            url: "http://localhost:5000/register",
            data: {
                email,password,
            },
        };
        axios(config)
        .then((result) => {
            setRegister(true);
        })
        .catch((e) => {
            e = new Error();
        });
    }

    return (
        <>
            <h1>Register</h1>
            <form class="row g-3">
                <div class="col-md-4">
                    <label for="validationDefault01" class="form-label">Email</label>
                    <input type="email" name="email" value={email}  class="form-control" id="validationDefault01" required onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div class="col-md-4">
                    <label for="validationDefault02" class="form-label">Password</label>
                    <input type="password" name="password" value={password} class="form-control" id="validationDefault02" required onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div class="col-12">
                    <button class="btn btn-primary" variant="primary" type="submit" onClick={(e) => handleSubmit(e)}>Submit form</button>
                </div>
                {register ? (
                    <p className='text-success'>User is registered</p>
                ) : (
                    <p className='text-danger'>User was not registered</p>
                )}
            </form>
        </>
    )
}

export default Register