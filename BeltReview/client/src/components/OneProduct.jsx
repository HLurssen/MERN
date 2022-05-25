import React, {useState, useEffect} from "react";
import { useParams } from "react-router";
import axios from "axios";
import { useHistory } from "react-router-dom";

const OneProduct = () => {

    const { _id } = useParams();

    const history = useHistory();

    const [productInfo, setProductInfo] = useState({})



    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${_id}`)
    
            .then(res=>{
                console.log(res);
                setProductInfo(res.data.results);
    
            })
    
            .catch(err=>console.log(err))
    }, [])

    const deleteProduct = ()=>{
        // console.log("Clutch or Kicking dis bih.")
        axios.delete(`http://localhost:8000/api/products/${_id}`)

            .then(res=>{
                console.log("res---->", res)
                history.push("/")
            })

            .catch(err=>console.log(err))
    }

    return (
        <div>
            <h3>Title: {productInfo.title}</h3>
            <p>Price: $ {productInfo.price}</p>
            <p>Description: {productInfo.description}</p>
            <p>Is this Designer? {productInfo.isDesigner? "Designer": "Not Designer"}</p>
            <button onClick={deleteProduct} className="btn btn-danger">Delete {productInfo.title}</button>
        </div>
    );
};


export default OneProduct