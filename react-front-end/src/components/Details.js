import {React, useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
    const [productData, setProductData] = useState([]);
    let id = useParams().id;

    useEffect(() => {
        fetch(`http://localhost:5000/product/${id}`)
        .then(response => response.json())
        .then(data => {
            setProductData(data);
        })
        .catch(error => {
            console.error(error);
        })
    }, [id]);

    function create(event){
        event.preventDefault();
        console.log("Create is working fine");
        const code = productData._id;
        const title = productData.name;
        const url = productData.img;
        const money = parseFloat(productData.price);
        fetch(`http://localhost:5000/add-cart/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({code, title, url, money})
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error(error);
        });
        window.location.href = "/cart";
    }

    if(Object.keys(productData).length > 0) {return (
        <form onSubmit={create}>
            <div className='container text-center justify-content-center'>
                <div className="mb-3" style={{width: "80"}}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={productData.img} className="img-fluid rounded-start" alt="productImg"/>
                        </div>
                        <div className="d-flex col-md-6">
                            <div className="d-flex col-md-12">
                                <div className="card-body justify-content-center">
                                    <h2 className="card-title">{productData.name}</h2>
                                    <h3 className="card-title">${productData.price}</h3>
                                    <p className="card-text"><small className="text-body-secondary">{productData.category[0]}  {productData.category[1]}</small></p>
                                    <p className="card-text"><small className="text-body-secondary">{productData.details[0]} {productData.details[1]}</small></p>
                                    <p className="card-text">{productData.description}</p>
                                    <button className="btn btn-warning" id="buttons" variant="warning" type="submit">Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}
}

export default Details