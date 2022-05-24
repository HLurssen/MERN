import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";

const AllProducts = () => {

    const [allProducts, setAllProducts] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then(res => {
                console.log("response:", res)
                setAllProducts(res.data.results);
            })

            .catch(err => {
                console.log("errrr", err)
            })
    }, [])



    return (
        <div>
            <h2>All Products List</h2>
            <div className="cards">
                {
                    allProducts.map((prodObj, idx) => {
                        return (
                            <div key = {prodObj._id} className="card mx-auto mb-3" style={{ width: '18rem' }}>
                                <div className="card-body">
                                    <h5 className="card-title"> <Link to={`/products/${prodObj._id}`}>{prodObj.title}</Link></h5>
                                    <h6 className="card-subtitle mb-2 text-muted">$ {prodObj.price}</h6>
                                    <p className="card-text">{prodObj.description}</p>
                                    <a href="#" className="card-link">Card link</a>
                                    <a href="#" className="card-link">Another link</a>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    );
};

export default AllProducts