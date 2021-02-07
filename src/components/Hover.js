import React from 'react'
import { Card } from '../Elements';
import black from '../black.png';


export const Hover = () => {
    return (
        <div>
            <Card style={{ background: "var(--black)" }}>
            <h3>Some card</h3>
            <img src={black} />
          </Card>
        </div>
    )
}
