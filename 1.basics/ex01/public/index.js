function App(){
    const App = document.createElement("h1");
    App.textContent = "Hello world";
    return App;
}

document.getElementById("root").appendChild(App());