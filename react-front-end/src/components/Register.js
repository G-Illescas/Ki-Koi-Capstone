import {React, useState} from 'react';
import axios from "axios";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [register, setRegister] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) {
            setRegister(false);
            return;
        }

        const config = {
            method: "post",
            url: "http://localhost:5000/register",
            data: {
                email,password,
            },
        };
        axios(config)
        .then(() => {
            setRegister(true);
        })
        .catch((e) => {
            e = new Error();
            setRegister(false);
        });
        window.location.href="/login";
    }

    return (
        <>
            <h1>Register</h1>
            <form className="row g-3" onSubmit={handleSubmit}>
                <div className="col-md-4">
                    <label for="validationDefault01" className="form-label">Email</label>
                    <input type="email" name="email" value={email}  className="form-control" id="validationDefault01" onChange={(e) => setEmail(e.target.value)} required/>
                </div>
                <div className="col-md-4">
                    <label for="validationDefault02" className="form-label">Password</label>
                    <input type="password" name="password" value={password} className="form-control" id="validationDefault02" onChange={(e) => setPassword(e.target.value)} required/>
                </div>
                <div className="col-12">
                    <button className="btn btn-primary" variant="primary" type="submit">Submit form</button>
                </div>
                {register === true && (
                    <p className='text-success'>User is registered</p>
                )}
                {register === false && (
                    <p className='text-danger'>User was not registered</p>
                )}
            </form>
        </>
    )
}

export default Register