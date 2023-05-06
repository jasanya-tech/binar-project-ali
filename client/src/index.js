import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {ThemeProvider} from '@mui/material';
import {theme} from './theme';
import 'bootstrap/dist/css/bootstrap.min.css';
import {GoogleOAuthProvider} from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <GoogleOAuthProvider clientId='508742450025-4remddhf67i78e8q7dm8q3j75mslmtn5.apps.googleusercontent.com'>
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        </GoogleOAuthProvider>
    </React.StrictMode>
);
