import { useState } from 'react';

export const useInc = ({
    maxValue = 100000,
    minValue = -100000,
    initial = 0,
    step = 1
}) => {
    const [value, setValue] = useState(initial);

    const inc = () => {
       setValue(prevState => (prevState >= maxValue ? maxValue : prevState + step));
    };

    const dec = () => {
       setValue(prevState =>(prevState >= minValue ? minValue : prevState - step));
    };

    const reset = () => setValue(initial);

     return  [ value, {inc, dec, reset} ]
};