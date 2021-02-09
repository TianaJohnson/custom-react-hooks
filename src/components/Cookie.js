import React from 'react';
import { useCookies } from '../hooks';

const Cookie = () => {

    const [ cookie, setCookie] = useCookies({key: "test,"});
    console.log('cookie', cookie); 
    setCookie("set value");
    if (!cookie) return null;

    return (
        <div>
            <h1>{cookie}</h1>
        </div>
    )
}

export default Cookie;