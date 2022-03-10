import React from 'react'

function clock02(){
    let date = new Date();
    let session="AM";
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    return (
        <div>
            {('0'+ (hour>12 ? hour-12 : hour)).slice(-2)}
            :
            {('0'+ minute).slice(-2)}
            :
            {('0'+ second).slice(-2)}
            {' '}
            {hour >=12 ? 'PM' : 'AM'}
            </div>
    )
}

export default clock02