import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {register} from '../utils/APIRoutes';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    const toastOptions = {
        position: 'bottom-right',
        autoClose: 8000,
        draggable: true,
        theme: 'dark',
    };
    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (handleValidation()) {
            try {
                const {firstName, lastName, email, password, confirmPassword} = values;
                await axios.post(register, {
                    firstName,
                    lastName,
                    email,
                    password,
                    confirmPassword,
                });

                navigate('/login');
            } catch (err) {
                if (err.message === 'Network Error') {
                    toast.error('Network Error', toastOptions);

                    return;
                }
                toast.error('Something went wrong', toastOptions);
            }
        }
    };

    const handleValidation = () => {
        const {password, confirmPassword} = values;

        if (password.length < 5) {
            toast.error('Password should be equal or greater than 5 characters', toastOptions);
            return false;
        } else if (password !== confirmPassword) {
            toast.error('Password and confirm password should be same', toastOptions);
            return false;
        }

        return true;
    };

    const handleChange = (event) => {
        setValues({...values, [event.target.name]: event.target.value.trim()});
    };

    useEffect(() => {
        const checkAuthenticate = async () => {
            const user = await JSON.parse(localStorage.getItem('movie-user'));
            if (user) {
                navigate('/');
            }
        };
        checkAuthenticate();
    }, []);

    return (
        <>
            <div className='container mt-5'>
                <div className='row py-5 mb-5 justify-content-center'>
                    <div className='col-12 col-md-6'>
                        <form onSubmit={(event) => handleSubmit(event)}>
                            <h1 className='text-center mb-3'>Register Form</h1>
                            <div className='mb-3'>
                                <label htmlFor='firstname' className='form-label'>
                                    Firstname
                                </label>
                                <input type='text' className='form-control' id='firstname' placeholder='Enter Firstname' name='firstName' onChange={(e) => handleChange(e)} autoFocus required />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='lastName' className='form-label'>
                                    Lastname
                                </label>
                                <input type='text' className='form-control' id='lastName' placeholder='Enter Lastname' name='lastName' onChange={(e) => handleChange(e)} required />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='email' className='form-label'>
                                    Email
                                </label>
                                <input type='text' className='form-control' id='email' placeholder='Enter Email' name='email' onChange={(e) => handleChange(e)} required />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='password' className='form-label'>
                                    Password
                                </label>
                                <input type='password' className='form-control' id='password' placeholder='Enter Password' name='password' onChange={(e) => handleChange(e)} required />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='confirmPassword' className='form-label'>
                                    Confirm Password
                                </label>
                                <input type='password' className='form-control' id='confirmPassword' placeholder='Enter Confirm Password' name='confirmPassword' onChange={(e) => handleChange(e)} required />
                            </div>
                            <button type='submit' className='btn btn-dark'>
                                Register
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    );
};

export default Register;
