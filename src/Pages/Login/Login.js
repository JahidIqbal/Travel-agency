import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';



const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, signInWithGoogle, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }

    return (


        <div className="container w-50" style={{ background: `linear-gradient(to right, #556270, #ff6b6b)` }} >
            {isLoading && <div className="spinner-border text-info text-center" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>}

            <h3 className="mt-5 text-center text-dark fw-bolder ">Login Form</h3>
            <form onSubmit={handleLoginSubmit}>
                <input
                    style={{ width: '100%' }}
                    label="Your Email"
                    name="email"
                    placeholder="Your Email"
                    onBlur={handleOnChange}
                />
                <br />
                <input className="mt-4"
                    style={{ width: '100%' }}
                    label="Your Password"
                    type="password"
                    name="password"
                    placeholder="Your Password"
                    onBlur={handleOnChange} />
                <br />
                <button className="btn btn-light mt-2 mb-2" type="submit">Login</button>

                {user?.email && <div className="alert alert-success" role="alert">
                    User created successFully!
                </div>}
                {authError && <div className="alert alert-danger" role="alert">
                    {authError}
                </div>}

                <p className="text-dark fw-bolder">New User? Please <Link className="text-decoration-none text-white" to="/register">Register</Link></p>
            </form>

            <button className="btn-light mb-3 border-0 rounded text-nowrap" onClick={handleGoogleSignIn} style={{ backgroundColor: '#DBF9FC' }}><i className="fab fa-google text-info"></i> Login with Google
            </button>

        </div>


    );
};

export default Login;