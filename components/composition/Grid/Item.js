import React from 'react';

import styles from './grid.module.scss';

export default function Item({ children }) {
  return (
    <div className={styles.item}>
      {children}
    </div>
  );
}
