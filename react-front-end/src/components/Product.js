import {React, useEffect, useState} from 'react';

const Product = () => {
    const [productData, setProductData] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/products`)
        .then(response => response.json())
        .then(data => {
            setProductData(data);
            console.log("Data: ", data)
        })
        .catch(error => {
            console.error(error);
        })
    }, []);

    if(productData) {return (
        <div>
            <div>
            </div>
            <div class="container text-center" id="prodcontain">
                {productData.map(data => (
                <>
                    <div id="proddisplay">
                        <div class="card" style={{width: "18rem"}}>
                            <img src={data.img} class="card-img-top " alt="productImg"/>
                            <div class="card-body">
                                <h4 class="card-title">{data.name}</h4>
                                <p class="card-text">${data.price}</p>
                                <a href="#" class="btn btn-primary" id="buttons">Go somewhere</a>
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