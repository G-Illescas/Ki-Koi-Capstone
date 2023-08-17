import {React, useState, useEffect} from 'react'
import { Link } from 'react-router-dom';

const Cart = () => {
    const [productData, setProductData] = useState([]);
    const [checkout, setCheckout] = useState(null);

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
                console.error("Error deleting item",error);
            });
        };
    };

    function secondGo(){
        fetch(`http://localhost:5000/deleteCart`, {
            method: "DELETE"
        })
        .then(response => response.json())
        .then(() => {
            fetch(`http://localhost:5000/cart`)
            .then(response => response.json())
            .then(data => {
                setProductData(data);
                setCheckout(true)
            })
            .catch(error => {
                console.error("Error regrabing data", error)
            })
        })
        .catch(error => {
            console.error("Error deleting cart", error)
            setCheckout(false);
        })
    }

    if(productData){return (
        <div className="row g-5">
            <div className="col-md-5 col-lg-4 order-md-last">
                <>
                    {productData.map(data => (
                        <div>
                            <div>
                                <ul className="list-group mb-3">
                                    <li className="list-group-item d-flex justify-content-between lh-sm">
                                        <img src={data.img} alt="cartImg" id="cartImg"/>
                                        <div>
                                            <h6 className="my-0">{data.name}</h6>
                                        </div>
                                        <span className="text-body-secondary">${data.price}</span>
                                        <span className="text-body-secondary"><Link to={`/product/${data.code}`}>View</Link></span>
                                        <div>|</div>
                                        <span className="text-body-secondary"><Link className="text-danger" onClick={() => {go(data._id)}}>Remove</Link></span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    ))}
                    <li className="list-group-item d-flex justify-content-between">
                        <span>Total (USD)</span>
                        <strong>$20</strong>
                    </li>
                </>
                {checkout === true && (
                    <p className='text-success'>User is registered</p>
                )}
                {checkout === false && (
                    <p className='text-danger'>User was not registered</p>
                )}
            </div>
            <div className="col-md-7 col-lg-8">
                <h4 className="mb-3">Billing address</h4>
                <form className="needs-validation" novalidate="">
                <div className="row g-3">
                    <div className="col-sm-5">
                        <label for="firstName" className="form-label">First name</label>
                        <input type="text" className="form-control" id="firstName" required=""/>
                        <div className="invalid-feedback"> Valid first name is required.</div>
                    </div>
                    <div className="col-sm-5">
                        <label for="lastName" className="form-label">Last name</label>
                        <input type="text" className="form-control" id="lastName"required=""/>
                        <div className="invalid-feedback"> Valid last name is required.</div>
                    </div>
                    <div className="col-10">
                        <label for="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" placeholder="you@example.com"/>
                        <div className="invalid-feedback">Please enter a valid email address for shipping updates.</div>
                    </div>
                    <div className="col-10">
                        <label for="address" className="form-label">Address</label>
                        <input type="text" className="form-control" id="address" placeholder="1234 Main St" required=""/>
                        <div className="invalid-feedback">Please enter your shipping address.</div>
                    </div>
                    <div className="col-10">
                        <label for="address2" className="form-label">Address 2 <span className="text-body-secondary">(Optional)</span></label>
                        <input type="text" className="form-control" id="address2" placeholder="Apartment or suite"/>
                    </div>
                    <div className="col-md-3">
                        <label for="country" className="form-label">Country</label>
                        <select className="form-select" id="country" required="">
                            <option value="">Choose...</option>
                            <option>United States</option>
                        </select>
                        <div className="invalid-feedback">Please select a valid country.</div>
                    </div>
                    <div className="col-md-3">
                        <label for="state" className="form-label">State</label>
                        <select className="form-select" id="state" required="">
                            <option value="">Choose...</option>
                            <option>Alabama</option>
                            <option>Alaska</option>
                            <option>Arizona</option>
                            <option>Arkansas</option>
                            <option>California</option>
                            <option>Colorado</option>
                            <option>Connecticut</option>
                            <option>Delaware</option>
                            <option>Florida</option>
                            <option>Georgia</option>
                            <option>Hawai'i</option>
                            <option>Idaho</option>
                            <option>Illinois</option>
                            <option>Indiana</option>
                            <option>Iowa</option>
                            <option>Kansas</option>
                            <option>Kentucky</option>
                            <option>Louisiana</option>
                            <option>Maine</option>
                            <option>Maryland</option>
                            <option>Massachusetts</option>
                            <option>Michigan</option>
                            <option>Minnesota</option>
                            <option>Mississippi</option>
                            <option>Missouri</option>
                            <option>Montana</option>
                            <option>Nebraska</option>
                            <option>Nevada</option>
                            <option>New Hampshire</option>
                            <option>New Jersey</option>
                            <option>New Mexico</option>
                            <option>New York</option>
                            <option>North Carolina</option>
                            <option>North Dakota</option>
                            <option>Ohio</option>
                            <option>Oklahoma</option>
                            <option>Oregon</option>
                            <option>Pennsylvania</option>
                            <option>Rhode Island</option>
                            <option>South Carolina</option>
                            <option>South Dakota</option>
                            <option>Tennessee</option>
                            <option>Texas</option>
                            <option>Utah</option>
                            <option>Vermont</option>
                            <option>Virginia</option>
                            <option>Washington</option>
                            <option>West Virginia</option>
                            <option>Wisconsin</option>
                            <option>Wyoming</option>
                        </select>
                        <div className="invalid-feedback">Please provide a valid state.</div>
                    </div>
                    <div className="col-md-3">
                        <label for="city" className="form-label">City</label>
                        <input type="text" className="form-control" id="city" placeholder="" required=""/>
                        <div className="invalid-feedback">City is required</div>
                    </div>
                    <div className="col-md-2">
                        <label for="zip" className="form-label">Zip</label>
                        <input type="text" className="form-control" id="zip" placeholder="" required=""/>
                        <div className="invalid-feedback">Zip code required.</div>
                    </div>
                </div>
                    <hr className="my-4"/>
                        <h4 className="mb-3">Payment</h4>
                        <div className="row gy-3">
                            <div className="col-md-6">
                                <label for="cc-name" className="form-label">Name on card</label>
                                <input type="text" className="form-control" id="cc-name" placeholder="" required=""/>
                                <small className="text-body-secondary">Full name as displayed on card</small>
                                <div className="invalid-feedback">
                                    Name on card is required
                                </div>
                            </div>
                            <div className="col-md-6">
                                <label for="cc-number" className="form-label">Credit card number</label>
                                <input type="text" className="form-control" id="cc-number" placeholder="" required=""/>
                                <div className="invalid-feedback">
                                    Credit card number is required
                                </div>
                            </div>
                            <div className="col-md-3">
                                <label for="cc-expiration" className="form-label">Expiration</label>
                                <input type="text" className="form-control" id="cc-expiration" placeholder="" required=""/>
                                <div className="invalid-feedback">
                                    Expiration date required
                                </div>
                            </div>
                            <div className="col-md-3">
                                <label for="cc-cvv" className="form-label">CVV</label>
                                <input type="text" className="form-control" id="cc-cvv" placeholder="" required=""/>
                                <div className="invalid-feedback">
                                    Security code required
                                </div>
                            </div>
                        </div>
                    <hr className="my-4"/>
                        <button className="w-100 btn btn-lg" id="buttons" type='submit' onClick={() => {secondGo()}}>Continue to checkout</button>
                </form>
            </div>
        </div>
        )
    }
}

export default Cart