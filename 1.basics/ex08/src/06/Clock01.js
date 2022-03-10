import React from 'react'

function clock01(){
    let date = new Date();
    let session="AM";
    let hour = date.getHours();
    let minute = ('0'+date.getMinutes()).slice(-2);
    let second = ('0'+date.getSeconds()).slice(-2);

    if(hour==12){
        session='PM';
    }
    if(hour>12){
        session='PM';
        hour-=12;
    }

    hour=('0'+hour).slice(-2)

    return (
        <div>{hour}:{minute}:{second} {session}</div>
    )
}

export default clock01