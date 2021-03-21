import Head from "next/head";
import styles from "../../styles/Home.module.css";
import useLogin from "../../hooks/useLogin";
import { providers, signIn } from "next-auth/client";

export default function Login() {
  const [login, loading] = useLogin();
  return (
    <div className={styles.container}>
      <Head>
        <title>Creator Rewards</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Creator Rewards NFT Hack</h1>
        {loading ? (
          <span>Loading...</span>
        ) : (
          <button
            //@ts-ignore
            onClick={login}
          >
            Log in with Rally
          </button>
        )}
      </main>
    </div>
  );
}
