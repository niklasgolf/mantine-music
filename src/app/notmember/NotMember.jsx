'use client';

import styles from './NotMember.module.css';

export default function NotMember() {
  return (
    <div className={styles.centered}>
      <h1>You are not authorized to access this application.</h1>
    </div>
  );
}