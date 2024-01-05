import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react';



ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
  domain="dev-2qx41ykchnb0sevp.us.auth0.com"
  clientId="ezqWhX9Ia9DPpHt88dNLCjw5xRZgN8MF"
  authorizationParams={{
    redirect_uri: window.location.origin
  }}
>
  <App />
</Auth0Provider>,

)
