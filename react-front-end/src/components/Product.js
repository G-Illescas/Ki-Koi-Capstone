import {React, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

const Product = () => {
    const [productData, setProductData] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/products`)
        .then(response => response.json())
        .then(data => {
            setProductData(data);
        })
        .catch(error => {
            console.error(error);
        })
    }, []);

    if(productData) {return (
        <div>
            <div>
            </div>
            <div className="container text-center" id="prodcontain">
                {productData.map(data => (
                <>
                    <div key={data._id} id="proddisplay">
                        <div className="card" style={{width: "18rem"}}>
                            <img src={data.img} className="card-img-top " alt="productImg"/>
                            <div className="card-body">
                                <h4 className="card-title">{data.name}</h4>
                                <p className="card-text">${data.price}</p>
                                <Link to={`/product/${data._id}`} className="btn btn-primary nav-link" id="buttons">View</Link>
                            </div>
                        </div>
                    </div>
                </>
                ))}
            </div>
        </div>
        )
    }
}

export default Product