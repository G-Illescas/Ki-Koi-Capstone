import {React, useState, useEffect} from 'react'
import { Link } from 'react-router-dom';

const Cart = () => {
    const [productData, setProductData] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/cart`)
        .then(response => response.json())
        .then(data => {
            setProductData(data);
        })
        .catch(error => {
            console.error(error);
        })
    }, []);

    function go(id){
        console.log("Deleting product: ", id);
        if(id && id !== ""){
            fetch(`http://localhost:5000/deleteItem/${id}`, {
                method: "DELETE"
            })
            .then(response => response.json())
            .then(() => {
                fetch(`http://localhost:5000/cart`)
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

    if(productData){return (
        <>
        <div className='row g-5 align-items-center'>
            <h4 class="d-flex justify-content-between align-items-center mb-3">
                <span class="text-primary">Your cart</span> 
            </h4>
            <>
                {productData.map(data => (
                    <div class="col-md-5 col-lg-4 order-md-last">
                        <ul class="list-group mb-3">
                            <li class="list-group-item d-flex justify-content-between align-items-center lh-sm">
                                <img src={data.img} alt="cartImg" id="cartImg"/>
                                <div>
                                    <h6 class="my-0">{data.name}</h6>
                                </div>
                                <span class="text-body-secondary">${data.price}</span>
                                <span class="text-body-secondary"><Link to={`/product/${data._id}`}>View</Link></span>
                            </li>
                            <button className="btn btn-danger" id="buttons" variant="danger" onClick={() => {go(data._id)}}>Remove</button>
                        </ul>
                    </div>
                ))}
            </>
        </div>
        </>
    )
    }
}

export default Cart