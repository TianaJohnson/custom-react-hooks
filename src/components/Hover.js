import React from 'react'
import {useHover, useWindowWidth} from '../hooks';
import { Card } from '../Elements';
import black from '../black.png';



const Hover = () => {

    const [isHovered, bind] = useHover();
    const width = useWindowWidth();
    console.log("width", width)

    return (
        <div>
            <Card {...bind} style={{ background: isHovered ? "var(--black)" : "var(--purp)"}}>
            <h3>Some card</h3>
            <img src={black} alt="..."/>
          </Card>
        </div>
    )
}

export default Hover;
