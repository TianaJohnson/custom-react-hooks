import React, { useState, useMemo } from 'react'
import { Card } from '../Elements';
import black from '../black.png';


const Hover = () => {

    const [isHovered, setIsHovered] = useState(false);
    console.log("is hovered", isHovered);

    const bind = useMemo(() => {
        return {
            onMouseOver: () => setIsHovered(true),
            onMouseLeave: () => setIsHovered(false),
        }
    }, []);

    return (
        <div>
            <Card {...bind} style={{ background: "var(--black)" }}>
            <h3>Some card</h3>
            <img src={black} />
          </Card>
        </div>
    )
}

export default Hover;
