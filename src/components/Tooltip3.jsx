import React, { useState } from 'react';
import styles from '../scss/ToolTipComponent3.module.scss';

const ToolTipComponent3 = ({ children }) => {
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
                    <h2>Планируемый</h2>
                </div>
            )}
        </div>
    );
};

export default ToolTipComponent3;
