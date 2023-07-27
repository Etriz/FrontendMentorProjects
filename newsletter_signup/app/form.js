"use client";

import styles from "./page.module.css";
import Image from "next/image";
import { useState } from "react";

export default function Form() {
  let [emailState, setEmailState] = useState("email@company.com");
  return (
    <form className={styles.form}>
      <h1>Stay updated!</h1>

      <p>Join 60,000+ product managers receiving monthly updates on:</p>

      <p>
        <Image src="/images/icon-list.svg" alt="" width="21" height="21" />
        Product discovery and building what matters
      </p>
      <p>
        <Image src="/images/icon-list.svg" alt="" width="21" height="21" />
        Measuring to ensure updates are a success
      </p>
      <p>
        <Image src="/images/icon-list.svg" alt="" width="21" height="21" />
        And much more!
      </p>
      <label htmlFor="emailInput">Email Address</label>
      <input
        name="emailInput"
        id="emailInput"
        type="email"
        placeholder="email@company.com"
        value={emailState}
        required
      />
      <button type="submit">Subscribe to monthly newsletter</button>
    </form>
  );
}
