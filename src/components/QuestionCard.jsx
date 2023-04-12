import React from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../utils/routes';
import Accordion from '../components/Accordion';

import styles from '../scss/QuestionCard.module.scss';

const QuestionCard = () => {
    const activeLink = `${styles.activeLink}`;
    const normalLink = `${styles.normalLink}`;
    return (
        <section>
            <div className={styles.questionCard}>
                <h1 className={styles.text}>Остались вопросы?</h1>
                <NavLink
                    to={ROUTES.FORM}
                    className={({ isActive }) => (isActive ? activeLink : normalLink)}>
                    Задать вопрос
                </NavLink>
            </div>

            <Accordion />
        </section>
    );
};
export default QuestionCard;
