import './assets/css/App.css';
const App = function (){
    const App = document.createElement("h1");
    App.className='Header';
    App.textContent = "Hello webpack";
    return App;
}

export {App}
