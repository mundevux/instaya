import React from 'react';
import logo from '../img/Logo_InstaYa.png';
import Home from './Home';

function Header () {
    return(
        <header className='flex justify-between items-center sticky top-0'>
            <img src={logo} alt="Logo Instaya" className="h-28" />
            <nav>
                <ul className='flex'>
                    <li className='mr-6'>
                        <a href={<Home/>}>Home</a>
                    </li>
                    <li className='mr-6'>
                        <a href='./#'>About</a>
                    </li>
                    <li className='mr-6'>
                        <a href='./#'>News</a>
                    </li>
                    <li className='mr-6'>
                        <a href='./#'>Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
