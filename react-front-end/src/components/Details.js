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
        const title = productData.name;
        const url = productData.img;
        const money = productData.price;
        fetch(`http://localhost:5000/add-cart/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({title, url, money})
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
            <div className='container text-center justify-content-center' id="prodcontain">
                <>
                <div className="mb-6" style={{width: "540px"}}>
                    <div className="row g-2">
                        <div className="col-md-4" id="prodImgContainer">
                            <img src={productData.img} className="img-fluid rounded-start" alt="productImg" id="prodImg"/>
                        </div>
                        <div className="col-md-9">
                            <div className="card-body justify-content-center">
                                <h1 className="card-title">{productData.name}</h1>
                                <p className="card-text" id="priceText">${productData.price}</p>
                                <ol className='text-center align-items-center' id="prodDetails"> <ul id="details"> {productData.category[0]} | {productData.category[1]} </ul> </ol>
                                <ol className='text-center align-items-center' id="prodDetails"> <ul> {productData.details[0]} </ul> <ul> {productData.details[1]} </ul> </ol>
                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <button type="submit" class="btn btn-primary">Add</button>
                    </div>
                </div>
                </>
            </div>
        </form>
    )
}
}

export default Details