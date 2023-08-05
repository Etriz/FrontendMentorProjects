import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './nav.module.css';

import Logo from '../../public/assets/shared/logo.svg';

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <Image className={styles.logo} src={Logo} height={48} width={48} alt="logo" />
      <div className={styles.linkBar}>
        <Link href="/">00 Home</Link>
        <Link href="../destination">01 Destination</Link>
        <Link href="/crew">02 Crew</Link>
        <Link href="/technology">03 Technology</Link>
      </div>
    </nav>
  );
};

export default Nav;
