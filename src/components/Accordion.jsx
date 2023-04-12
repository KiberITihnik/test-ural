import React, { useEffect, useRef, useState } from 'react';
import '../scss/accordion.scss';
import arrow from '../svg/arrow.svg';

const Accordion = () => {
    const [toggle, setToggle] = useState(false);
    const [heightEl, setHeightEl] = useState();

    const refHeight = useRef();

    useEffect(() => {
        setHeightEl(`${refHeight.current.scrollHeight}px`);
    }, []);

    const toggleState = () => {
        setToggle(!toggle);
    };
    return (
        <div className="accordion">
            <button onClick={toggleState} className="accordion-visible">
                <span>Инвесторам</span>
                <img className={toggle && 'active'} src={arrow} />
            </button>

            <div
                className={toggle ? 'accordion-toggle animated' : 'accordion-toggle'}
                style={{ height: toggle ? `${heightEl}` : '0px' }}
                ref={refHeight}>
                <p aria-hidden={toggle ? 'true' : 'false'}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, suscipit
                    quae maiores sunt ducimus est dolorem perspiciatis earum corporis unde, dicta
                    quibusdam aut placeat dignissimos distinctio vel quo eligendi ipsam.
                </p>
            </div>
        </div>
    );
};

export default Accordion;
