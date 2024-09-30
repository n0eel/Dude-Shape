import React from 'react'

const NavbarItem = ({item}) => {
  return (
    <li>
        <a className='hover:text-[#154444] duration-300 font-normal text-[16px] leading-[20px] text-[#161616]' href={item.path}>{item.title}</a>
    </li>
  )
}

export default NavbarItem
