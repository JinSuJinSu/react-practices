import React from 'react';

const App = function (){
    // const App = document.createElement("h1");
    // App.textContent = "Hello world";
    const App = React.createElement("h1",null,'Hello world');
    return App;
}

export {App}
