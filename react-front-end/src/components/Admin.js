import {React, useEffect, useState} from 'react';
import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();
const token = cookies.get("TOKEN");

const logout = () => {
    cookies.remove("TOKEN", {path: "/"});
    window.location.href = "/";
}

export default function Admin() {
    const [message, setMessage] = useState("");
    const [productData, setProductData] = useState([]);

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

    useEffect(() => {
        const config = {
            method: "get",
            url: "http://localhost:5000/admin-products",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        axios(config)
        .then((result) => {
            setProductData(result.data.data);
        })
        .catch((e) => {
            e = new Error();
        });
    }, []);

    function go(id){
        console.log("Deleting product: ", id);
        if(id && id !== ""){
            fetch(`http://localhost:5000/delete/${id}`, {
                method: "DELETE"
            })
            .then(response => response.json())
            .then(() => {
                fetch(`http://localhost:5000/products`)
                .then(response => response.json())
                .then(data => {
                    setProductData(data);
                })
                .catch(error => {
                    console.error("Error regrabing data", error)
                });
            })
            .catch(error => {
                console.error(error);
            });
        }
    }
    
    if(productData && message) {return (
        <div>
            <div class="hstack gap-3">
                <div class="p-2 ms-auto"><a class="btn btn-success" variant="success" href="/add">Add</a></div>
                <div class="vr"></div>
                <div class="p-2"><button class="btn btn-danger" variant="danger" type="submit" onClick={() => logout()}>Logout</button></div>
            </div>
            <div class="container text-center" id="prodcontain">
                {productData?.map(data => (
                    <>
                    <div key={data._id} id="proddisplay">
                        <div class="card" style={{width: "18rem"}}>
                            <img src={data.img} class="card-img-top " alt="productImg"/>
                            <div class="card-body">
                                <h4 class="card-title">{data.name}</h4>
                                <p class="card-text">${data.price}</p>
                                <ul>
                                    <li>
                                        {data.details}
                                    </li>
                                </ul>
                                <button class="btn btn-danger" id="buttons" variant="danger" onClick={() => {go(data._id)}}>Delete</button>
                            </div>
                        </div>
                    </div>
                    </>
                ))}
            </div>
        </div>
        )
    }
    else {
        return (
            <>
            <div>Admin</div>
            </>
        )
    }
}