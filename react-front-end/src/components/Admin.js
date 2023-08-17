import {React, useEffect, useState} from 'react';
import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();
const token = cookies.get("TOKEN");

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
        };
    };
    
    if(productData && message) {return (
        <div>
            <div className="container text-center justify-content-center" id="prodcontain">
                {productData?.map(data => (
                    <>
                    <div key={data._id} id="proddisplay">
                        <div className="card text-center" style={{width: "21rem"}}>
                            <img src={data.img} className="card-img-top" alt="productImg"/>
                            <div className="card-body">
                                <h4 className="card-title">{data.name}</h4>
                                <p className="card-text">${data.price}</p>
                                <p className="card-text"><small class="text-body-secondary">{data.category[0]}</small> <small class="text-body-secondary">{data.category[1]}</small> <small class="text-body-secondary">{data.category[2]}</small> </p>
                                <div className='' id="adminDetails">
                                    <p>{data.details[0]}</p> <p>{data.details[1]}</p>
                                </div>
                                <button className="btn btn-danger" id="buttons" variant="danger" onClick={() => {go(data._id)}}>Delete</button>
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
            <div>You do not have access to this page</div>
            </>
        )
    }
}