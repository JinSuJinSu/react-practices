import React from 'react';

const App = function (){
    // const App = document.createElement("h1");
    // App.textContent = "Hello world";
    const message = "hello world";
    return (
    <div>
        <h1>{message}</h1>
    </div>
    );
}

export {App}
