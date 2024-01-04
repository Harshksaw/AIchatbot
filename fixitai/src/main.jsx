import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<GoogleOAuthProvider clientId="952966557409-s1lm15dmm9945ugqc3o91orgjtt8qeo8.apps.googleusercontent.com">

  
      <App />
</GoogleOAuthProvider>

  </React.StrictMode>,
)
