import {React, useEffect, useState} from 'react';
import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();
const token = cookies.get("TOKEN");

const Add = () => {
    const [message, setMessage] = useState("");
    const [title, setTitle] = useState("");
    const [url, setUrl] = useState("");
    const [money, setMoney] = useState();
    const [box, setBox] = useState([""]);
    const [info, setInfo] = useState([""]);
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
        console.log("Create is working fine");
        fetch(`http://localhost:5000/add-product/`, {
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
        window.location.href = "/admin";
    }

    if(message) {return (
        <>
        <form className="row g-3" onSubmit={create}>
            <div className="col-md-5">
                <label for="inputName" className="form-label">Name</label>
                <input type="text" className="form-control" id="inputName" value={title} onChange={e => setTitle(e.target.value)}/>
            </div>
            <div className="col-5">
                <label for="inputImage" className="form-label">Image</label>
                <input type="text" className="form-control" id="inputPImage" value={url} onChange={e => setUrl(e.target.value)}/>
            </div>
            <div className="col-5">
                <label for="inputPrice" className="form-label">Price</label>
                <input type="float" className="form-control" id="inputPrice" value={money} onChange={e => setMoney(e.target.value)}/>
            </div>
            <div className="col-5">
                <label for="inputCategory" className="form-label">Category</label>
                <input className="form-control" id="inputCategory" value={box.join(',')} onChange={e => setBox(e.target.value.split(','))}/>
            </div>
            <div className="col-md-5">
                <label for="inputDetails" className="form-label">Details</label>
                <input className="form-control" id="inputDetails" value={info.join(',')} onChange={e => setInfo(e.target.value.split(','))}/>
            </div>
            <div className="col-md-4">
                <label for="inputDescription" className="form-label">Description</label>
                <input type="text" className="form-control" id="inputDescription" value={detail} onChange={e => setDetail(e.target.value)}/>
            </div>
            <div className="col-12">
                <button type="submit" className="btn btn-primary">Add</button>
            </div>
        </form>
        </>
    )}
    else {
        return (
            <div>You do not have access to this page</div>
        )
    }
}

export default Add