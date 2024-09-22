import { useState, useEffect } from 'react'
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import ContentWrapper from '../contentWrapper/ContentWrapper'
import './style.css';

const Navbar = () => {
    const [menu, setMenu] = useState(false);
    const [nav, setNav] = useState('top');
    const [scroll, setScroll] = useState(0);

    const scrollHandler = () => {
        if(menu) {
            setMenu(false);
        }
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
        <header className={`header fixed  w-full h-16 z-10 flex items-center transition-all duration-300 ease-out ${nav} `}>
            <ContentWrapper className="flex items-center justify-between">
                <ul className={`nav-list md:flex items-center gap-14 list-none ${menu ? 'md:hidden mbView' : 'hidden'} `}>
                    <li className={`nav-list-ele ${menu ? 'mbView-Ele' : ''}`}><a href="#">Home</a></li>
                    <li className={`nav-list-ele ${menu ? 'mbView-Ele' : ''}`}><a href="#">About</a></li>
                </ul>
                <div className="logo">
                    LOGO
                </div>
                <ul className={`nav-list md:flex items-center gap-14 list-none ${menu ? 'md:hidden mbView left-28' : 'hidden'} `}>
                    <li className={`nav-list-ele ${menu ? 'mbView-Ele' : ''}`}><a href='#'>Contact Us</a></li>
                    <li className={`nav-list-ele ${menu ? 'mbView-Ele' : ''}`}><a href='#'>Product</a></li>
                </ul>

                <div className="mobileView align-middle md:hidden">
                    {menu ? <VscChromeClose className='text-white' onClick={() => setMenu(false)} /> : <SlMenu className='text-white' onClick={() => setMenu(true)} />}
                </div>

            </ContentWrapper>
        </header>
    )
}

export default Navbar
