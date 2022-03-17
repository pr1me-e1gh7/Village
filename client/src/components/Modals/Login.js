import React, { useState } from 'react';
import logo from '../../assets/villagelogowhitecropped.png'
import bkgd from '../../assets/stocksmalltown3.gif'
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';

const Login = (props) => {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error, data }] = useMutation(LOGIN_USER);
  
    // update state based on form input changes
    const handleChange = (event) => {
        const { name, value } = event.target;
  
        setFormState({
            ...formState,
            [name]: value,
        });
    };
  
    // submit form
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);
        try {
            const { data } = await login({
                variables: { ...formState },
            });
  
            Auth.login(data.login.token);
        } catch (e) {
            console.error(e);
        }
  
        // clear form values
        setFormState({
            email: '',
            password: '',
        });
    };
  
    return (
        <>
            <img src={bkgd} alt="entrybkgd" className='custombkgd'></img>
            <header className='bgcustom text-light p-2'>
                <img src={logo} alt="villagelogo" className='entrylogo'></img>
            </header>
            <body className='entryPage'>
                {data ? (
                <p>
                    Success! You may now head{' '}
                    <Link to="/Profile">back to the homepage.</Link>
                </p>
                ) : (
                
                <form onSubmit={handleFormSubmit}>
                    <ul className='entryStyle'>
                        <li>Login Below</li>
                        <li>
                            <input
                            className="form-input"
                            placeholder="Your email"
                            name="email"
                            type="email"
                            value={formState.email}
                            onChange={handleChange}
                            />
                        </li>
                        <li>
                            <input
                            className="form-input"
                            placeholder="******"
                            name="password"
                            type="password"
                            value={formState.password}
                            onChange={handleChange}
                            />
                        </li>
                        <li>
                            <button
                                className="btn btn-block btn-primary"
                                style={{ cursor: 'pointer' }}
                                type="submit"
                            >
                                Submit
                            </button>
                        </li>
                    </ul>
                </form>
                )}
                {error && (
                <div className="my-3 p-3 bg-danger text-white">
                    {error.message}
                </div>
                )}
            </body>
        </>
    );
};

export default Login;
