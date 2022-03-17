import React, { useState } from 'react';
import logo from '../../assets/villagelogowhitecropped.png'
import bkgd from '../../assets/stocksmalltown3.gif'
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';

const Signup = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
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
              <li>Signup Below</li>
              <li>
                <input
                  className="form-input"
                  placeholder="Your username"
                  name="username"
                  type="text"
                  value={formState.name}
                  onChange={handleChange}
                />
              </li>
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

export default Signup;
