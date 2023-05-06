import React, {useState, useEffect} from 'react';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import {login} from '../utils/APIRoutes';
import {useNavigate} from 'react-router-dom';
import {GoogleLogin} from '@react-oauth/google';

const Login = () => {
    const navigate = useNavigate();
    const toastOptions = {
        position: 'bottom-right',
        autoClose: 8000,
        draggable: true,
        theme: 'dark',
    };
    const [values, setValues] = useState({
        email: '',
        password: '',
    });

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const {email, password} = values;
            const {data} = await axios.post(login, {
                email,
                password,
            });

            localStorage.setItem('movie-user', JSON.stringify(data.token));

            toast.success('login successfully', toastOptions);
            return navigate('/');
        } catch (err) {
            if (err.message === 'Network Error') {
                toast.error('Network Error', toastOptions);

                return;
            } else if (err.response.data.message) {
                toast.error(err.response.data.message, toastOptions);

                return;
            }
            toast.error('Something went wrong', toastOptions);
        }
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
                            <h1 className='text-center mb-3'>Login Form</h1>
                            <div className='mb-3'>
                                <label htmlFor='email' className='form-label'>
                                    Email
                                </label>
                                <input type='text' className='form-control' id='email' placeholder='Enter Email' name='email' onChange={(e) => handleChange(e)} required autoFocus />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='password' className='form-label'>
                                    Password
                                </label>
                                <input type='password' className='form-control' id='password' placeholder='Enter Password' name='password' onChange={(e) => handleChange(e)} required />
                            </div>
                            <button type='submit' className='btn btn-dark mb-3'>
                                Login
                            </button>
                            <div className='d-flex justify-content-center'>
                                <GoogleLogin
                                    onSuccess={(credentialResponse) => {
                                        localStorage.setItem('movie-user', JSON.stringify(credentialResponse.credential));

                                        toast.success('login successfully', toastOptions);
                                        return navigate('/');
                                    }}
                                    onError={() => {
                                        toast.success('login failed', toastOptions);
                                    }}
                                />
                            </div>
                            ;
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    );
};

export default Login;
