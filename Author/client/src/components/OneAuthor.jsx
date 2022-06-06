import React, {useState, useEffect} from "react";
import { useParams } from "react-router";
import axios from "axios";
import { useHistory } from "react-router-dom";

const OneAuthor = () => {

    const { _id } = useParams();

    const history = useHistory();

    const [authorInfo, setAuthorInfo] = useState({})



    useEffect(()=>{
        axios.get(`http://localhost:8000/api/authors/${_id}`)
    
            .then(res=>{
                console.log(res);
                setAuthorInfo(res.data.results);
    
            })
    
            .catch(err=>console.log(err))
    }, [])

    const deleteAuthor = ()=>{
        // console.log("Clutch or Kicking dis bih.")
        axios.delete(`http://localhost:8000/api/authors/${_id}`)

            .then(res=>{
                console.log("res---->", res)
                history.push("/")
            })

            .catch(err=>console.log(err))
    }

    return (
        <div>
            <h3>Name: {authorInfo.name}</h3>
            <button onClick={deleteAuthor} className="btn btn-danger">Adopt {authorInfo.name}</button>
        </div>
    );
};


export default OneAuthor