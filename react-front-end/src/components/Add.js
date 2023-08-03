import {React, useEffect, useState} from 'react';
import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();
const token = cookies.get("TOKEN");

const logout = () => {
    cookies.remove("TOKEN", {path: "/"});
    window.location.href = "/";
}

const Add = () => {
    const [message, setMessage] = useState("");
    const [title, setTitle] = useState("");
    const [url, setUrl] = useState("");
    const [money, setMoney] = useState();
    const [box, setBox] = useState([]);
    const [info, setInfo] = useState([]);
    const [detail, setDetail] = useState("");

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

    function create(event){
        event.preventDefault();
        console.log("Create is working find");
        fetch(`http://localhost:5000/addProduct/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({title, url, money, box, info, detail})
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error(error);
        });
    }

    if(message) {return (
        <>
        <div>Test</div>
        </>
    )}
    else {
        return (
            <div>Add</div>
        )
    }
}

export default Add