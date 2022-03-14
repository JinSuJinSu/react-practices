import React, {Fragment} from 'react';
import Header from './Header';
import Content from './Content';
import {$} from jquery;

const App = function(){
    return (
        <Fragment>
            <Header/>
            <Content/>
        </Fragment>
    );
};

export default App;