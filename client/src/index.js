import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import './components/StyleCss/RegisterLogin.css'
import './components/StyleCss/ContactUs.css'
import './components/StyleCss/Cardcss.css'
import './components/StyleCss/Loader.css'
import './components/StyleCss/ProfilUser.css'
import './components/StyleCss/Navigation.css'
import './components/StyleCss/PasswordPage.css'
import './components/StyleCss/EditProfil.css'
import './components/StyleCss/Details.css'
import './components/StyleCss/SearchBar.css'
import './components/StyleCss/UserCard.css'
import './components/StyleCss/MessageCard.css'
import './components/StyleCss/candidaturecard.css'
import './components/StyleCss/FoundUser.css'
import './components/StyleCss/Alert.css'


import { Provider } from 'react-redux';
import { store } from './JS/Store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
    <Provider store={store}> 
    <App />
    </Provider>
    </BrowserRouter>
);

