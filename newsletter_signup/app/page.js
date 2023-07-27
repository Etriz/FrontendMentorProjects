import Image from "next/image";
import Form from "./form";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* <!-- Sign-up form start --> */}

      <Form />

      {/* <!-- Sign-up form end --> */}

      <Image
        src="/images/illustration-sign-up-desktop.svg"
        width="400"
        height="593"
        alt=""
      />
    </main>
  );
}
