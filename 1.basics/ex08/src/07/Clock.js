import React from 'react'

function clock(){
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    const html = 
        "<span>" + 
        ('0'+ (hour>12 ? hour-12 : hour)).slice(-2) + 
        ":" + 
        ('0'+ minute).slice(-2) + 
        ":" + 
        ('0'+ second).slice(-2) + 
        ' ' + 
        (hour >=12 ? 'PM' : 'AM') + 
        "</span>";
    return (
        // html 태그를 동적으로 생성하여 JSX element의 특정 속성(dangerouslySetInnerHTML)
        // 으로 랜더링하는 작업은 금지하고 있지만 
        // XSS(Cross-site Scripting) 보호기능을 끄고 사용할 수 있다.
        
        <div dangerouslySetInnerHTML={{__html:html}}/>
    )
}

export default clock