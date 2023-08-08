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
        <form class="row g-3" onSubmit={create}>
            <div class="col-md-5">
                <label for="inputName" class="form-label">Name</label>
                <input type="text" class="form-control" id="inputName" value={title} onChange={e => setTitle(e.target.value)}/>
            </div>
            <div class="col-5">
                <label for="inputImage" class="form-label">Image</label>
                <input type="text" class="form-control" id="inputPImage" value={url} onChange={e => setUrl(e.target.value)}/>
            </div>
            <div class="col-5">
                <label for="inputPrice" class="form-label">Price</label>
                <input type="float" class="form-control" id="inputPrice" value={money} onChange={e => setMoney(e.target.value)}/>
            </div>
            <div class="col-5">
                <label for="inputCategory" class="form-label">Category</label>
                <input class="form-control" id="inputCategory" value={box.join(',')} onChange={e => setBox(e.target.value.split(','))}/>
            </div>
            <div class="col-md-5">
                <label for="inputDetails" class="form-label">Details</label>
                <input class="form-control" id="inputDetails" value={info.join(',')} onChange={e => setInfo(e.target.value.split(','))}/>
            </div>
            <div class="col-md-4">
                <label for="inputDescription" class="form-label">Description</label>
                <input type="text" class="form-control" id="inputDescription" value={detail} onChange={e => setDetail(e.target.value)}/>
            </div>
            <div class="col-12">
                <button type="submit" class="btn btn-primary">Add</button>
            </div>
        </form>
        </>
    )}
    else {
        return (
            <div>Add</div>
        )
    }
}

export default Add