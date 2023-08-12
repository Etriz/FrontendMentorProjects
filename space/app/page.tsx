import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        So, you want to travel to
        <br />
        <span className={styles.spaceTitle}>Space</span>
        <br />
        Let’s face it; if you want to go to space, you might as well genuinely go to outer space and
        not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly
        out of this world experience!
      </div>
    </main>
  );
}
