import React from 'react'
import { useState, useEffect } from 'react'
import ContentWrapper from '../contentWrapper/ContentWrapper'
import './style.css';

const Navbar = () => {
    // style = {
    //     listStyle : {
    //         display = "flex"
    //     }
    // }
    
    const [nav, setNav] = useState('top');
    const [scroll, setScroll] = useState(0);
    const scrollHandler = () => {
        const currScroll = window.scrollY;
        if (currScroll > 0) {
            setNav(currScroll > scroll ? 'hide' : 'show');
        } else {
            setNav('top');
        }
        setScroll(currScroll);
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollHandler);
        return () => {
            window.removeEventListener("scroll", scrollHandler);
        }
    }, [scroll]);
    

    return (
        <header className={`header fixed text-white w-full h-16 z-10 flex items-center transition-all duration-300 ease-out ${nav} `}>
            <ContentWrapper className="flex items-center justify-between">
                <ul className={`nav-list md:flex items-center gap-14 list-none `}>
                    <li className='nav-list-ele'><a href="#">Home</a></li>
                    <li className='nav-list-ele'><a href="#">About</a></li>
                </ul>
                <div className="logo">
                    LOGO
                </div>
                <ul className={`nav-list md:flex items-center gap-14 list-none `}>    
                    <li className='nav-list-ele'><a href='#'>Contact Us</a></li>
                    <li className='nav-list-ele'><a href='#'>Product</a></li>
                </ul>
            </ContentWrapper>
        </header>
    )
}

export default Navbar
