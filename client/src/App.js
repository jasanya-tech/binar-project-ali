import {BrowserRouter, Route, Routes} from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import Navbar from './components/Navbar';
import Detail from './components/Detail';
import Landing from './pages/Landing';
import Other from './pages/Other';
import Login from './pages/Login';
import Register from './pages/Register';
import Search from './components/Search';

function App() {
    const [isLogin, setIsLogin] = useState(false);
    useEffect(() => {
        const checkAuthenticate = async () => {
            const user = await JSON.parse(localStorage.getItem('movie-user'));
            if (user) {
                setIsLogin(true);
            }
        };
        checkAuthenticate();
    }, []);
    return (
        <BrowserRouter>
            <Navbar isLogin={isLogin} />
            <Routes>
                <Route path='/' element={<Landing />} />
                <Route path='/movies' element={<Other />} />
                <Route path='/detail' element={<Detail />} />
                <Route path='/search' element={<Search />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
