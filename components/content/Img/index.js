import React from 'react';

import styles from './img.module.scss';

export default function Img(props) {
  return (
    <img className={styles.img} width="320" height="320" {...props} />
  );
}
