import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const NewAuthorForm = (props) => {

    let [name, setName] = useState("");


    let [errors, setErrors] = useState({})

    const history = useHistory();


    const addAuthor = (e) => {
        e.preventDefault();


        let formInfo = { name }

        axios.post("http://localhost:8000/api/authors", formInfo)

            .then(res => {
                console.log("response after posting form.", res)

                if (res.data.error) {
                    setErrors(res.data.error.errors);
                }
                else {

                    setName("");

                    props.setNewAuthorToggle(!props.newAuthorToggle);

                    history.push("/");
                }

            })

            .catch(err => console.log("RREEEEEEEE", err))
    }

    return (
        <div>
            <form onSubmit={addAuthor}>

                <div className='form-group'>
                    <label htmlFor="">Name:</label>
                    <input type="text" onChange={(e) => setName(e.target.value)} className="form-control" value={name} />
                    <p className="text-danger">{errors.name?.message}</p>
                </div>

                <input type="submit" value="Add Author" className="btn btn-warning" />
            </form>
        </div>
    );
};

export default NewAuthorForm;