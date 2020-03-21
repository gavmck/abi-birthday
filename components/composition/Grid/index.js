import React from 'react';

import Item from './Item';

import styles from './grid.module.scss';

export default function Grid({ children }) {
  return (
    <div className={styles.grid}>
      {children}
    </div>
  );
}

Grid.Item = Item;
