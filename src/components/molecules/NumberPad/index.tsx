'use client';
import { useState } from 'react';
import styles from './style.module.css';

const NumberPad = () => {
    const [inputValue, setInputValue] = useState('');

    const handleButtonClick = (number:string) => {
        if(inputValue.length > 5) return;

        setInputValue(prev => prev + number);
    };

    const handleBackspace = () => {
        setInputValue(prev => prev.slice(0, -1));
    };

    const handleClear = () => {
        setInputValue('');
    };

    return (
        <div className={styles.number_pad}>
            <ins>
                {[...inputValue.padEnd(6, '○')].map((char, index) => (
                    <kbd key={index}><span className={char !== '○' ? styles.fill : ""}>{'○'}</span></kbd>
                ))}
            </ins>
            <div className={styles.numbers}>
                {Array.from({ length: 10 }, (_, i) => (
                    <button
                        key={i}
                        type="button"
                        onClick={() => handleButtonClick(i.toString())}
                    >
                        {i}
                    </button>
                ))}
                <button onClick={handleBackspace}>&lt;-</button>
                <button onClick={handleClear}>Clear</button>
            </div>
        </div>
    );
};

export default NumberPad;