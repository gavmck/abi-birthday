import React from 'react';
import classNames from 'classnames';

import styles from './card.module.scss';

export default function Card({ theme, children }) {
  const cx = classNames(styles.card, {
    [`${styles[theme]}`]: theme,
  });
  return (
    <div className={cx}>
      <div className={styles.inner}>
        {children}
      </div>
    </div>
  );
}
