import React from 'react';

import styles from './Card.module.scss';

const Card = ({ children }) => (
    <section className={styles.card}>
        {children}
    </section>
);

export default Card;
