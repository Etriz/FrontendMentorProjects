import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* <!-- Sign-up form start --> */}

      <form className={styles.form}>
        <h1>Stay updated!</h1>

        <p>Join 60,000+ product managers receiving monthly updates on:</p>

        <p>Product discovery and building what matters</p>
        <p>Measuring to ensure updates are a success</p>
        <p>And much more!</p>
        <label htmlFor="email">Email address</label>
        <input name="email" type="email" placeholder="email@company.com" />
        <button type="submit">Subscribe to monthly newsletter</button>
      </form>

      {/* <!-- Sign-up form end --> */}

      {/* // <!-- Success message start --> */}

      {/* Thanks for subscribing!
  
    A confirmation email has been sent to ash@loremcompany.com. 
    Please open it and click the button inside to confirm your subscription.
  
    Dismiss message */}

      {/* // <!-- Success message end --> */}
      <Image
        src="/images/illustration-sign-up-desktop.svg"
        width="400"
        height="593"
        alt=""
      />
    </main>
  );
}
