import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Register = () => {
    const [loginData, setLoginData] = useState({});

    const history = useHistory();
    const { user, registerUser, isLoading, authError } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match')
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }
    return (
        <div className="container mt-4  w-50" style={{ background: `linear-gradient(to right, #70e1f5, #ffd194) ` }}>
            <h3 className="mt-5 text-center text-dark fw-bolder ">Register Form</h3>
            {
                !isLoading && <form onSubmit={handleLoginSubmit}>
                    <input className="mb-4"
                        style={{ width: '100%' }}
                        label="Your Name"
                        name="name"
                        type="text"
                        placeholder="Your Name"
                        onBlur={handleOnBlur}
                        required
                    />
                    <br />
                    <input
                        style={{ width: '100%' }}
                        label="Your Email"
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        onBlur={handleOnBlur}
                        required
                    />
                    <br />
                    <input className="mt-4"
                        style={{ width: '100%' }}
                        label="Your Password"
                        type="password"
                        name="password"
                        placeholder="Your Password"
                        onBlur={handleOnBlur} />
                    <br />

                    <input className="mt-4"
                        style={{ width: '100%' }}
                        label="ReType Your Password"
                        type="password"
                        name="password2"
                        placeholder="Re-type Password"
                        onBlur={handleOnBlur} />
                    <br />
                    <button className="btn btn-info border-0 mt-2 mb-2" type="submit" style={{ background: `linear-gradient(to right, #b993d6, #8ca6db)` }}>Register</button>


                    <p className="text-dark fw-bolder">Already have a account? Please <Link className="text-decoration-none " style={{ color: `linear-gradient(to right, #b993d6, #8ca6db)` }} to="/login">login</Link></p>

                </form>}
            {isLoading && <div className="spinner-border text-info" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>}
            {user?.email && <div className="alert alert-success" role="alert">
                User created successFully!
            </div>}
            {authError && <div className="alert alert-danger" role="alert">
                {authError}
            </div>}


        </div>
    );
};

export default Register;