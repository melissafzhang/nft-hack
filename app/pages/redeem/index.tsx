import Head from "next/head";
import styles from "../../styles/Home.module.css";
import useLogin from "../../hooks/useLogin";
import { providers, signIn } from 'next-auth/client';

export default function Redeem() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Creator Rewards</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Redeem rewards</h1>

        <div class = "card">
          <h2>Tier level</h2>
          <h3> Diamond</h3>
        </div>

      </main>
    </div>
  );
}
