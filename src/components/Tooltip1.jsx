import React, { useState } from 'react';
import styles from '../scss/ToolTipComponent1.module.scss';

const ToolTipComponent1 = ({ children }) => {
    const [showToolTip, setShowToolTip] = useState(false);

    const onMouseEnterHandler = () => {
        setShowToolTip(true);
    };

    const onMouseLeaveHandler = () => {
        setShowToolTip(false);
    };

    return (
        <div
            className={styles.container}
            onMouseEnter={onMouseEnterHandler}
            onMouseLeave={onMouseLeaveHandler}>
            {children}
            {showToolTip && (
                <div className={styles.tooltip}>
                    <h2>ИНТЦ Русский</h2>
                    <ul>
                        <li>Биотехнологии</li>
                        <li>Мировой океан</li>
                        <li>Инфоком</li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default ToolTipComponent1;
