import React from 'react';
import { useInc } from '../hooks';

export const Inc = () => {

    const [volume, { dec, inc, reset}] = useInc({
        maxValue: 10,
        minValue: 0,
        initial: 10
    });

    return (
        <div>
            <h3>Volume</h3>
            <button onClick={dec}>-</button>
            { volume }
            <button onClick={inc}>+</button>
            <br/>
            <button onClick={reset}> Reset</button>
        </div>
    )
}

export default Inc;
