import React, { useState } from 'react';
import { useOnClickOutside } from '../hook/hook';
import styles from '../scss/Navbar.module.scss';
import openMenu from '../svg/burger-menu.svg';
import closeMenu from '../svg/close.svg';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../utils/routes';

const Navbar = () => {
    useOnClickOutside(() => setNav(false));
    const [nav, setNav] = useState(false);

    return (
        <div className={styles.mobileBtn}>
            <nav>
                <div onClick={() => setNav(!nav)}>
                    {nav ? (
                        <img src={closeMenu} className={styles.icon} alt="" />
                    ) : (
                        <img src={openMenu} className={styles.icon} alt="" />
                    )}
                </div>
            </nav>

            <ul className={nav ? [styles.menu] : [styles.navigation]}>
                <li className={styles.li}>
                    <NavLink onClick={() => setNav(!nav)} to={ROUTES.MAP}>
                        Карта
                    </NavLink>
                </li>
                <li className={styles.li}>
                    <NavLink onClick={() => setNav(!nav)} to={ROUTES.HOME}>
                        Форма
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
