import React, { useState } from 'react';

const HookForm = props => {

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [conpassword, setConPassword] = useState("");

    const [firstnameErr, setFirstnameErr] = useState("");
    const [lastnameErr, setLastnameErr] = useState("");
    const [emailErr, setEmailErr] = useState("");
    const [passwordErr, setPasswordErr] = useState("");
    const [conpasswordErr, setConPasswordErr] = useState("");

    const handleFirstName = (e) => {
        setFirstname(e.target.value);
        if (e.target.value.length < 2) {
            setFirstnameErr("First Name must be at least 2 charactors")
        } else {
            setFirstnameErr('');
        }
    }


    const handleLastName = (e) => {
        setLastname(e.target.value);
        if (e.target.value.length < 2) {
            setLastnameErr("Last Name must be at least 2 charactors")
        } else {
            setLastnameErr('');
        }
    }


    const handleEmail = (e) => {
        setEmail(e.target.value);
        if (e.target.value.length < 5) {
            setEmailErr("Email must be at least 5 charactors")
        } else {
            setEmailErr('');
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length < 8) {
            setPasswordErr("Email must be at least 8 charactors")
        } else {
            setPasswordErr('');
        }
    }


    const handleConPassword = (e) => {
        setConPassword(e.target.value);
        if (password !== e.target.value) {
            setConPasswordErr("Passwords must match")
        } else {
            setConPasswordErr('');
        }
    }

    return (
        <div>
            <div>
                <form>
                    <div>
                        <label>Firstname: </label>
                        <p>{firstnameErr}</p>
                        <input type="text" onChange={handleFirstName} />
                    </div>
                    <div>
                        <label>Lastname: </label>
                        <p>{lastnameErr}</p>
                        <input type="text" onChange={handleLastName} />
                    </div>
                    <div>
                        <label>Email Address: </label>
                        <p>{emailErr}</p>
                        <input type="text" onChange={handleEmail} />
                    </div>
                    <div>
                        <label>Password: </label>
                        <p>{passwordErr}</p>
                        <input type="text" onChange={handlePassword} />
                    </div>
                    <div>
                        <label>Confirm Password: </label>
                        <p>{conpasswordErr}</p>
                        <input type="text" onChange={handleConPassword} />
                    </div>
                    <input type="submit" value="Create User" />
                </form>
            </div>

            <div>
                <h2>Your form data</h2>
                <p>Firstname:{firstname}</p>
                <p>Lastname:{lastname}</p>
                <p>Email:{email}</p>
                <p>Password:{password}</p>
                <p>Confirm Password:{conpassword}</p>
            </div>
        </div>
    )
}

export default HookForm;