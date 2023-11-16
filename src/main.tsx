import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';


ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Auth0Provider
            domain="dev-t4pozairhg2tbsk1.us.auth0.com"
            clientId="1Msun0qmJ11i2CXS13GEYdtd67bwU7RR"
            authorizationParams={{
                redirect_uri: window.location.origin
            }}
        >
            <App />
        </Auth0Provider>

    </React.StrictMode>
);
