import React from 'react'
import {useHover} from '../hooks/useHover';
import { Card } from '../Elements';
import black from '../black.png';



const Hover = () => {

    const [isHovered, bind] = useHover();
    console.log("is hovered", isHovered)

    return (
        <div>
            <Card {...bind} style={{ background: isHovered ? "var(--black)" : "var(--purp)"}}>
            <h3>Some card</h3>
            <img src={black} />
          </Card>
        </div>
    )
}

export default Hover;
