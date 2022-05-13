import React, { useState } from "react";


const Form = () => {

    let [name, setName] = useState("");
    let [age, setAge] = useState("");
    let [type, setType] = useState("");
    let [date, setDate] = useState("");
    let [imgUrl, setImgUrl] = useState("");
    let [specialReq, setspecialReq] = useState("");


    return (
        <>
            <h3>Schedule Below</h3>
            <form>
                <div className="form-group">
                    <label htmlFor="">Name:</label>
                    <input type="text" onChange={(e) => { setName(e.target.value) }} name="" id="" className="form-control" />
                    {
                        name.length < 2 ? <p className="text-danger">Name Must be at least 2 characters.</p> : null
                    }
                </div>

                <div className="form-group">
                    <label htmlFor="">Age:</label>
                    <input type="number" onChange={(e) => { setAge(e.target.value) }} name="" id="" className="form-control" />
                    {
                        age < 1 ? <p className="text-danger">Age must be greater than 1</p> : null
                    }
                </div>

                <div className="form-group">
                    <label htmlFor="">Type:</label>
                    <select name="" id="" className="form-select" onChange={(e) => { setType(e.target.value) }} >
                        <option value="Dog">Dog</option>
                        <option value="Cat">Cat</option>
                        <option value="Bird">Bird</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="">Appointment Date:</label>
                    <input type="date" name="" id="" className="form-control" onChange={(e) => { setDate(e.target.value) }} />
                    {
                        date < 1 ? <p className="text-danger">Date is required</p> : null
                    }
                </div>

                <div className="form-group">
                    <label htmlFor="">Pet img URL:</label>
                    <input type="text" name="" id="" className="form-control" onChange={(e) => { setImgUrl(e.target.value) }} />
                </div>

                <div className="form-group">
                    <label htmlFor="">Special Request:</label>
                    <textarea className="form-control" name="" id="" cols="30" rows="10"></textarea>
                    <input type="text" name="" id="" className="form-control" onChange={(e) => { setspecialReq(e.target.value) }} />
                </div>
                
                <input className="btn btn-success mt-2 " type="submit" />
            </form>
            <hr />

            <h3>Pets Info Here:</h3>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Date: {date}</p>
            <p>Type: {type}</p>
            <p>{name}'s Image: <img src={imgUrl} alt="" width="250px" /></p>
            <p>Special Request: {specialReq}</p>
        </>
    )
}

export default Form;