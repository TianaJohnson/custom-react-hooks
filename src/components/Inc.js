import React from 'react';
import { useInc } from '../hooks/useInc';

export const Inc = () => {

    const [value, { dec, inc}] = useInc();

    return (
        <div>
            <button onClick={dec}>-</button>
            {value}
            <button onClick={inc}>+</button>
        </div>
    )
}

export default Inc;
