import React from 'react';
import { useScrollFreeze } from 'hooks';
import { useAppState } from '../state';


const NavWrapper = () => {
    const { isMenuOpen } = useAppState();
    if ( !isMenuOpen) return null;
    return < Nav />
}

const Nav = () => {
    const { toggleMenu } = useAppState();
    useScrollFreeze();


    return (
        <nav
        style={{
            background: 'var(--black)',
            color: "white",
            positon: "fixed",
            width: '100vw',
            height: '100vh',
            left: 0,
            right: 0
        }} >
           <h1>Hello</h1>
           <button onClick={toggleMenu}>close</button>
        </nav>
    );
};

export default NavWrapper;
