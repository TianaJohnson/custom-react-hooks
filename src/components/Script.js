import React from 'react'
import { useScript } from '../hooks';



export const Script = () => {

    const [ isLoaded, isError ] = useScript(
        "http://www.google.com/recaptcha/api.js"
        );
    console.log('isLoaded, isError', isLoaded, isError);


    return (
        <div>
            <h3>script</h3>
        </div>
    )
}

export default Script;
