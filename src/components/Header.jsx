import React from 'react'
import {Logo, SearchIcon, MoreIcon } from '../assets/images/Icon'
import NavbarItem from './NavbarItem'


const Header = () => {
    const navbarList = [
        {
            id: 1,
            title: "Home",
            path: "#" 
        },
        {
            id: 2,
            title: "About",
            path: "#" 
        },
        {
            id: 3,
            title: "Features",
            path: "#" 
        },
        {
            id: 4,
            title: "Contact",
            path: "#" 
        }
    ]

  return (
    <header className='my-[40px] sm:my-0 sm:mt-[44px] sm:mb-[26px]'>
        <div className='containers'>
            <div className='flex items-center justify-between'>
                <a className='inline-block text-black' href="/">
                    <Logo/>
                </a>
                <ul className='hidden md:flex gap-[74px] items-center'>{navbarList.map(item => <NavbarItem key={item.id} item={item}/>)}</ul>
                <div className='flex items-center space-x-[30px] '>
                    <button className='hidden sm:block'><SearchIcon/></button>
                    <button><MoreIcon/></button>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header
