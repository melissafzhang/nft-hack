import Head from "next/head";
import styles from "../../styles/Home.module.css";
import Link from "next/link";

export default function Home() {

  function Form() {
  const registerUser = async event => {
    event.preventDefault()

    const res = await fetch(
      'https://hooks.zapier.com/hooks/catch/123456/abcde',
      {
        body: JSON.stringify({
          name: event.target.name.value
        }),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      }
    )

    const result = await res.json()
    // result.user => 'Ada Lovelace'
  }
}


  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h4 className={styles.title}>Subscribe</h4>
        <p>50 $MATT for joining</p>
        <form onSubmit={registerUser}>
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" autoComplete="name" required />
          <button type="submit">Register</button>
        </form>




      </main>
    </div>
  );
}
