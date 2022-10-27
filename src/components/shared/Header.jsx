import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./styles/Header.css"
import 'boxicons'

const Header = () => {
  return (
    <header className='Header'>
        <h1 className='header__title'>
            <Link className='header__link' to="/">
                e-commerce
            </Link></h1>
        <nav className='header__nav'>
            <ul className='header__list'>
                <li className='header__item'>
                    <NavLink className='header__link' to="/login">
                        <box-icon name='user-pin' color="#0005" size="sm"></box-icon>
                    </NavLink>
                </li>
                <li className='header__item'>
                    <NavLink className='header__link' to="/purchases">
                        <box-icon name='archive' color="#0005" size="sm"></box-icon>
                    </NavLink>
                </li>
                <li className='header__item'>
                    <NavLink className='header__link' to="/cart">
                        <box-icon name='cart' color="#0005" size="sm"></box-icon>
                    </NavLink>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header