import logo from './assets/images/logo.svg';
import './assets/css/App.css';

import React from 'react';

const App = function (){
    // const App = document.createElement("h1");
    // App.textContent = "Hello world";
    const imgSrc=logo;
    return (
    <header class='App-header'>
        <img src={imgSrc} class='App-logo' alt='logo'/>
        <p>Hello World</p>
    </header>
    )
}

export {App}