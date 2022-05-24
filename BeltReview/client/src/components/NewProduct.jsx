import React, { useState } from 'react';
import axios from 'axios';

const NewProductForm = () => {

    let [title, setTitle] = useState("");
    let [price, setPrice] = useState("");
    let [description, setDescription] = useState("");
    let [isDesigner, setIsDesigner] = useState(false);


    let [errors, setErrors] = useState({})



    const addProduct = (e) => {
        e.preventDefault();


        let formInfo = { title, price, description, isDesigner }

        axios.post("http://localhost:8000/api/products", formInfo)

            .then(res => {
                console.log("response after posting form.", res)

                if (res.data.error) {
                    setErrors(res.data.error.errors);
                }
                else {

                    setTitle("");
                    setPrice("");
                    setDescription("");
                    setIsDesigner(false);
                }

            })

            .catch(err => console.log("RREEEEEEEE", err))
    }

    return (
        <div>
            <form onSubmit={addProduct}>

                <div className='form-group'>
                    <label htmlFor="">Title:</label>
                    <input type="text" onChange={(e) => setTitle(e.target.value)} className="form-control" value={title} />
                    <p className="text-danger">{errors.title?.message}</p>
                </div>

                <div className='form-group'>
                    <label htmlFor="">Price:</label>
                    <input type="number" onChange={(e) => setPrice(e.target.value)} className="form-control" value={price} /><p className="text-danger">{errors.price?.message}</p>
                </div>

                <div className='form-group'>
                    <label htmlFor="">Description:</label>
                    <input type="text" onChange={(e) => setDescription(e.target.value)} className="form-control" value={description} /> <p className="text-danger">{errors.description?.message}</p>
                </div>

                <div className='form-group'>
                    <label htmlFor="">Check if Designer:</label>
                    <input type="checkbox" onChange={(e) => setIsDesigner(e.target.checked)} className="form-check-input" value={isDesigner} />
                </div>

                <input type="submit" value="Add Product" className="btn btn-warning" />
            </form>
        </div>
    );
};

export default NewProductForm;