import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";

const AllProducts = () => {

    const [allProducts, setAllProducts] = useState([])

    const [deleteToggle, setDeleteToggle] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then(res => {
                // console.log("response:", res)
                setAllProducts(res.data.results);
            })

            .catch(err => {
                console.log("errrr", err)
            })
    }, [deleteToggle])


    const deleteProduct = (id) => {
        console.log("And then she aint yo ho no mo - Michael", id);
        axios.delete(`http://localhost:8000/api/products/${id}`)

            .then(res=>{
                console.log("res after deleting!!!!", res)
                setDeleteToggle(!deleteToggle)
            })

            .catch(err=>console.log(err))
    }





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

                                    <p><Link to={`/edit/${prodObj._id}`} className='btn btn-info' >Edit {prodObj.title}</Link></p>

                                    <button onClick={(e)=>{deleteProduct(prodObj._id)}} className="btn btn-danger">Delete {prodObj.title}</button>
                                    
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