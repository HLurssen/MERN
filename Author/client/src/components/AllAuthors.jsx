import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";

const AllAuthors = (props) => {

    const [allAuthors, setAllAuthors] = useState([])

    const [deleteToggle, setDeleteToggle] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:8000/api/authors")
            .then(res => {
                // console.log("response:", res)
                setAllAuthors(res.data.results);
            })

            .catch(err => {
                console.log("errrr", err)
            })
    },[deleteToggle, props.newAuthorToggle])


    const deleteAuthor = (id) => {
        console.log("And then she aint yo ho no mo - Michael", id);
        axios.delete(`http://localhost:8000/api/authors/${id}`)

            .then(res=>{
                console.log("res after deleting!!!!", res)
                setDeleteToggle(!deleteToggle)
            })

            .catch(err=>console.log(err))
    }





    return (
        <div>
            <h2>All Authors List</h2>
            <div className="cards">
                {
                    allAuthors.map((authorObj, idx) => {
                        return (
                            <div key = {authorObj._id} className="card mx-auto mb-3" style={{ width: '18rem' }}>
                                <div className="card-body">

                                    <h5 className="card-title"> <Link to={`/authors/${authorObj._id}`}>{authorObj.name}</Link></h5>

                                    {/* <h6 className="card-subtitle mb-2 text-muted"> {authorObj.type}</h6> */}

                                    {/* <p className="card-text">{authorObj.description}</p> */}

                                    <p><Link to={`/edit/${authorObj._id}`} className='btn btn-info' >Edit {authorObj.name}</Link></p>

                                    <button onClick={(e)=>{deleteAuthor(authorObj._id)}} className="btn btn-danger">Delete {authorObj.name}</button>
                                    
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    );
};

export default AllAuthors