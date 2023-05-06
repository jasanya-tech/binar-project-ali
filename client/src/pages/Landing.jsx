import React, {useEffect} from 'react';
import Main from '../components/Main';
import {useNavigate} from 'react-router-dom';

const Landing = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const checkAuthenticate = async () => {
            const user = await JSON.parse(localStorage.getItem('movie-user'));
            if (!user) {
                navigate('/login');
            }
        };
        checkAuthenticate();
    }, []);
    return <Main />;
};

export default Landing;
