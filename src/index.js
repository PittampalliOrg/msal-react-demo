import React from 'react';
import ReactDOM from 'react-dom/client';

import { ThemeProvider } from '@mui/material/styles';
import { theme } from "./styles/theme";

import { BrowserRouter } from "react-router-dom";

import App from './App';

import { PublicClientApplication } from '@azure/msal-browser';

const pca = new PublicClientApplication({
    auth: {
        clientId: '36966265-4dc7-450b-91d2-d58e6912bdd0',
        authority: 'https://login.microsoftonline.com/0c4da9c5-40ea-4e7d-9c7a-e7308d4f8e38',
        redirectUri: 'http://localhost:3000',
    },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <App msalInstance={pca}/>
            </ThemeProvider>
        </BrowserRouter>
    </React.StrictMode>
);
