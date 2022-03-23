import React, { Component } from 'react';
import './assets/scss/App.scss'
import Clock from './Clock';

export default class App extends Component {
    constructor() {
        super(...arguments);
        this.state = this.getCurrentClockTime();

    }

    getCurrentClockTime(){
        const date = new Date();
        const hours = date.getHours();
        const minutess = date.getMinutes();
        const seconds = date.getSeconds();
        const session = hours > 12 ? 'pm':'am';
    }

    render() {
        return (
            <div className='clock-display'>
                <h2>ex05 - Component LifeCycle Practice</h2>
                    <Clock hours={hours} minutes={minutess} seconds={seconds} session={'am'}/>
            </div>
        );
    }
}