import React from 'react'

function clock(){
    let date = new Date();
    let session="AM";
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    return (
        /*
            comment01 : 컴포넌트 언어기 때문에 자바스크립트 구문이 가능하다.

        */
        <div
            /*
                comment02 : 여기서도 다중행 주석은 가능하다.(권장하지 않음)
            */
            className='clock'
            title='시계'
        >
            {('0'+ (hour>12 ? hour-12 : hour)).slice(-2)}
            { ':' }
            {
                /*
                    comment03 : 이런 방식으로 표현식이 실행되는 블록안에서 
                    주석을 달아야 한다.(권장방법)
                */
            }
            {('0'+ minute).slice(-2)}
            { ':' }
            {/*
                JSX는 HTML이 아니다(<!-- --> 주석 사용 불가능)
            */}
            {('0'+ second).slice(-2)}
            {' '}
            // comment04 : JSX안에서 주석을 사용하지만 내용은 그대로 나옴
            {hour >=12 ? 'PM' : 'AM'}
        </div>
    )
}

export default clock