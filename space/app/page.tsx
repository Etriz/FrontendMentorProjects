import Image from 'next/image';
import styles from './page.module.css';
import Nav from '../components/nav';

export default function Home() {
  return (
    <main className={styles.main}>
      <Nav />
      <div>
        So, you want to travel to Space Let’s face it; if you want to go to space, you might as well
        genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and
        relax because we’ll give you a truly out of this world experience! Explore
      </div>
    </main>
  );
}
