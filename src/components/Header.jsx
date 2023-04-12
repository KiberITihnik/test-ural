import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../utils/routes';
import styles from '../scss/Header.module.scss';
import logo from '../img/logo.jpg';
import search from '../svg/search.svg';
import Navbar from './Navbar';

const Header = () => {
    const activeLink = `${styles.activeLink}`;
    const normalLink = `${styles.normalLink}`;
    return (
        <header className={styles.header}>
            <img src={logo} alt="" className={styles.logo} />
            <ul className={styles.nav}>
                <li className={styles.navItem}>
                    <NavLink
                        to={ROUTES.HOME}
                        className={({ isActive }) => (isActive ? activeLink : normalLink)}>
                        Форма
                    </NavLink>
                </li>
                <li className={styles.navItem}>
                    <NavLink
                        to={ROUTES.MAP}
                        className={({ isActive }) => (isActive ? activeLink : normalLink)}>
                        Карта
                    </NavLink>
                </li>
            </ul>

            <img src={search} alt="" className={styles.search} />
            <Navbar />
        </header>
    );
};

export default Header;
