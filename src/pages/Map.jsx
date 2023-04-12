import React from 'react';
import styles from '../scss/Map.module.scss';
import map from '../img/intc-map.png';
import ToolTipComponent1 from '../components/Tooltip1';
import ToolTipComponent2 from '../components/Tooltip2';
import ToolTipComponent3 from '../components/Tooltip3';
import ToolTipComponent4 from '../components/Tooltip4';

const Map = () => {
    return (
        <section className={styles.section}>
            <img className={styles.map} src={map} alt="" />

            <ToolTipComponent1>
                <svg
                    className={styles.mark1}
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32">
                    <path d="M16.395 15.38c1.634 0 2.986-1.352 2.986-2.986s-1.352-2.986-2.986-2.986c-1.634 0-2.986 1.352-2.986 2.986s1.352 2.986 2.986 2.986v0zM16.395 4c4.676 0 8.395 3.718 8.395 8.395 0 6.31-8.395 15.605-8.395 15.605s-8.395-9.296-8.395-15.605c0-4.676 3.718-8.395 8.395-8.395z"></path>
                </svg>
            </ToolTipComponent1>

            <ToolTipComponent2>
                <svg
                    className={styles.mark2}
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32">
                    <path d="M16.395 15.38c1.634 0 2.986-1.352 2.986-2.986s-1.352-2.986-2.986-2.986c-1.634 0-2.986 1.352-2.986 2.986s1.352 2.986 2.986 2.986v0zM16.395 4c4.676 0 8.395 3.718 8.395 8.395 0 6.31-8.395 15.605-8.395 15.605s-8.395-9.296-8.395-15.605c0-4.676 3.718-8.395 8.395-8.395z"></path>
                </svg>
            </ToolTipComponent2>

            <ToolTipComponent3>
                <svg
                    className={styles.mark2}
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32">
                    <path d="M16.395 15.38c1.634 0 2.986-1.352 2.986-2.986s-1.352-2.986-2.986-2.986c-1.634 0-2.986 1.352-2.986 2.986s1.352 2.986 2.986 2.986v0zM16.395 4c4.676 0 8.395 3.718 8.395 8.395 0 6.31-8.395 15.605-8.395 15.605s-8.395-9.296-8.395-15.605c0-4.676 3.718-8.395 8.395-8.395z"></path>
                </svg>
            </ToolTipComponent3>

            <ToolTipComponent4>
                <svg
                    className={styles.mark2}
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32">
                    <path d="M16.395 15.38c1.634 0 2.986-1.352 2.986-2.986s-1.352-2.986-2.986-2.986c-1.634 0-2.986 1.352-2.986 2.986s1.352 2.986 2.986 2.986v0zM16.395 4c4.676 0 8.395 3.718 8.395 8.395 0 6.31-8.395 15.605-8.395 15.605s-8.395-9.296-8.395-15.605c0-4.676 3.718-8.395 8.395-8.395z"></path>
                </svg>
            </ToolTipComponent4>
        </section>
    );
};

export default Map;
