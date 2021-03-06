import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/App';
import reportWebVitals from './reportWebVitals';
import storeAccessTokenToSessionStorage from './authorization/accesstoken/storeAccessTokenToSessionStorage';
import generateAccessToken from './authorization/accesstoken/generateAccessToken';
import MicroserviceOptions from './services/backk-example-microservice.default/_backk/MicroserviceOptions';
import accessTokenStorageEncryptionKey from './authorization/accesstoken/accessTokenStorageEncryptionKey';

const jwt = generateAccessToken();
storeAccessTokenToSessionStorage(jwt);
MicroserviceOptions.setAccessTokenStorageEncryptionKey(accessTokenStorageEncryptionKey);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
