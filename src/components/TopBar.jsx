import React from 'react';

import styles from './TopBar.module.scss';

const TopBar = ({ title, children }) => (
    <header className={styles['app-header']}>
        <h1 className={styles.heading}>{title}</h1>
        <h2 className={`${styles.heading} ${styles.h3}`}>
            {children}
        </h2>
    </header>
);

export default TopBar;