import React, {useState, useEffect} from 'react';
import './assets/scss/App.scss'
import Clock from './Clock';

export default function App() {


    return (
            <Clock
                message={'ex05: useEffect Hook example'}
                hours={10}
                minutes={25}
                seconds={40}/>
    );
}